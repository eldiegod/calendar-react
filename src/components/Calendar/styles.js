import styled from 'styled-components'

export const Grid = styled.div`
  width: 75%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(7, 1fr [col-start]);
  grid-template-rows: 1fr 1fr repeat(5, 3fr [row-start]);
  font-weight: bold;
  grid-auto-flow: row;
  background-color: lightcoral;
`
export const DayOfTheWeek = styled.div`
  text-align: center;
  padding-top: 10px;
  border: solid;
`
export const Header = styled.div`
  padding-top: 15px;
  text-align: center;
  grid-area: 1 / 1 / 2 / 8;
`
