import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PhotoViewer } from './PhotoViewer/PhotoViewer'
import './PhotoViewer/PhotoViewer.css'
import { ImageSelector } from './PhotoViewer/ImageSelector'


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div>
        <PhotoViewer name='Vicky' url='https://picsum.photos/id/124/1200/400.jpg' />
        <ImageSelector />
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
