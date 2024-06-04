let subscriber: (() => void) | undefined

type Atom = { _: any }

function signal(value?: any) {
  const subscribers: Set<() => void> = new Set()

  return {
    get _() {
      if (subscriber !== undefined) subscribers.add(subscriber)
      return value
    },
    set _(newValue) {
      value = newValue
      subscribers.forEach((fn) => fn())
    },
  }
}

function derived(fn: () => any) {
  const derived = signal()
  effect(() => {
    derived._ = fn()
  })
  return derived
}

export function effect(fn: () => void) {
  subscriber = fn
  fn()
  subscriber = undefined
}

export function atom(value?: (() => any) | any): Atom {
  switch (typeof value) {
    case 'function':
      return derived(value)
    default:
      return signal(value)
  }
}
