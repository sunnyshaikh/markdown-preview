import { useState } from 'react'
import './App.css'
import ReactMarkdown from 'react-markdown'

function App() {
  const [markdown, setMarkdown] = useState("")

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">React Markdown Preview</h1>
        <div className="text-container">
          <textarea
            className="textarea" onChange={e => setMarkdown(e.target.value)} value={markdown}>
          </textarea>
          <ReactMarkdown children={markdown} className="textarea" />
        </div>
      </div>
    </div >
  )
}

export default App
