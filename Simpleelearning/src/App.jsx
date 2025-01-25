import { useState } from 'react';
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/Authentication/Signup';
import Signin from './components/Authentication/Signin';
import Home from './components/Authentication/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Router> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      {/* </Router> */}
    </>
  );
}

export default App;