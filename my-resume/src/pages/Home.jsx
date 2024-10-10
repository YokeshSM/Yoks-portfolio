import React from 'react';
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <div className="h-[100%] w-full p-10">
        {/* Academic Details */}
        <div className="flex flex-col mb-10">
          <h1 className="p-2 text-2xl text-center">Academic Details</h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Academic Card 1 */}
            <div className="bg-purple-50 p-5 shadow-lg rounded-lg border">
              <h2 className="text-lg font-semibold mb-2">SSLC</h2>
              <p><strong>School:</strong> Devanga Higher Secondary School</p>
              <p><strong>Grade:</strong> 88.6%</p>
              <p><strong>Passing Year:</strong> 2018-2019</p>
            </div>
            {/* Academic Card 2 */}
            <div className="bg-purple-50 p-5 shadow-lg rounded-lg border">
              <h2 className="text-lg font-semibold mb-2">HSC</h2>
              <p><strong>School:</strong> Devanga Higher Secondary School</p>
              <p><strong>Grade:</strong> 91.24%</p>
              <p><strong>Passing Year:</strong> 2020-2021</p>
            </div>
            {/* Academic Card 3 */}
            <div className="bg-purple-50 p-5 shadow-lg rounded-lg border">
              <h2 className="text-lg font-semibold mb-2">B.E (ECE)</h2>
              <p><strong>School:</strong> Sri Shakthi Institute of Engineering and Technology</p>
              <p><strong>Grade:</strong> 8.55 CGPA</p>
              <p><strong>Passing Year:</strong> 2021-2025</p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="flex flex-col mb-10">
          <h1 className="p-2 text-2xl text-center">Certifications</h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Certification Card 1 */}
            <div className="bg-purple-50 p-5 shadow-lg rounded-lg border">
              <h2 className="text-lg font-semibold mb-2">React</h2>
              <p>React JS for Beginners from UNSTOP</p>
              <p><strong>Date:</strong> Jun-2024</p>
            </div>
            {/* Certification Card 2 */}
            <div className="bg-purple-50 p-5 shadow-lg rounded-lg border">
              <h2 className="text-lg font-semibold mb-2">Java</h2>
              <p>Complete Java Course with VS Code from Udemy</p>
              <p><strong>Date:</strong> Aug-2023</p>
            </div>
          </div>
        </div>

        {/* Skills, Hobbies, Soft Skills, Front-End Development */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="p-5 bg-purple-50  border text-center shadow-lg rounded-lg">
            <h1 className="text-2xl">Skills</h1>
            <ul className="list-none space-y-2">
              <li>Java</li>
              <li>MySQL</li>
              <li>Data Structures</li>
              <li>FrontEnd Development</li>
              <li>Operating Systems</li>
            </ul>
          </div>
          <div className="p-5 bg-purple-50  border text-center shadow-lg rounded-lg">
            <h1 className="text-2xl">Hobbies</h1>
            <ul className="list-none space-y-2">
              <li>Cooking</li>
              <li>Gardening</li>
              <li>Singing</li>
              <li>Watching Movies</li>
            </ul>
          </div>
          <div className="p-5 bg-purple-50 border text-center shadow-lg rounded-lg">
            <h1 className="text-2xl">Soft Skills</h1>
            <ul className="list-none space-y-2">
              <li>Pressure Handling</li>
              <li>Public Speaking</li>
              <li>Team Work</li>
              <li>Punctual</li>
              <li>Didactic</li>
            </ul>
          </div>
          <div className="p-5 bg-purple-50  border text-center shadow-lg rounded-lg">
            <h1 className="text-2xl">Front-End Development</h1>
            <ul className="list-none space-y-2">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React JS</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>
        <br />
        <div className="">
  {/* Achievements Section */}
  <div className="p-10 bg-purple-50 rounded-lg flex flex-col justify-center items-center text-justify shadow-lg mb-6"> {/* Added mb-6 */}
    <h1 className="text-3xl font-bold text-center mb-6">Achievements</h1>
    <ul className="list-disc list-inside space-y-4 text-lg text-gray-700">
      <li>
        Secured <strong>Student of the Year</strong> award for the academic year 2016-2017 at Devanga Higher Secondary School, awarded by Life Insurance Company (LIC).
      </li>
      <li>
        Secured an <strong>O Grade</strong> in Crop Production during the 1st semester at SIET.
      </li>
      <li>
        Secured <strong>5034th Rank</strong> in TCS Codevita Season 11 conducted across India.
      </li>
      <li>
        Achieved <strong>100 and 50 days of Coding Badges</strong> from Leetcode.
      </li>
      <li>
        Attained the <strong>June Month Badge</strong> from Leetcode in 2024.
      </li>
      <li>
        Achieved <strong>District First place</strong> two times in Quiz Competitions by TNAU.
      </li>
    </ul>
  </div>

  {/* Extra-Curricular Activities */}
  <div className="p-6 bg-purple-50 flex justify-center flex-col items-center rounded-lg shadow-lg mb-6"> {/* Added mb-6 */}
    <h1 className="text-3xl font-bold text-center mb-6">Extra-Curricular Activities</h1>
    <ul className="list-disc list-inside space-y-4 text-lg text-gray-700">
      <li>
        <strong>Event Organizer</strong> for KALAM 2024 at SIET.
      </li>
      <li>
        <strong>Singing Jury Member</strong> from 2018 to 2021 at Devanga Higher Secondary School, Coimbatore.
      </li>
      <li>
        <strong>Rotaract Member</strong> for 2 years at Devanga Higher Secondary School.
      </li>
      <li>
        Worked as a <strong>Science Tutor</strong> for 3 years at Rankers Tuition Centre.
      </li>
    </ul>
  </div>
</div>

      </div>
    </div>
  );
};

export default Home;

