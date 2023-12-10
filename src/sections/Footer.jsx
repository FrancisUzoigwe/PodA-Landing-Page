import { headerLogo } from "../assets/images"
import { twitter, instagram, facebook } from "../assets/icons"

const Footer = () => {
  return (
    <div>
      <div>
        <img src={headerLogo} alt="logo" />
      </div>
      <hr className="mt-4 mb-4" />

      <div className="w-full flex justify-between mb-3">
      <p className="xl:w-3/5 font-poppins text-[#63706d] text-lg leading-8 mt-3">
      All rights reserved © PodA 2023
        </p>
        <div className='flex justify-center gap-2'>
          <div className="bg-black p-4 rounded-full  hover:bg-secondary transition duration-300 ease-in-out">
            <img src={twitter} alt="" 
            className='h-4 w-4'/>
          </div>
          <div className="bg-black p-4 rounded-full  hover:bg-secondary transition duration-300 ease-in-out">
            <img src={facebook} alt=""
            className='h-4 w-4' />
          </div>
          <div className="bg-black p-4 rounded-full  hover:bg-secondary transition duration-300 ease-in-out">
            <img src={instagram} alt=""
            className='h-4 w-4' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer