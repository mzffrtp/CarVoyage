import CustomButton from "../custom-button";

export default function Hero() {
  const scrollTo = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-24 padding-x max-h-[920PX] ">
        <h1 className="hero__title">
          <p className="hero__subtitle">
            "Your Journey Starts Here: Car Voyage - Seamless Car Rentals for
            Every Adventure!"
          </p>
          <CustomButton
            title="Discover Cars"
            designs="bg-primary-blue text-white rounded-full mt-10"
            handleClick={scrollTo}
          />
          <div>
            <img
              src="/hero.png"
              alt="hero"
              className="img-fluid object-contain"
            />
          </div>
        </h1>
      </div>
    </div>
  );
}
