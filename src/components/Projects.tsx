import Project from 'components/Project'
import ProjectData from 'data/Projects'

export default function Projects() {
  return (
    <div className="grid place-items-center grid-cols-1 md:grid-cols-2">
      {ProjectData.map(Project)}
    </div>
  )
}
