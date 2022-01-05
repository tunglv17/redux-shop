import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { getProducts } from './redux/product/action';
import Routers from './Routes';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
  }, [])
  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default App;
