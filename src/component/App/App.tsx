import Router from '../Router/Router.tsx';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Router/>
      <ToastContainer position={'bottom-right'}/>
    </>
  );
}

export default App;
