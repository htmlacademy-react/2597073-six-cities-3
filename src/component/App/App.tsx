import Main from '../Main/Main.tsx'
import { AmountPlaces } from '../Types/types.ts'

function App({amountPlacesRent}: AmountPlaces) {
  return (
    <Main amountPlacesRent={amountPlacesRent}/>
  )
}

export default App;
