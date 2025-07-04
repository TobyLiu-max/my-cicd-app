import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import tangping from './assets/tangping.jpeg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div
        style={{
          display: 'flex',
          width: 'calc(100% - 2rem)',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>Hello 琼姐</h1>
        <div>
          <img
            src={tangping}
            className='tangping'
            alt='你今天躺平了吗'
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </div>

      {/* <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
