import Main from '../../pages/Main/Main';
import { AmountPlaces } from '../Types/types';

function App({amountPlacesRent}: AmountPlaces) {
  return (
    <Main amountPlacesRent={amountPlacesRent}/>
  );
}

export default App;
