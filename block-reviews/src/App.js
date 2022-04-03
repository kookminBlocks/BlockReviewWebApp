import React, { useState } from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login/Login';
import Register from './components/login/Register';
import WriteReview from "./components/review/WriteReview";
import DetailReview from "./components/review/Detail";
import DetailStore from "./components/Stores/DetailStore";
import My from "./components/user/My";
import AddStore from "./components/Stores/AddStore";
import Header from "./components/Header/Header";


function App() {
  return (
    <div className='App'>
      <Header />
        <div className='block-review-banner'>
            BLOCK REVIEWS
        </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/store" element={<AddStore/>}/>
        <Route path="/my/:userId" element={<My />} />
        <Route path="/review/write" element={<WriteReview />} />
        <Route path="/review/:reviewId" element={<DetailStore />} />
      </Routes>

    </div>

  );
}
export default App;
