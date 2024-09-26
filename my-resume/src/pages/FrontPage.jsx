import React from 'react'
import Pumpkin from '../assets/images/pumpkin.jpg'
import { FaHtml5 } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io5";
import {Link} from "react-router-dom"
import '../assets/css/index.css'
import Coverimg from "../assets/images/1718286631102.jpeg"
const FrontPage = () => {
  return (
    <div className="flex  ">
      <div className="w-screen flex flex-col gap-10">
        <div className="p-10 gap-20 flex  flex-row flex-wrap justify-evenly items-center ">
        <div className="h-64 w-64 rounded-md flex flex-wrap flex-row text-center justify-evenly ">
        <img className="rotate-center  rounded-full shadow-2xl hover:shadow-xl" src={Pumpkin}/>
        </div>
        <div className="hover:shadow-xl p-5  w-4/6 rounded-lg flex flex-wrap flex-row text-center justify-around items-center bg-[#DCBFFF] shadow-2xl gap-4">
        <h1 className="text-2xl flex flex-wrap ">Hi, I'm Yokesh SM.</h1>
        <p className="text-center flex flex-wrap">A passionate Frontend Developer creating innovative solutions and experiences.
        Let’s build something amazing together.</p>
        <Link to="/about"><button  className="w-30 px-3 bg-blue-400 shadow-2x rounded-md hover:bg-blue-200" type="submit">Click Here</button></Link>
        
        </div>
        </div>
        <div className=" flex flex-wrap justify-around ">
        <div className=" border-4 border-slate-300 rounded-full hover:shadow-xl"> <FaJava className="p-1" size={48}/></div>
        <div className=" border-4 border-slate-300 rounded-full hover:shadow-xl"> <SiMysql className="p-1"  size={48}/></div>
        <div className="border-4 border-slate-300 rounded-full hover:shadow-xl"> <FaReact className="p-1"  size={48} /> </div>
        <div className="border-4 border-slate-300 rounded-full hover:shadow-xl"> <FaHtml5 className="p-1"  size={48} /> </div>
        <div className=" border-4 border-slate-300 rounded-full hover:shadow-xl"> <FaCss3Alt className="p-1"  size={48} /></div>
        <div className=" border-4 border-slate-300 rounded-full hover:shadow-xl">  <IoLogoJavascript className="p-1"  size={48} /></div>
        <div className="border-4 border-slate-300 rounded-full hover:shadow-xl"> <BsGithub className="p-1"  size={48} /></div>
        </div>
        <div>
          <img className="h-full w-full px-5 " src={Coverimg}></img>
        </div>
        <div className="p-5 flex text-center flex-wrap justify-center items-center">
        Self-motivated Electronics and Communication Engineer, with strong communication and problem-solving 
skills. seeking to leverage my technical knowledge and passion for front-end development in an internship 
or entry-level role, where I can contribute meaningfully while gaining hands-on experience. 
        </div>
       
      </div>
    </div>
  )
}

export default FrontPage
