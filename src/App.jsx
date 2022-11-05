import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Home from './routes/Home/Home';
import Navigation from './components/navigation/Navigation';
import Authentication from './routes/Authentication/Authentication';
import Shop from './routes/Shop/Shop';
import Checkout from './routes/Checkout/Checkout';
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from './utils/firebase/firebase.utils';

import setCurrentUser from './store/user/user.action';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    return onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;

// Route index means when route matchs the parent path , render the selected element
