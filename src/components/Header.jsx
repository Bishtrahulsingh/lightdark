import React, { useState,useEffect, useContext } from 'react'
import style from '../css/header.module.css'
import { ThemeContext } from '../contexts/ThemeProvider';

const Header = () => {
  const [theme,setTheme] = useContext(ThemeContext);

  function handleTheme(){
    setTheme((prev)=>{
      if(prev=='light'){
        localStorage.setItem('theme','dark');
        return 'dark';
      }

      localStorage.setItem('theme','light');
      return 'light';
    })
  }

  return (
    <div className={style.container}>
        <h2>hey what are you looking to eat</h2>
        <div>
          <button onClick={handleTheme} className={style.themeBtn} >{theme==='dark'?'light':'dark'} mode</button>
        </div>
    </div>
  )
}

export default Header