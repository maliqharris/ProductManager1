import logo from './logo.svg';
import './App.css';
import NewProductPage from './views/NewProductPage';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Working</h1>
      <Routes>
        <Route path = '/product/new' element={<NewProductPage/>} />


      </Routes>
    </div>
  );
}

export default App;
