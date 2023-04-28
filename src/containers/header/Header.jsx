import {
  Cart,
  Login,
  Logo,
  MainSearchBar,
  Menu,
  Notification,
  Darkmode,
} from "../../components/header";
import "./header.css";

function Header() {
  return (
    <div className="page-content-inner">
      <div className="header2021-inner">
        {/* right col */}
        <div className="section-left auto-flex">
          {/* menu */}
          <Menu />
          {/* menu ends */}
          {/* logo */}
          <Logo />
          {/* logo ends */}
          {/* search bar */}
          <MainSearchBar />
          {/* search bar ends */}
        </div>
        {/* right col rnds */}
        {/* left col */}
        <div className="section-right">
          {/* notification */}
          <Notification />
          {/* notification ends */}
          {/* darkmode */}
          <Darkmode />
          {/* darkmode ends */}
          {/* login */}
          <Login />
          {/* login ends */}
          {/* cart */}
          <Cart />
          {/* cart ends */}
        </div>
        {/* left col ends */}
      </div>
    </div>
  );
}

export default Header;
