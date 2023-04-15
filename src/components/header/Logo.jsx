import { logo } from "../../assets";
function Logo() {
  return (
    <div className="w-28 shrink-0 ml-10">
      <a href="#" className="block relative w-full cursor-pointer">
        <img src={logo} alt="logo" className=" z-[1] w-full relative block" />
      </a>
    </div>
  );
}

export default Logo;
