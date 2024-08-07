import logo from './logo.svg'
import './App.css'
import React, { useState } from 'react'
import VideoPlayer from './VideoPlayer'
function App() {
  const [testin, setTestIn] = useState('')
  const [testout, setTestOut] = useState('')
  const Fibonacci = (n) => {
    let counts = [[1,0],[0,1]]
    const fib = (n) =>{
      if(counts[n] !== undefined) return counts[n]
      return counts[n] = [fib(n-1)[0] + fib(n-2)[0],fib(n-1)[1] + fib(n-2)[1]]
    }
    return fib(n)
  }
  const handleInputChange =(event) => {
    let data = event.target.value.split('\n')
    let T = Number(data[0])
    data.shift()
    data = data.filter(num => num !=='')
    if(data.length === T){
      let out = ''
      data.map(number => {
        let result = Fibonacci(Number(number))
        out += result.join(' ').concat('\n')
      })
      setTestOut(out)
    }else{
      setTestOut('')
    }
  }

  return (
    <div className="App">
        <label>
          입력
        </label>
        <textarea style={{minHeight:'200px',minWidth:'400px'}} onChange={handleInputChange} />
        <label>
          출력
        </label>
        <p style={{minHeight:'200px',minWidth:'400px', backgroundColor:'white', color:'black',whiteSpace:'pre-wrap'}}>{testout}</p>
        <label>
          영상출력
        </label>
        <div style={{minHeight:'200px',minWidth:'400px'}}>
          <VideoPlayer url={'http://localhost:4000/index.m3u8'}/>
        </div>
    </div>
  );
}

export default App
