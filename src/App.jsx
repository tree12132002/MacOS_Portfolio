import { Navbar, Welcome, Dock } from '#components'
import { Resume, Safari, Terminal, Finder } from '#windows'
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
    </main>
  )
}

export default App
