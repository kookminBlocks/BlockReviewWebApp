// #region library
import React, { useEffect, useState } from "react";
import { BrowserRouter, useNavigate, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//#endregion
// #region Comp URL
import Login from './components/login/Login';
import Register from './components/login/Register';
import My from "./components/user/My";
import AddStore from "./components/Stores/AddStore";
import Header from "./components/Header/Header";
//#endregion
// #region location
import './App.css';
import LoginCheck from './components/Commons/IsLogin'
import { ReviewDetail_Url, WriteReview_Url, login_Url,logout_Url , MyPage_Url, Register_Url, StoreList_Url, StoreCreate_Url, DetailStore_Url } from './components/Commons/PathUrl'
import PrivateRoute from "./components/Commons/PrivateRoute";
import PublicRoute from "./components/Commons/PublicRoute";
import StoreList from "./components/Stores/StoreList";
import WriteReview from "./components/review/WriteReview";
import DetailStore from "./components/Stores/DetailStore";
import DetailReview from "./components/review/Detail";

//#endregion
function App() {
  const [user, setUser] = useState(null)

  // const navigate = useNavigate();

  useEffect(() => {
    if (LoginCheck()) {
      setUser(localStorage.getItem('user'));
    }
    else {
    }
  })

  return (
    <div className='App'>
      <Header />
      <div className='block-review-banner'>
        BLOCK REVIEWS
      </div>
      <Routes>      
        <Route path={login_Url} element={
          <PublicRoute>
            <Login/>
          </PublicRoute>}>
        </Route>
        <Route path={Register_Url} element={
          <PublicRoute>
            <Register />
          </PublicRoute>}>
        </Route>
        <Route path={DetailStore_Url} element={
          <PrivateRoute>
            <DetailStore />
          </PrivateRoute>}>
        </Route>
        <Route path={StoreList_Url} element={
          <PrivateRoute>
            <StoreList />
          </PrivateRoute>}>
        </Route>   
        <Route path={StoreCreate_Url} element={
          <PrivateRoute>
            <AddStore />
          </PrivateRoute>}>
        </Route>  
        <Route path={MyPage_Url} element={
          <PrivateRoute>
            <My />
          </PrivateRoute>}>
        </Route>
        <Route path={WriteReview_Url} element={
          <PrivateRoute>
            <WriteReview />
          </PrivateRoute>}>
        </Route>
        <Route path={ReviewDetail_Url} element={
          <PrivateRoute>
            <DetailReview />
          </PrivateRoute>}>
        </Route>

        {/* <Route path={logout_Url} element={
          <PrivateRoute isLogin={isLogin}>
            <Logout />
          </PrivateRoute>}>
        </Route>  
      */}
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>

    </div>

  );
}
export default App;
