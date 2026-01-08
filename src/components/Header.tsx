import { Info } from "lucide-react";
import Logo from "../assets/Bell_Aliant.png";

const Header = () => {
  return (
    <div>
      <div className="bg-[#00549a] h-[74px] flex items-center justify-between md:px-30 px-10">
        <div className="">
          <img src={Logo} className="w-20" alt="Bell Aliant Logo" />
        </div>
        <div className="">
          <span className="text-white text-[14px]">Français</span>
        </div>
      </div>
      <div className="p-[15px] text-center bg-[#F0F8FF] text-[#0066a4]">
        <p className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 text-center text-sm md:text-[14px] font-bold">
            <Info className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
            <span className="max-w-3xl leading-tight">
                We’ve added multi-factor authentication to the email login page as an extra security feature.
                <a href="#" className="underline ml-0 md:ml-2 hover:opacity-80">Learn more</a>
            </span>
        </p>
      </div>
    </div>
  );
};

export default Header;
