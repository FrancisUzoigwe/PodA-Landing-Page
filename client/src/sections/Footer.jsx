import { headerLogo } from "../assets/images";
import { twitter, instagram, facebook } from "../assets/icons";

const Footer = () => {
  return (
    <div className="text-center lg:text-left">
       <div className="mx-auto">
        <img src={headerLogo} alt="logo" />
      </div>
      <hr className="mt-4 mb-4" />

      <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start mb-3">
        <p className="lg:w-3/5 font-poppins text-[#63706d] text-lg leading-8 mt-3 lg:mt-0">
          All rights reserved © PodA 2023
        </p>
        <div className="flex justify-center lg:justify-start gap-2 mt-3 lg:mt-0">
          <a
            href="https://twitter.com/example"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black p-4 rounded-full hover:bg-secondary transition duration-300 ease-in-out"
          >
            <img src={twitter} alt="" className="h-4 w-4" />
          </a>
          <a
            href="https://facebook.com/example"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black p-4 rounded-full hover:bg-secondary transition duration-300 ease-in-out"
          >
            <img src={facebook} alt="" className="h-4 w-4" />
          </a>
          <a
            href="https://instagram.com/example"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black p-4 rounded-full hover:bg-secondary transition duration-300 ease-in-out"
          >
            <img src={instagram} alt="" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
