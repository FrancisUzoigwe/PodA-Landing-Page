import { Button } from "../components";
import {
  heroBanner,
  heroIcon2,
} from "../assets/images";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-12 w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container "
    >
      <div className="relative xl:w-2/5 w-full max-xl:padding-x flex flex-col justify-center items-start">
        <h1 className="mt-10 font-poppins text-8xl max-sm:text-4xl max-sm:leading-[72px] font-bold">
        Podcasting and Audio Books Simplified For Everyone.        </h1>
        <p className="font-poppins text-[#63706d] text-lg leading-8 mt-6 mb-6  ">
        Explore our wide range of categories, share what you know & listen anytime, anywhere.
        </p>
        <Button buttonLabel="Join Waitlist"  />
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-4 bg-hero bg-cover bg-center">
        <img
          src={heroBanner}
          alt="image not found"
          width={600}
          height={520}
          className="relative z-10"
        />
      </div>

      {/* <div className="absolute flex top-72 right-2/4 hidden custom-large:block">
        <img src={heroIcon1} alt="icon" />
      </div> */}

      <div className="absolute flex top-[120px] right-[0px] hidden custom-large:block">
        <img src={heroIcon2} alt="icon" width={200} height={200} />
      </div>
    </section>
  );
};

export default Hero;
