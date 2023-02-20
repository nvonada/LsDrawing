import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";


function Categories() 
{
    const [listOfCategories, setListOfCategories] = useState([]);
    useEffect(UseEffectCallback, []);
    return (
      <div className="categories">
        {listOfCategories.map(CategoriesDisplay)}
      </div>
    );

    // This gets called twice in the browser because we are in STRICT mode on development server.  The second call
    // bombs out with a warning since we have a duplicate key.  Is this a problem?  
    function UseEffectCallback()
    {
        axios.get("http://localhost:3001/categories").then((response) => {
        setListOfCategories(response.data);
    });
  }
}

function CategoriesDisplay(value, key)
{
  const status = value.Disabled ? "Disabled" : "Enabled";
  const plural = value.DefaultNumberOfWinners > 1 ? "s" : "";
  const recordDivs = (
    <div className="category">
        <div className='category_name'>{value.CategoryName}</div>
        <div className='category_num_winners'>{value.DefaultNumberOfWinners} winner{plural}</div>
        <div className='category_status'>{status}</div>
    </div>);

  return recordDivs;
}

export default Categories