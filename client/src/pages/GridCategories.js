import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';


function GridCategories() 
{
    const [listOfCategories, setListOfCategories] = useState([]);
    useEffect(UseEffectCallback, []);

    return (
      <div className="pageDiv">
        <h1>Drawing Categories</h1>
        {BuildDataGrid(listOfCategories)}
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

function BuildDataGrid(dataList)
{
  const columns: GridColDef[] = [
    { field: 'CategoryName', headerName: 'Name', width: 250 },
    { field: 'DefaultNumberOfWinners', headerName: '# Winners', width: 100 },
    { field: 'Disabled', headerName: 'Disabled', width: 80 }
  ];

  const grid = (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={dataList} columns={columns} />
    </div>
  );

  return grid;
}

export default GridCategories