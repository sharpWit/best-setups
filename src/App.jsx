import "./App.css";
import styles from "./style";
import { Header, Content, Footer } from "./containers";

const App = () => (
  <div className="bg-bg w-full h-full overflow-hidden flex flex-col">
    <header
      className={`bg-bg h-28 fixed top-0 left-0 right-0 block w-full box-border z-[1201] border-b-2 border-slate-200`}
    >
      <Header />
    </header>

    <div
      className={`bg-bg_banner_2 flex items-center pt-28 my-auto mx-0 ${styles.paddingX} `}
    >
      <div className={`${styles.boxWidth}`}>محتوا</div>
    </div>
    <footer
      className={`bg-footer ${styles.flexCenter} ${styles.paddingX} flex-col pb-10`}
    >
      <Footer />
    </footer>
  </div>
);
export default App;
