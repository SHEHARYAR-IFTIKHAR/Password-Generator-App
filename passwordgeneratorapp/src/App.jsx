import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")

  const PasswordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllow) str += "0123456789"
    if (charAllow) str += "~!@#$%^&*()_+{}[]?/><"

    for (let i = 1; i <= Array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass - str.charAt(char)
    }

  }, [length, numAllow, charAllow, setPassword])

  return (
    <>
      <div className='w-full h-screen flex justify-center items-center flex-col'>
        <h1 className='text-4xl text-center text-white font:bold'>Password Generator</h1>
        <div className="flex w-full justify-center items-center">
          <div className='w-full flex flex-col justify-center items-center max-w-md mx-auto shadow-md rounded px-4 py-8 my-8 text-orange-500 bg-gray-800'>
            <div className="w-full flex justify-center items-center shadow rounded overflow-hidden mb-0">
              <input type="text"
                value={Password}
                className='outline-none w-full py-1 px-3'
                placeholder='password'
                readOnly />
              <button className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0'>Copy</button>
            </div>
            <div className="flex w-full text-sm gap-x-2">
              <div className='flex gap-x-1 mt-3'>
                <input
                  type="range"
                  className='cursor-pointer'
                  min={6}
                  max={100}
                  value={length}
                  onChange={(e) => { setLength(e.target.value) }} />
                <label>Length: {length}</label>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
