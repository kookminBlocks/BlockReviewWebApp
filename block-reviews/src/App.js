import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login/Login';
import Register from './components/login/Register';

function App() {
  return (

    <div className='App'>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Register" element={<Register />} />
      </Routes>
    </div>

  );
}
export default App;
