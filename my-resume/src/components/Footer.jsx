import React from 'react'

import { Github ,Linkedin,Mail,Phone} from 'lucide-react';
const Footer = () => {
  return (
    <div>
       <div className="p-2 h-20 flex justify-evenly items-center bg-blue-700">
       <button className=" hover:rounded-full hover:bg-white"><a href="https://github.com/YokeshSM" target="_blank"><Github className="p-1 h-10 w-10 " /></a></button> 
       <button className=" hover:rounded-full hover:bg-white"><a href="https://www.linkedin.com/in/yokesh-sm-2a6220220/" target="_blank"><Linkedin className="p-1 h-10 w-10" /></a></button> 
       <button className="hover:rounded-full hover:bg-white"><a href="mailto:yokeshsm2003783@gmail.com" ><Mail className="p-1 h-10 w-10"/></a></button> 
       <button className="hover:rounded-full hover:bg-white"><a href="tel:+91 8098327811" ><Phone className="p-1 h-10 w-10"/></a></button> 
        </div>
    </div>
  )
}

export default Footer
