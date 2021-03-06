import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const NoteApp = () => {
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addNote = (e) => {
    e.preventDefault()
    setNotes([
      ...notes,
      {
        title,
        body
      }
    ])
    setTitle('')
    setBody('')
  }

const removeNote = (title) => {
  setNotes(notes.filter(() => note.title !== title))
}

  return (
    <div>
      <h1>Notes</h1>
      {notes.map((note) => (
        <div key={note.title}>
          <h3>{note.title}</h3>
          <p>{note.body}</p>
          <button onClick={() => removeNote(note.title)}>X</button>
        </div>
      ))}
      <p>Add note</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)}/>
        <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <button>Add Note</button>
      </form>
    </div>
  )
}
// const App = (props) => {
//     // const [count, setCount] = useState(props.count)
//     // const [text, setText] = useState('')
//     const [state, setState] = useState({
//         count: props.count,
//         text: ''
//     })

//     return (
//         <div>
//             <p>The current {state.text || 'count'} is {state.count}</p>
//             <button onClick={() => setState({ count: state.count - 1 })}>-1</button>
//             <button onClick={() => setState({ count: props.count })}>reset</button>
//             <button onClick={() => setState({ count: state.count + 1 })}>+1</button>
//             <input value={state.text} onChange={(e) => setState({ text: e.target.value })} />
//         </div>
//     )
// }

// const App = (props) => {
//     const [count, setCount] = useState(props.count)
//     const [text, setText] = useState('')

//     return (
//         <div>
//             <p>The current {text || 'count'} is {count}</p>
//             <button onClick={() => setCount(count - 1)}>-1</button>
//             <button onClick={() => setCount(props.count)}>reset</button>
//             <button onClick={() => setCount(count + 1)}>+1</button>
//             <input value={text} onChange={(e) => setText(e.target.value)}/>
//         </div>
//     )
// }

ReactDOM.render(<NoteApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
