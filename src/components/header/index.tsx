import { Link } from "react-router-dom";
import CustomButton from "../custom-button";

export default function Header() {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link to={"/"} className="flex justify-center items-center">
          <p className="text-3xl underline">Car Voyage</p>
        </Link>
        <CustomButton
          title="Sign In"
          btnType="button"
          designs="bg-primary-blue rounded-full text-white min-w-[130px] hover:bg-green-200 hover:text-slate-900"
        />
      </nav>
    </header>
  );
}
