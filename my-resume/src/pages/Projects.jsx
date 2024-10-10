// import React from 'react';

// const Card = ({ title, description, imgSrc }) => {
//   return (
//     <div className=" flex h-full w- flex-col   p-10 flex-wrap ">
//       <div className="h-100 w-64 flex flex-col text-center justify-center items-center rounded-md bg-pink-300">
        
//         <div className="rounded-md h-64 w-64">
//           <img
//             src={imgSrc}
//             alt="Sample"
//             className="h-full w-full rounded-md object-cover"
//           />
//         </div>
//         <div className="p-10 flex flex-col justify-evenly">
//           <h2 className="">{title}</h2>
//           <p className="">{description}</p>
//           <button className="bg-blue-500 rounded-md">
//             Learn More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Projects = () => {
//   const cardData = [
//     {
//       id: 1,
//       title: 'Console Based Stationery Shop System',
//       description: " A stationery shop billing software is a system that can maintain all the items in your stationery shop in a very organized and manageable way. This software solution combines all aspects, including billing and monitoring.Tools Used : MySQL, Java, VS code",
//       imgSrc: 'https://im.whatshot.in/img/2018/Apr/shutterstock-425860360-cropped-1522823797.jpg?wp=1',
//     },
//     {
//       id: 2,
//       title: 'Meme-Generator',
//       description: `This Main idea of the project is to poke fun at an idea or create a humorous message. API used: "Meme API " "Meme_API" contains memes in JSON format.Tools Used: HTML5, CSS, JavaScript & VS code`,
//       imgSrc: 'https://www.mohenesh.com/wp-content/uploads/2021/11/Doge-meme-2-1024x614.webp',
//     },
//     {
//       id: 3,
//       title: 'Birthday Wish Generator',
//       description: "This app gets the user's name as input and generates random birthday quotes for them. These greetings foster a sense of belonging, happiness, self-esteem, and support, while also reducing stress and contributing to overall well-being. Tools Used: HTML5, CSS & JavaScript",
//       imgSrc: 'https://cdn.shopify.com/s/files/1/0508/6576/6572/files/Lovely_Birthday_wishes_images.jpg?v=1698784791',
//     },
//   ];

//   return (
//     <div className="h-100 w-100 flex flex-wrap justify-center p-10">
//       {cardData.map((card) => (
//         <Card
//           key={card.id}
//           title={card.title}
//           description={card.description}
//           imgSrc={card.imgSrc}
//         />
//       ))}
//     </div>
//   );
// };

// export default Projects;
import React from 'react';
import {Link, NavLink} from "react-router-dom"
import { BsGithub } from "react-icons/bs";

const Card = ({ title, description, imgSrc, gitlink }) => {

  return (
<div className="flex flex-col items-center sm:w-64 h-96 p-5 hover:shadow-xl ">
  <div className="flex flex-col items-center text-center rounded-md bg-blue-100 w-full h-full">
    <div className="h-40 w-full overflow-hidden rounded-md">
      <img
        src={imgSrc}
        alt={title}
        className="h-full w-full object-cover"
      />
    </div>
    <div className="p-4 flex flex-col justify-between items-center h-full">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm mt-2 overflow-hidden line-clamp-3">{description}</p>
      <button className="flex justify-center gap-5 items-center">
      <a
        href={gitlink}
        className="bg-blue-500 text-white mt-auto px-4 py-2 rounded-md hover:bg-blue-700 transition flex justify-between items-center gap-4"
        target="_blank"
        rel="noopener noreferrer"
       >
      Let's Go 
      <BsGithub />
  </a>
</button>
    </div>
  </div>
</div>

  );
};

const Projects = () => {
  const cardData = [
    {
      id: 1,
      title: 'Console Based Stationery Shop System',
      description:
        "A stationery shop billing software is a system that can maintain all the items in your stationery shop in a very organized and manageable way. This software solution combines all aspects, including billing and monitoring. Tools Used: MySQL, Java, VS code",
      imgSrc:
        'https://im.whatshot.in/img/2018/Apr/shutterstock-425860360-cropped-1522823797.jpg?wp=1',
      gitlink:"https://github.com/YokeshSM/consoledb"
    },
    {
      id: 2,
      title: 'Funny Meme-Generator',
      description:
        'This Main idea of the project is to poke fun at an idea or create a humorous message. API used: "Meme API" contains memes in JSON format. Tools Used: HTML5, CSS, JavaScript & VS code',
      imgSrc:
        'https://www.mohenesh.com/wp-content/uploads/2021/11/Doge-meme-2-1024x614.webp',
      gitlink:"https://github.com/YokeshSM/MemeGen"
    },
    {
      id: 3,
      title: 'Birthday Wish Generator',
      description:
        "This app gets the user's name as input and generates random birthday quotes for them. Tools Used: HTML5, CSS & JavaScript",
      imgSrc:
        'https://cdn.shopify.com/s/files/1/0508/6576/6572/files/Lovely_Birthday_wishes_images.jpg?v=1698784791',
      gitlink:"https://yokeshsm.neocities.org/Birthdayquotes/"
    },
  ];

  return (
    <div className="w-full flex flex-wrap justify-center p-10 gap-6">
      {cardData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          imgSrc={card.imgSrc}
          gitlink={card.gitlink}
        />
      ))}
    </div>
  );
};

export default Projects;
