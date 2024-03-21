import React, { useEffect } from "react";
import { headerLogo } from "../assets/images";
import { useParams } from "react-router-dom";
import { verifyApi } from "../apis/authApis";

const VerifiedLayout = () => {
  const { token } = useParams;

  useEffect(() => {
    if (token) {
      verifyApi(!token);
    }
  });

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#F8F9FB]">
      <div className="bg-white w-[500px] flex-col flex items-center min-h-[300px] max-sm:w-[90%] shadow-lg  rounded-lg">
        <a href="/" className="my-5">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[30px]"
          />
        </a>
        <h1 className="capitalize my-3">Almost there!</h1>
        <p className="px-3 text-center">
          Congratulations your email has been verified as well as you've
          subscribed to our news letter and you'd be notified on new updates on
          PodA.
        </p>

        <a
          href="http://localhost:5173"
          className="my-4 px-5 py-[10px] rounded-md text-white bg-black hover:bg-[orange] transition duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default VerifiedLayout;
