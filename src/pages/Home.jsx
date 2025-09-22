import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import style from "../css/home.module.css"
import ShimmerCard from '../components/ShimmerCard';

const Home = () => {
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
      if(!res.ok) throw new Error('unable to fetch network');
      return res.json();
    }).then(data=>{
      setData(data);
      console.log(data);
    }).catch(err=>{
      console.log('error');
    })
  },[])

  const arr=new Array(100).fill(undefined);
  const [data,setData] = useState([]);
  return (
    <>
    <div className={style.container}>
      {
        (data.length===0)?
        arr.map((val,idx)=>{
          return <ShimmerCard key={idx}/>
        }):
        <>
          {
            data.map((entry)=>{
              return <Card key={entry.id} entry={entry}/>
            })
          }
        </>
      }
      </div>
    </>
  )
}

export default Home