import { services } from "../constants";
import { CategoriesCard, Button } from "../components";

const Categories = () => {
  return (
    <section id="features" className="max-container max-sm:mt-12">
      <h2 className="text-4xl font-poppins font-bold text-center">
        Discover Your Favorite
        <br /> Podcast and Audiobook Categories
      </h2>
      <p className="m-auto mt-4 mb-8 max-w-lg text-center info-text font-poppins text-[#63706d] text-lg leading-8">
        Explore our wide range of categories, share what you know & listen
        anytime, anywhere.
      </p>
        <div className="flex justify-center flex-wrap gap-4">
         {services.map((service) => (
          <CategoriesCard key={service} {...service} />
         ))} </div>
         <div className="mt-[100px] flex justify-center">
          <Button buttonLabel="All Categories"  />
        </div>
    </section>
  );
};

export default Categories;
