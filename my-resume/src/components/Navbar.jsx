import React from 'react'
import {Link} from "react-router-dom"
import {CircleUserRound } from "lucide-react"
const Navbar = () => {
  return (
    <div className=" flex flex-wrap">
      <div className="w-screen flex flex-wrap flex-row justify-around p-5 bg-blue-600 m-2 shadow-xl ">
        <h1 className="text-4xl text-white">YokeshSM</h1>
        <div className="flex flex-wrap flex-row justify-center items-center">
            <ul className="flex flex-row justify-center items-center space-x-5">
                <li className="hover:text-slate-50"><Link to="/">Home</Link></li>
                <li className="hover:text-slate-50"><Link to="/about">About</Link></li>
                <li className="hover:text-slate-50"><Link to="/projects">Projects</Link></li>
                <li className="hover:bg-white rounded-full "><Link to="/login"><CircleUserRound /></Link></li>
            </ul>
        </div> 
      </div>
    </div>
  )
}

export default Navbar