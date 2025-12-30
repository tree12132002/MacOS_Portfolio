import { Navbar, Welcome, Dock } from '#components'
import { Resume, Safari, Terminal, Finder, Text, Image } from '#windows'
import { Draggable } from 'gsap/Draggable'
import gsap from 'gsap'

gsap.registerPlugin(Draggable)

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
    </main>
  )
}

export default App
