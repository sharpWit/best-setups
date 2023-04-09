import styles from "../../style";
import { logo } from "../../assets/";
import { footerLinks, socialMedia } from "../../constants";
import "./style.css";
import React from "react";

function Footer() {
  return (
    <div className={`${styles.boxWidth} text-white pt-10`}>
      <div className="md:flex-row flex flex-col mb-8 w-full">
        <div className="flex-[1] flex flex-col justify-start">
          <img
            src={logo}
            alt="Logo"
            className="w-[266px] h-[90px] object-contain bg-menu_bg_banner py-2 px-1 rounded-3xl"
          />
          <p className="mt-4 md:max-w-[312px] max-w-2xl font-normal text-secondary/50 text-[16px] leading-[30px]">
            یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی
            متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست
            مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که
            فروشگاه اینترنتی بستستاپس سال‌هاست بر روی آن‌ها کار کرده و توانسته
            از این طریق مشتریان ثابت خود را داشته باشد.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.title}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-sans font-medium text-[18px] leading-[27px] text-secondary">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-sans font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary/50 cursor-pointer ${
                      index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
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
    </div>
  );
}

export default Footer;
