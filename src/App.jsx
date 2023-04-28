import { useEffect } from "react";
import "./Home.css";
import { Header, Content, Footer } from "./containers";

function App() {
  useEffect(() => {
    document.body.classList.add("sticky-top");
  }, []);
  return (
    <>
      <header className="header2021 bg-white is-sticky">
        <Header />
      </header>

      <div className="page-content">
        <Content />
      </div>

      <footer className="bg-footer mb-0  pb-10 sm:px-16 px-8 flex-col">
        <Footer />
      </footer>
    </>
  );
}
export default App;
