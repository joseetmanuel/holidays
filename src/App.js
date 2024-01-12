import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Holiday from './holiday';
import Year_search from './year_search';

function App() {
  const [days, setDays] = React.useState([]);
  const [year_s, setYear] = React.useState("2024");

  // Aquí es donde hay que buscar por default
  const search = async(anio) => {
    let url = `https://calendarific.com/api/v2/holidays?api_key=VxPrmDvQnC5MShLgaA3TXmd0YEANyIfp&country=MX&year=${anio}&language=es`;
    const resp = await fetch(url)
    const data = await resp.json()
  
    if(data.response.holidays && data.response.holidays.length >0 )
      setDays(data.response.holidays);
    
  };

  useEffect(() => {
    search(year_s);
  }, [year_s]);

  return (
    <div className="app">
      <Year_search search={search} />
      <br />
      <div className="todo-list">
        {days.map((day, i) => (
          <Holiday key={i}  h_day={day}  />
        ))}
      </div>
    </div>
  );
}

export default App;
