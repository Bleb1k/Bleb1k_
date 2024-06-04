import { ComponentChildren } from 'preact'

export default function Root(args: { children: ComponentChildren }) {
  return (
    <div className="container mx-auto pb-10 max-w-5xl pt-4 px-4">
      {args.children}
    </div>
  )
}
