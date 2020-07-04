import React from "react";
import HomepagePicture from "../../Assets/Images/Anthony.png";
import AnthonySig from "../../Assets/Images/Sig.png";

const Home: React.FC<any> = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full min-h-screen bg-gray-200">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-40 sm:top-80 lg:top-0 lg:left-0 lg:h-1/2 lg:w-1/2 z-0"
        >
          <path
            fill="#0F62FE"
            d="M47.9,-52.1C61.4,-45.8,71.2,-30,73,-13.8C74.8,2.5,68.6,19.3,58.4,30.8C48.3,42.4,34.2,48.7,19.4,54.8C4.6,60.8,-10.9,66.6,-25.4,63.9C-40,61.2,-53.6,50,-60.4,36C-67.1,21.9,-67,5.1,-66.3,-13.9C-65.6,-32.9,-64.3,-54.1,-53.2,-60.8C-42.1,-67.5,-21,-59.9,-1.9,-57.6C17.2,-55.3,34.4,-58.4,47.9,-52.1Z"
            transform="translate(100 100)"
          />
        </svg>
        <div className="flex flex-col justify-center items-center relative z-1 rounded-full select-none bg-white px-1 py-1 shadow-xl mt-20 mb-20 h-1/2 w-1/2 lg:h-1/6 lg:w-1/6 lg:ml-20 lg:mr-20">
          <img src={HomepagePicture} alt="headshot of anthony" className="rounded-full" />
        </div>
        <h2 className="text-4xl lg:text-5xl">
          <span className="text-blue-400 font-serif font-bold">Welcome, </span>
          <br />
          <span className="ml-10 font-sans font-light">I'm Anthony</span>
        </h2>
      </div>
      <div className="flex flex-col justify-center relative items-center w-full min-h-screen bg-gray-200">
        <h3 className="text-3xl font-serif font-bold">
          Who <span className="text-blue-400">Am</span> I
        </h3>
        <i className="text-5xl opacity-10 absolute top-50 left-10 fas fa-quote-left z-0"></i>
        <p className="text-xl p-10 pt-5 z-1">
          I started learning web development in early 2018, after going to school and practicing in my free time. After
          building static websites for a year, I decided to take my interest to the next level and join a coding boot
          camp to learn more and learn how to work as a team with other developers. Now a little bit about me as a
          person outside of developing. I was born in Indiana but lived most of my life in Florida then moved to
          Washington in 2019. Therefore I am a big fan of the Colts & Seahawks. I also love playing video games mostly
          first-person shooters because I grew up on great games like Halo and Call of Duty. I also spend a lot of my
          time on Medium reading up on the latest framework updates.
        </p>
        <i className="text-5xl fas fa-quote-right opacity-10 absolute bottom-20 right-40"></i>
      </div>
    </>
  );
};

export default Home;
