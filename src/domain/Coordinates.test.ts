import { Coordinates } from "./Coordinates"

describe('Coordinates', () => {
  it('Should have default values', () => {
    const coordinates = new Coordinates()

    expect(coordinates.x).toEqual(0)
    expect(coordinates.y).toEqual(0)
  })

  it('Should initilize values recived', () => {
    const coordinates = new Coordinates(1, 2)

    expect(coordinates.x).toEqual(1)
    expect(coordinates.y).toEqual(2)
  })
})