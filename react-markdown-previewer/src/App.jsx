import { useState } from "react";

function App() {
  const  [input, setInput] = useState('');

  return (
    <>
      <div>
         <textarea className="textarea" value={input} onChange={(e) => setInput(e.target.value)}></textarea>
      </div>
   </>
  )
}

export default App
