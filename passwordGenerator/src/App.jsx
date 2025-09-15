import { useState,useCallback,useEffect,useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password,setPassword] = useState("")

const passRef = useRef(null)

  const passGen = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) {
      str += "0123456789"
    }
    if(charAllowed) {
      str += "}{[]#@$&*!().,"
    }
    for (let i = 1;i<=length;i++){
      let char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipBoard = useCallback(() =>{
    passRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect (()=> {
    passGen();
  },[length,numberAllowed,charAllowed,passGen])

  return (
    <>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-8 text-orange-800 bg-gray-800'>
        <h1 className='text-white text-center '>Password Generator</h1>
        <div className='flex shadow-rounded-lg overflow-hidden mt-2 mb-4 bg-amber-50 rounded-lg p-2'>
          <input type="text" 
          value = {password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passRef}
          
          />
          <button className='bg-blue-600 px-4 rounded-lg text-white outline-none py-0.5 shrink-0 '
          onClick={copyPasswordToClipBoard}>Copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
              />
              <label className='text-white px-2'>Length: {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox"
              defaultChecked ={numberAllowed}
              id='numberInput'
              onChange={()=>{
                setNumberAllowed( (prev) => !prev);
              }}
              />
              <label className="text-white">Number</label>
            </div>
             <div className='flex items-center gap-x-1'>
              <input type="checkbox"
              defaultChecked ={charAllowed}
              id='specCharInput'
              onChange={()=>{
                setCharAllowed( (prev) => !prev);
              }}
              />
              <label className="text-white">Special Char</label>
            </div>
        </div>
      </div>
      
      
      
    </>
  )
}

export default App
