import { Button } from "../components";
import { heroBanner, heroIcon2 } from "../assets/images";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-12 w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 w-full max-xl:padding-x flex flex-col justify-center items-start">
        <h1 className="mt-5 sm:mt-10 font-poppins text-8xl max-sm:text-4xl max-sm:leading-[68px] font-bold">
          Podcasting and Audio Books Simplified For Everyone.
        </h1>
        <p className="font-poppins text-[#63706d] text-lg leading-8 mt-6 mb-6 ">
          Explore our wide range of categories, share what you know & listen anytime, anywhere.
        </p>
        <Button buttonLabel="Join Waitlist" />
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-4">
        <img
          src={heroBanner}
          alt="image not found"
          width={700}
          height={620}
          className="relative z-10 mt-9"
        />
      </div>

      <div className="absolute lg:flex top-[90px] right-[-20px] hidden">
        <img src={heroIcon2} alt="icon" width={200} height={200} />
      </div>
    </section>
  );
};

export default Hero;
