import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import Home from '../components/Home';
import AllVinyls from '../components/vinyl/AllVinyls';
import { me } from './store';

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route to="/home" element={<Home />} />
        </Routes>
      ) : (
        <Routes>
             <Route
            path="/allVinyls"
            element={<AllVinyls name="allVinyls" displayName="All Vinyls" />}
            />
               <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />
           <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/*"
            element={<AuthForm name="login" displayName="Login" />}
          />
     
       
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
