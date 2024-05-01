import { useState } from "react";
import Markdown from 'react-markdown';

function App() {
  const [input, setInput] = useState(
    `
  👉 Changes are re-rendered as you type.

  👈 Try writing some markdown on the left.


  # heading h1
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

[link](https://github.com)
> Block Quotes


![React Logo w/ Text](https://assets.browserlondon.com/app/uploads/2021/02/React-king-768x432.jpg)
   `
  );

  return (
    <>
      <div className="row">
        <div className='col-6'>
          <textarea className="textarea p-4" autoFocus value={input} onChange={(e) => setInput(e.target.value)} />
        </div>
        <div className='col-6 p-4 output'>
          <Markdown>{input}</Markdown>
        </div>
      </div>
    </>
  )
}

export default App;
