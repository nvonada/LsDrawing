import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";


function App() {

  const [listOfCategories, setListOfCategories] = useState([]);
  useEffect(UseEffectCallback, []);
  
  return (
    <div className="App">
      {listOfCategories.map((value, key) => { return <div> {value.CategoryName} </div>})}
    </div>
  );

  function UseEffectCallback()
  {
    console.log("Effect called");
    axios.get("http://localhost:3001/categories").then((response) => {
    setListOfCategories(response.data);
    });
  }
}

export default App;
