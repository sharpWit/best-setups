import { footerLinks } from "../../constants";

function FooterLinks() {
  return (
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
  );
}

export default FooterLinks;
