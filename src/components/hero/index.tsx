import CustomButton from "../custom-button";

export default function Hero() {
  const scrollTo = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-24 padding-x max-h-[920PX] ">
        <h1 className="hero__title">Your Journey Starts Here...</h1>
        <p className="hero__subtitle">
          Car Voyage: - Seamless Car Rentals for{" "}
          <span style={{ color: "red" }}>Every Adventure!</span>
        </p>
        <CustomButton
          title="Explore Cars"
          designs="bg-primary-blue text-white rounded-full mt-10"
          handleClick={scrollTo}
        />
      </div>
      <div className="flex items-center">
        <img src="/hero.png" alt="hero" className="img-fluid object-contain" />
      </div>
    </div>
  );
}
