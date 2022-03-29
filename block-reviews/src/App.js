import React, { useState } from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login/Login';
import Register from './components/login/Register';
import WriteReview from "./components/review/WriteReview";
import DetailReview from "./components/review/Detail";
import My from "./components/user/My";
import AddStore from "./components/stores/AddStore";
import DetailStore from './components/stores/DetailStore';
import ListStore from './components/stores/StoreList';
import NavBar from "./components/user/NavBar";


function App() {
  const [token, setToken] = useState();

  // if(!token){
  //   return <Login setToken={setToken}/>
  // }
  
  return (
    <div className='App'>
      {
        token ? 
        <NavBar/>
        :
        null
      }
          <div className='block-review-banner'>
                BLOCK REVIEWS
            </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/store/list" element={<ListStore/>}/>
        <Route path="/store/create" element={<AddStore/>}/>
        <Route path="/store/detail/:storeId" element={<DetailStore/>}/>
        <Route path="/my/:userId" element={<My />} />
        <Route path="/review/write" element={<WriteReview />} />
        <Route path="/review/:reviewId" element={<Register />} />
      </Routes>

    </div>

  );
}
export default App;
