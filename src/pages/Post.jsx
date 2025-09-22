import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import style from "../css/post.module.css"
import ShimmerCard from "../components/ShimmerCard"

const Post = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const id = query.get('postid');
  const [postData,setPostData] = useState({});

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res)=>{
      return res.json();
    }).then((data)=>{
      setPostData(data);
    })
  },[])

  console.log(postData);

  return (
    <>
      {
        (postData.length===0)?<ShimmerCard/>:
        <div className={style.container}>
          <h2>{postData.title}</h2>
          <p>{postData.body}</p>
        </div>
      }
    </>
  )
}

export default Post