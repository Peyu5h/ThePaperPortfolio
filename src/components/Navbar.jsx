import { MdOutlineShortText } from "react-icons/md";
import { FaGripLines } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <div className="h-[5rem] px-8 border-b-[1px] border-bleck flex items-center justify-between">
        <div className="location text-sm font-eLight">Amsterdam, NL</div>
        <div className="logo">
          <img
            className="w-40"
            src="https://res.cloudinary.com/dkysrpdi6/image/upload/v1710788019/5f7f87c8b81a6e7a214312f0_header_yvfwtd.png"
            alt="logo"
          />
        </div>
        <div className="ham text-3xl cursor-pointer font-thin">
          <MdOutlineShortText />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
