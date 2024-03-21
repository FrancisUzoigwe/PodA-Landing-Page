import React from "react";
import { headerLogo } from "../assets/images";
const Email = () => {
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
          A verification link has been sent to your email address, click on
          verify account to be part of PodA and have access to our news letter.
        </p>

        <a
          href="https://mail.google.com"
          className="my-4 px-5 py-[10px] rounded-md text-white bg-black hover:bg-[orange] transition duration-300"
        >
          Check Mail
        </a>
      </div>
    </div>
  );
};

export default Email;
