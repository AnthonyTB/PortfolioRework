import React from "react";
import HomepagePicture from "../../Assets/Images/Anthony.png";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center w-1/3 min-h-screen bg-gray-700 float-left fixed">
        <div className="flex flex-col justify-center items-center rounded-full select-none bg-white shadow-md px-1 py-1 hover:shadow-xl transition duration-150 h-1/4 w-1/4">
          <img src={HomepagePicture} alt="headshot of anthony" className="rounded-full" />
        </div>
      </div>
      <div className="w-2/3 text-gray-700 float-right flex flex-col justify-center items-center"></div>
    </>
  );
}
