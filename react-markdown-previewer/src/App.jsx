import { useState } from "react";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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
text **bold**.

*italic*.

**_both!_**

 ~strikethrough~.

- lists:
  - bulleted
     - two
        - three

  1. numbered list
  2. numbered list

* [ ] task list
* [x] checked item


[link](https://github.com)
> Block Quotes


![React Logo w/ Text](https://assets.browserlondon.com/app/uploads/2021/02/React-king-768x432.jpg)
   `
  );

  return (
    <>
      <div className="row">
        <div className='col-6'>
          <textarea className="textarea p-4" value={input} onChange={e => setInput(e.target.value)} />
        </div>
        <div className='col-6 p-4 output'>
        <Markdown remarkPlugins={[remarkGfm]}>{input}</Markdown>
        </div>
      </div>
    </>
  )
}

export default App;
