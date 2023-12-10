import { Button } from "../components";
import { checkbox } from "../assets/icons";
import { aboutImage } from "../assets/images";

const About = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-4 bg-hero bg-cover bg-center">
        <img
          src={aboutImage}
          alt="image not found"
          width={510}
          height={500}
          className="object-contain relative z-10 shadow-3xl"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h1 className="mt-10 font-poppins text-8xl max-sm:text-4xl max-sm:leading-[72px] font-bold">
          Why are we unique.
        </h1>
        
        <p className="font-poppins text-[#63706d] text-lg leading-8 mt-6 mb-6  ">
        Explore a wide range of categories and stay up to date with the latest news and trends in the podcast world.        </p>

        <p className="font-poppins text-primary text-lg leading-8 font-bold">
          <img src={checkbox} alt="Checkbox" className="inline-block mr-4" />
          With our built-in microphone, record and edit & publish right inside the app.        </p>
      <p className="font-poppins text-primary text-lg leading-8 mt-3 mb-3 font-bold">
          <img src={checkbox} alt="Checkbox" className="inline-block mr-4" />
          Increase your reach with our wide sharing options.        </p>
        <p className="font-poppins text-primary text-lg leading-8 mt-3 mb-3 font-bold">
          <img src={checkbox} alt="Checkbox" className="inline-block mr-4" />
          Let other people know about your thoughts.
        </p>
        <p className="font-poppins text-primary text-lg leading-8 mt-3 mb-6 font-bold">
          <img src={checkbox} alt="Checkbox" className="inline-block mr-4" />
          Connect with your community members        
          </p>
        <div className="m-0">
          <Button buttonLabel="Join Waitlist" />
        </div>
      </div>
      
    </section>
  );
};

export default About;
