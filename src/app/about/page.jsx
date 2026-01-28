import React from 'react'
import Logoslider from "@/app/home/logoslider/page";
import style from "@/app/styles/about.module.css"


export default function about() {
  return (
    <>
       <div className={style.hero}>
      <h1>My Center Text</h1>
    </div>

    <Logoslider />
    </>
  )
}
