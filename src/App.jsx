import { useEffect } from "react";
import "./App.css";
import { Header, Content, Footer } from "./containers";

function App() {
  useEffect(() => {
    document.body.classList.add("sticky-top");
  }, []);
  return (
    <>
      <header className="bg-bg h-28 fixed top-0 left-0 right-0 block z-[1201] border-b-2 border-slate-200 px-8">
        <Header />
      </header>

      <div className="pt-0 my-auto mx-0">
        <Content />
      </div>

      <footer className="bg-footer mb-0 flex-col pb-10 sm:px-16 px-8">
        <Footer />
      </footer>
    </>
  );
}
export default App;
