import { useState,useEffect,useRef,useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(6);
  const [password, setPassword] = useState("");
  const [isNumber, setIsNumber] = useState(false);
  const [isChar, setIsChar] = useState(false);
  const passwordRef = useRef();


  const handlePasswordGen = useCallback(() => {
    
    let pass = '';

    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (isNumber) str += '0123456789';
    if (isChar) str += "!@#$%^&*()_+~<>,.?/}{|'";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass)

  }, [length, isChar, isNumber, setPassword]);



  const handleCopyToClipBorad = () => {

    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);

  }

  
  
  useEffect(() => {
    handlePasswordGen();
  }, [length, isNumber, isChar, handlePasswordGen]);


  return (
    <>
      <div className="container">
        <h2 className='text-3xl font-bold text-center'>Password Generator</h2>
        <div className="card">
          <div className="inputValue">  
          <input
              type="text"
              className='passwordInput'
              ref={passwordRef}
              value={password}
          />
            <button onClick={ handleCopyToClipBorad} className="copy">copy</button>
          </div>
          <div className='flexCard'>
            <div className="rangeCard">
              <input
                type="range"
                min={6}
                max={20}
                id='range'
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
              <label htmlFor="range"> Length : ({length}) </label>
            </div>
            <div className="isNumCard">
              <input
                id='numInput'
                defaultChecked={isNumber}
                type="checkbox"
                onChange={() => setIsNumber(pre => !pre)}
              />
              <label htmlFor="numInput">Numbers</label>
            </div>
            <div className="isCharCard">
              <input
                id='charInput'
                type="checkbox"
                defaultChecked={isChar}
                onChange={() => setIsChar(pre => !pre)}
              />
              <label htmlFor="charInput">Charecter</label>
            </div>
         
          </div>
        </div>

     </div>
    </>
  )
}

export default App
