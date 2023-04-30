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
    <div>
      <div className="my-0 mx-auto max-w-[1800px] box-border">
        <div className="flex justify-between items-center py-3.5 px-5 box-border min-w-0">
          {/* right col */}
          <div className="flex basis-3/5 items-center justify-start min-w-0">
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
          <div className="flex basis-2/5 items-center justify-end min-w-0 shrink-0">
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
    </div>
  );
}

export default Header;
