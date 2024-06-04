export default function IconButton(args: { icon: string; url: string }) {
  return (
    <a href={args.url}>
      <img src={`images/${args.icon}.svg`} alt={args.icon} />
    </a>
  )
}
