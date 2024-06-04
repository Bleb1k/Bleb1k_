import { Footer } from 'components/Text'
import Intro from 'components/Intro'
import Profile from 'components/Profile'
import Root from 'components/Root'
import Projects from 'components/Projects'

export default function App() {
  return (
    <Root>
      <Profile />
      <Intro />
      <Projects />
      <Footer>Конец портфолио! Спасибо за просмотр!</Footer>
    </Root>
  )
}
