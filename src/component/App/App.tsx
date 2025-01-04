import Main from '../../pages/main-page/Main';
import { AmountPlaces } from '../Types/types';

function App({amountPlacesRent}: AmountPlaces) {
  return (
    <Main amountPlacesRent={amountPlacesRent}/>
  );
}

export default App;
