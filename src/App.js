
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './Common/Footer';
import Header from './Common/Header';
import Home from './components/Home';
import News from './components/News';
import Sportsnews from './components/Sportsnews';
import Login from './Auth/Login';
import Football from './components/Football';
import Basketball from './components/Basketball';
import Tennis from './components/Tennis';
import NotFoundRoute from './components/NotFoundRoute';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="news" element={<News/>} />
          <Route path="sportsnews" element={<Sportsnews/>} />
          <Route path="login" element={<Login />} />
          <Route path="football"element={<Football/>} />
          <Route path="basketball" element={<Basketball/>} />
          <Route path="tennis" element={<Tennis/>} />
          <Route path="*" element={<NotFoundRoute />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
