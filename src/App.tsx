import './App.css'

interface Props {
  x: number
  y: number
}

function App(props: Props = { x: 0, y: 0 }) {

  return (
    <div className="App">
      <div>
        <h1>x={props.x}, y={props.y}</h1>
        <h1>direction=N</h1>
      </div>
    </div>
  )
}

export default App
