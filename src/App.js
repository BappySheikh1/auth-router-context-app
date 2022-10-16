import './App.css';
import { RouterProvider } from 'react-router-dom';
import {router} from "./utiliti/Router/router"

function App() {
  return (
    <div className="App">
    
      <RouterProvider router= {router} />
    </div>
  );
}

export default App;
