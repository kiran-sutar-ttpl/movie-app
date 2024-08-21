import { useSelector } from 'react-redux';
import './App.css';
import Loader from './businesslogic/loader/Loader';
import Home from './routes';
import Toaster from './businesslogic/toaster/Toaster';

function App() {
  const { isLoading } = useSelector((state) => state.loader);

  return (
    <div className="App h-100 background-color">
      {isLoading && <Loader />}
      <Home/>
      <Toaster />
    </div>
  );
}

export default App;
