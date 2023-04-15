import { logo } from "../../assets/";

function HeroFooter() {
  return (
    <div className="flex-[1] flex flex-col justify-start">
      <img
        src={logo}
        alt="Logo"
        className="w-[266px] h-[90px] object-contain bg-menu_bg_banner py-2 px-1 rounded-3xl"
      />
      <p className="mt-4 md:max-w-[312px] max-w-2xl font-normal text-secondary/50 text-[16px] leading-[30px]">
        یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع،
        باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست مشتریان خود
        برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی
        بستستاپس سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان
        ثابت خود را داشته باشد.
      </p>
    </div>
  );
}

export default HeroFooter;
