import { Info } from "lucide-react";
import Logo from "../assets/Bell_Aliant.png";

const Header = () => {
  return (
    <div>
      <div className="bg-[#00549a] h-[74px] flex items-center justify-between px-30">
        <div className="">
          <img src={Logo} className="w-20" alt="Bell Aliant Logo" />
        </div>
        <div className="">
          <span className="text-white text-[14px]">Français</span>
        </div>
      </div>
      <div className="p-[15px] text-center bg-[#F0F8FF] text-[#0066a4]">
        <p className="text-[14px] font-bold flex items-center justify-center gap-2">
          <Info />
          We’ve added multi-factor authentication to the email login page as an
          extra security feature. <a href="" className="hover:underline">Learn more</a>
        </p>
      </div>
    </div>
  );
};

export default Header;
