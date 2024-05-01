import { useState } from "react";
import Markdown from 'react-markdown';

function App() {
  const  [input, setInput] = useState(
  `# heading h1
   ## heading h2
   ### heading h3
   #### heading h4
   ##### heading h5
   ###### heading h6
   
text **bold**

_italic_.

**_both!_**

 ~~crossing~~.
 
- lists:
  - bulleted
     - two
        - three

[link](https://github.com/ZvonimirZlo)
> Block Quotes

![React Logo w/ Text](https://assets.browserlondon.com/app/uploads/2021/02/React-king-768x432.jpg)
   `
);

  return (
    <>
    <div className="container">
      <div>
         <textarea autoFocus className="textarea" value={input} onChange={(e) => setInput(e.target.value)}/>
      </div>
      <div><Markdown className='output'>{input}</Markdown></div>
    </div>
   </>
  )
}

export default App
