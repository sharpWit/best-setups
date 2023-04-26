import { FooterBar, FooterLinks, HeroFooter } from "../../components/footer";
import styles from "../../style";
import "./style.css";

function Footer() {
  return (
    <div className="text-white pt-10 max-w-[1800px] my-0 mx-auto box-border">
      <div className="md:flex-row flex flex-col mb-8 w-full">
        <HeroFooter />
        <FooterLinks />
      </div>
      <FooterBar />
    </div>
  );
}

export default Footer;
