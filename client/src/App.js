import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Categories from "./pages/Categories";

function App()
{
  return (<div className='App'>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/Categories" exact element={<Categories/>}/>
      </Routes>
    </Router>
  </div>);
}

export default App;
