import React, { useState, useEffect } from 'react';

export default  function Year_search({search}){
    const [value,setValue] = React.useState('');
    
    const handleSubmit = e => {
      e.preventDefault();
      if(!value) return;

      
      search(value);
      setValue('');
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          className="input"
          value={value}
          placeholder="Año a buscar"
          onChange={e => setValue(e.target.value)} />
      </form>
    )
  }
  