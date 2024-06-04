import { type Project } from 'types/Project'
import { ComponentChildren } from 'preact'

export default function Project({
  title,
  titleBadge,
  url,
  img,
  description,
  badges,
}: Project) {
  const Url = url
    ? (foo: ComponentChildren) => <a href={url}>{foo}</a>
    : (foo: ComponentChildren) => foo
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      {img ? (
        <figure>{Url(<img src={img.url} alt={img.alt} />)}</figure>
      ) : undefined}

      <div className="card-body">
        <h2 className="card-title">
          {Url(title)}
          {titleBadge ? (
            <div className="badge badge-secondary">{titleBadge}</div>
          ) : undefined}
        </h2>
        <p>{description}</p>
        {badges && badges.length > 0 ? (
          <div className="card-actions justify-end">
            {badges.map((b) => (
              <div className="badge badge-outline">{b}</div>
            ))}
          </div>
        ) : undefined}
      </div>
    </div>
  )
}
