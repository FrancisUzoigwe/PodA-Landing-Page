import { Button } from "../components";
import { popularimage } from "../assets/images";

const MostPopular = () => {
  return (
    <section
      id="home"
      className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 w-full flex flex-col xl:flex-row justify-center h-[320px] max-container bg-hero bg-cover bg-center rounded-xl"
    >
      <div className="xl:w-2/3 sm:w-full w-full max-xl:padding-x xl:mt-0 md:mt-8 sm:mt-[100px] flex flex-col justify-center items-start">
        <h1 className="font-poppins text-[24px] sm:text-[34px] md:text-[34px] md:leading-[48px] font-bold">
          Ready For Enjoying The Most Popular Podcast In Your City
        </h1>
        <p className="xl:w-4/5 font-poppins text-[#63706d] text-base sm:text-lg mt-3 mb-3">
          Explore our wide range of categories, share what you know & listen
          anytime, anywhere.
        </p>
        <Button buttonLabel="Join Waitlist" />
      </div>

      <div className="flex-1 flex justify-center items-center h-3/6 max-xl:py-4">
        <img
          src={popularimage}
          alt="image not found"
          width={400}
          height={520}
          className="relative z-10 hidden xl:block"
        />
      </div>
    </section>
  );
};

export default MostPopular;
