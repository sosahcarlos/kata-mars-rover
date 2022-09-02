import { render } from "@testing-library/react"
import { describe } from "vitest"
import App from "./App"

describe('App', () => {
  it('Should show the initial position', () => {
    const { getByText } = render(<App x={0} y={0}/>)

    expect(getByText('x=0, y=0')).toBeInTheDocument()
  })

  it('Should show the initial direction', () => {
    const { getByText } = render(<App x={0} y={0}/>)

    expect(getByText('direction=N')).toBeInTheDocument()
  })

  it('Should show the initial position recieved', () => {
    const x = 1
    const y = 1
    const { getByText } = render(<App x={x} y={y}/>)

    expect(getByText('x=1, y=1')).toBeInTheDocument()
  })
})