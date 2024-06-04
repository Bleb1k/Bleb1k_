import { ComponentChildren } from 'preact'

export function Footer(args: { children: ComponentChildren }) {
  return (
    <footer className="footer footer-center p-4 ">
      {typeof args.children == 'string' ? (
        <aside>
          <p>{args.children}</p>
        </aside>
      ) : (
        args.children || ''
      )}
    </footer>
  )
}

export function SubheaderText(args: { children: string }) {
  return <h2>{args.children}</h2>
}

export function BodyText(args: { children: ComponentChildren }) {
  return <p>{args.children}</p>
}

export function AuxiliaryText(args: { children: ComponentChildren }) {
  return (
    <p className="text-white text-lg opacity-60 font-semibold">
      {args.children}
    </p>
  )
}

export function HeaderText(args: { children: ComponentChildren }) {
  return <p className="font-bold text-4xl md:text-7xl py-8">{args.children}</p>
}

export function Link(args: { children: ComponentChildren; url: string }) {
  return (
    <a href={args.url} target="_blank">
      {args.children}
    </a>
  )
}

export function TextButton(args: {
  children: ComponentChildren
  onClick: () => void
}) {
  return (
    <button className="btn" onClick={args.onClick}>
      {args.children}
    </button>
  )
}
