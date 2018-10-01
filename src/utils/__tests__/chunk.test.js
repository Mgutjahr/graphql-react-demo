import chunk from "../chunk"

test("Should chunk array into sub-arrays of max size", () => {
  const test = [
    {id: 'a'},
    {id: 'b'},
    {id: 'c'},
    {id: 'd'},
    {id: 'e'},
    {id: 'f'},
    {id: 'g'}
    ]

  expect(chunk(test, 3)).toEqual([
    [
      {id: 'a'},
      {id: 'b'},
      {id: 'c'}
    ],
    [
      {id: 'd'},
      {id: 'e'},
      {id: 'f'}
    ],
    [
      {id: 'g'}
    ]
  ])
})