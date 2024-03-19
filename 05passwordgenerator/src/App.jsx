import { useState, useCallback } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setnumAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if (numAllowed) str += "0123456789"
      if (charAllowed) str += "!@#$%^&*_-+=[]{}~`()"
      
      
      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random()* str.length + 1)
        pass = str.charAt(char);

      }

      setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])

  return (
      <>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-500 '>
            <h1 className='text-white text-center my-3'>Password Generator</h1>
            <div className='flex shadow rounded-lg overflow-hidden mb-4'>
              <input 
                  type="text"
                  value={password}
                  className='outline-none w-full py-1 px-3'
                  placeholder='Password'
                  readOnly
              />
              <button className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0'>copy</button>

            </div>
            <div className='flex text-sm gap-x-2'>
              <div className='flex items-center gap-x-1'>
                <input 
                    type="range" 
                    min={6}
                    max={100}
                    value={length}
                    className='cursor-pointer'
                    name='length'
                    id='length'
                    onChange={(e) => {setLength(e.target.value)}}
                    />
                <label htmlFor="length">Length: {length}</label>
              </div>
              <div className='flex items-center gap-x-1'>
                <input 
                type="checkbox"
                defaultChecked={numAllowed}
                id='numInput'
                onChange={() => {
                  setnumAllowed((prev) => !prev);
                }} />
                <label htmlFor="numInput">Numbers</label>
              </div>
              <div className='flex items-center gap-x-1'>
                <input 
                type="checkbox"
                defaultChecked={charAllowed}
                id='charInput'
                onChange={() => {
                  setcharAllowed((prev) => !prev);
                }} />
                <label htmlFor="charInput">Characters</label>
              </div>
            </div>
        </div>
      </>
  )
}

export default App
