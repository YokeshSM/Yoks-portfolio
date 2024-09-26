import React from 'react'
import { useState } from 'react'
import img from "../assets/images/mailbox-with-valentine-s-day-love-letter-romantic-correspondence-sending-love-letter-isolated-illustration-vector.jpg"
const login = () => {
    const [visible,setvisible]=useState(false)
    const handsubmit =(e)=>{
      
      window.alert("Form Submitted")
    }
  return (
      <>
      <div className="p-10">
       <div className="flex flex-col md:flex-row max-w-4xl mx-auto bg-purple-200 shadow-lg rounded-lg overflow-hidden">
     
      <div className="md:w-1/2">
        <img
          src={img}
          alt="Contact Us"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="md:w-1/2 p-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contact Us</h2>
        <form className="space-y-4" onSubmit={handsubmit}>
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </div>
      </>
 );
}
export default login;

//       {
//       visible && (
//       <div>
//        <div className="h-full w-full absolute left-0 bg-pink-50 flex justify-center items-center z-50">
//        <div className="h-[40%] w-[30%] bg-red  flex flex-col bg-white">
        



//        <div className="h- flex-wrap   flex justify-center items-center bg-pink-50 ">
//      <div className=" flex flex-col justify-center items-center rounded-md border border-gray-300 bg-white">
//      <h1 className="h- w-full flex  justify-center items-center rounded-t-md color-white text-4xl border text-white border-blue bg-blue-700">SOPHOS</h1>
//      <div className="p-5">
//      <form action="" className="flex flex-col justify-center items-center gap-4 rounded-md">
//       <input type="text" placeholder="Enter your Name" className=" h-full w-6/6 border text-center border-blue-950 rounded md"></input>
//       <input type="mail" placeholder="Enter your mail"className=" h-full w-full border text-center border-blue-950 rounded md"  ></input>
//       <input type="password" placeholder="Enter your password" className=" h-full w-full border  border-blue-950 text-center rounded md" ></input>
//       <button className="h- w- rounded md bg-green-500 text-center"type="submit ">Submit</button>
//       <a className="text-xs">Create Account</a>
//       <a className="text-xs">Forgot Password?</a>
//      </form>
//      </div>
//      </div>
//      </div>








//         {/* <div className=" h- w flex  flex-rowflex-wrap justify-center items-center  bg-zinc-400">
//             <button onClick={()=>setvisible(!visible)} className="bg-green-300 w-full ">Yes</button>
//             <button onClick={()=>setvisible(!visible)} className="bg-red-600 w-full  ">No</button>
//         </div> */}
//         </div>

//        </div>
//       </div>
//       )
//       }
//       <div className=" h-screen flex justify-center items-center">
//       <button onClick={()=>setvisible(true)} className="bg-blue-300 p-5 border b-4 ">Click ME</button>
//        </div>