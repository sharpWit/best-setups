import "./App.css";
import styles from "./style";
import { Header, Content, Footer } from "./containers";
import { useEffect } from "react";

const App = () => (
  useEffect(() => {
    document.body.classList.add(
      "flex",
      "flex-col",
      "scrollbar-thin",
      "scrollbar-thumb-gray-700",
      "scrollbar-track-gray-100"
    );
  }, []),
  (
    <div className={`bg-bg w-full h-full ${styles.bodyBehavior}`}>
      <header
        className={`bg-bg h-28 fixed top-0 left-0 right-0 block w-full box-border z-[1201] border-b-2 border-slate-200`}
      >
        <Header />
      </header>

      <div className={`${styles.flexCenter} pt-0 my-auto mx-0`}>
        <Content />
      </div>

      <footer
        className={`bg-footer ${styles.flexCenter} ${styles.paddingX} mb-0 flex-col pb-10`}
      >
        <Footer />
      </footer>
    </div>
  )
);
export default App;
