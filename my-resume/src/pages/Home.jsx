import React from 'react'
import Navbar from "../components/Navbar"
const Home = () => {
  return (

    <div>
      <div className=" h-[100%] w-6/6 p-10">
  <div className="bg-blue">
  </div>
  {/* <div className=" p-2">
    <div className="">
      <h1 className="text-2xl">Objective </h1>
      <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci asperiores cum sunt velit. Hic provident, fugit illo eaque sequi perferendis!</p>
    </div>
  </div> */}
  <div className="  flex flex-col">
    <h1 className=" p-2 text-2xl">Academic Details </h1>
    <div className="">
      <table className=" text-center border-collapse border-slate-400 border- table-fixed h-full w-full ">
        <tbody>
            <tr className=" bg-blue-700 border-collapse text-white border-slate-400 border h-full w-full">
            <th className=" bg-blue-700 border-collapse  text-white border-slate-400 border">Education</th>
            <th className=" bg-blue-700 border-collapse  text-white border-slate-400 border">School</th>
            <th className=" bg-blue-700 border-collapse  text-white border-slate-400 border">Grade</th>
            <th className="bg-blue-700 border-collapse  text-white border-slate-400 border">Passing Year</th>
          </tr>
          <tr className="bg-purple-50 border-collapse border-slate-400 border table-fixed h-full w-full">
            <td className="border-collapse border-slate-400 border">SSLC</td>
            <td className="border-collapse border-slate-400 border">Devanga Higher Secondary School</td>
            <td className="border-collapse border-slate-400 border">88.6%</td>
            <td className="border-collapse border-slate-400 border">2018-2019</td>
          </tr>
          <tr className="bg-purple-50 border-collapse border-slate-400 border table-fixed h-full w-full">
            <td className="border-collapse border-slate-400 border">HSC</td>
            <td className="border-collapse border-slate-400 border">Devanga Higher Secondary School</td>
            <td className="border-collapse border-slate-400 border">91.24%</td>
            <td className="border-collapse border-slate-400 border">2020-2021</td>
          </tr>
          <tr className="bg-purple-50 border-collapse border-slate-400 border table-fixed h-full w-full">
            <td className="border-collapse border-slate-400 border">B.E(ECE)</td>
            <td className="border-collapse border-slate-400 border">Sri Shakthi Institute of Engineering and Technology</td>
            <td className="border-collapse border-slate-400 border">8.55 CGPA</td>
            <td className="border-collapse border-slate-400 border">2021-2025</td>
          </tr>
        </tbody>
        </table>
    </div>
  </div>
  <div className="flex flex-col justify-center">
    <h1 className="p-2 text-2xl">Certifications</h1>
    <div className="cer">
      <table className=" text-center border-collapse border-slate-400 border- table-fixed h-full w-full ">
        <tbody>
          <tr className="border-collapse border-slate-400 border table-fixed h-full w-full">
            <th className="bg-blue-700 text-white" colSpan="3">Course</th>
          </tr>
          <tr className="bg-purple-50 border-collapse border-slate-400 border table-fixed h-full w-full">
            <td className="title">React</td>
            <td className="border-collapse border-slate-400 border">React JS for Beginners from UNSTOP</td>
            <td className="border-collapse border-slate-400 border">Jun-2024</td>
          </tr>
          <tr className="bg-purple-50 border-collapse border-slate-400 border table-fixed h-full w-full">
            <td className="border-collapse border-slate-400 border">Java</td>
            <td className="border-collapse border-slate-400 border">Complete Java Course with VS code from Udemy</td>
            <td>Aug-2023</td>
          </tr>
        </tbody></table>
    </div>
    <div className="gap-5  flex flex-wrap flex-row justify-evenly p-10">
    <div className="p-5 bg-purple-50  border-slate-400 border text-center">
      <h1 className="text-center text-2xl">Skills</h1>
      <div className="text-center">
        <div className="con">
          <ul>
            <li>Java</li>
            <li>MySQL</li>
            <li>Data Structures</li>
            <li>FrontEnd Development</li>
            <li>Operating Systems</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="p-5 bg-purple-50  border-slate-400 border text-center">
      <h1 className="text-center text-2xl" >Hobbies</h1>
      <div className="box">
        <div className="flex p-">
          <ul>
            <li>Cooking</li>
            <li>Gardening</li>
            <li>Singing</li>
            <li>Watching Movies</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="p-5 bg-purple-50  border-slate-400 border text-center ">
      <h1 className="text-center text-2xl">Soft Skills</h1>
      <div className="box">
        <div className="con">
          <ul>
            <li>Pressure Handling</li>
            <li>Public Speaking</li>
            <li>Team Work</li>
            <li>Punctual</li>
            <li>Didactic</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="p-5  bg-purple-50  border-slate-400 border text-center ">
      <h1 className="text-center text-2xl">Front-End Development</h1>
      <div className="box">
        <div className="con">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  </div>
</div>
<div className=" p-10 rounded-lg   flex flex-col justify-center items-center text-justify">
  <h1 className="text-3xl font-bold text-center mb-6">Achievements</h1>
  <ul className="list-disc list-inside space-y-4 text-lg text-gray-700">
    <li>
      Secured <strong>Student of the Year</strong> award for the academic year 2016-2017 at Devanga Higher Secondary School, awarded by Life Insurance Company (LIC).
    </li>
    <li>
      Secured an <strong>O Grade</strong> in Crop Production during the 1st semester at SIET. (The only person in the entire department to receive this OUTSTANDING grade.)
    </li>
    <li>
      Secured <strong>5034th Rank</strong> in TCS Codevita Season 11 conducted across India.
    </li>
    <li>
      Achieved <strong>100 and 50 days of Coding Badges</strong> from Leetcode.
    </li>
    <li>
      Attained the <strong>June Month Badge</strong> from Leetcode by solving the daily problems for the entire month in 2024.
    </li>
    <li>
      Achieved <strong>District First place</strong> two times in Quiz Competitions conducted by TNAU in 2017 and 2019.
    </li>
  </ul>
</div>
<div className="p-6 flex justify-center flex-col items-center rounded-lg shadow-lg">
  <h1 className="text-3xl font-bold text-center mb-6">Extra-Curricular Activities</h1>
  <ul className="list-disc list-inside space-y-4 text-lg text-gray-700">
    <li>
      <strong>Event Organizer</strong> for KALAM 2024 at SIET.
    </li>
    <li>
      <strong>Singing Jury Member</strong> from 2018 to 2021 at Devanga Higher Secondary School, Coimbatore.
    </li>
    <li>
      <strong>Rotaract Member</strong> for 2 years at Devanga Higher Secondary School during 2017 to 2018.
    </li>
    <li>
      Worked as a <strong>Science Tutor</strong> for 3 years at Rankers Tuition Centre from 2021 to 2024.
    </li>
  </ul>
</div>

    </div>
  )
}

export default Home
