import { socialMedia } from "../../constants";

function FooterBar() {
  return (
    <div className="w-full flex justify-between items-center pt-3 md:flex-row flex-col border-t-[1px] border-t-[#3f3e45]">
      <p className="font-sans font-normal text-center text-[12px] leading-[27px]">
        تمام حقوق اين وب‌سايت نیز برای (فروشگاه آنلاین بستستاپس) است.
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "ml-6" : "ml-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  );
}

export default FooterBar;
