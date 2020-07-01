import React from "react";
import HomepagePicture from "../../Assets/Images/Anthony.png";
import AnthonySig from "../../Assets/Images/Sig.png";

const Home: React.FC<any> = () => {
  return (
    <>
      <div className="flex justify-center items-center w-1/4 min-h-screen bg-gray-700 float-left fixed">
        <div className="flex flex-col justify-center items-center rounded-full select-none bg-white shadow-md px-1 py-1 hover:shadow-xl transition duration-150 h-1/2 w-1/2">
          <img src={HomepagePicture} alt="headshot of anthony" className="rounded-full" />
        </div>
      </div>
      <div className="w-3/4 text-gray-700 float-right flex flex-col justify-center items-center">
        <img src={AnthonySig} alt="Anthony's Signature" className="w-1/3 py-10" />
      </div>
    </>
  );
};

export default Home;
