import { Button } from "../components";
import { popularimage } from "../assets/images";

const MostPopular = () => {
  return (
    <section
      id="home"
      className="px-10 w-full flex flex-col xl:flex-row justify-center h-[320px] max-container bg-hero bg-cover bg-center rounded-xl"
    >
      <div className="xl:w-3/5 w-full max-xl:padding-x xl:mt-0 md:mt-8 flex flex-col justify-center items-start">
        <h1 className="font-poppins text-[32px] max-sm:text-4xl max-sm:leading-[72px] font-bold">
          Ready For Enjoy The Most Popular Podcast In Your City{" "}
        </h1>
        <p className="xl:w-3/5 font-poppins text-[#63706d] text-lg leading-8 mt-3 mb-3">
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
