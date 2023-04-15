import "./countdown.css";

function Countdown() {
  return (
    <div className="section-countdown flex flex-row-reverse justify-center items-center">
      <span className="hh1">2</span>
      <span className="hh2">1</span>
      <i className="colon">:</i>
      <span className="mm1">2</span>
      <span className="mm2">1</span>
      <i className="colon">:</i>
      <span className="ss1">5</span>
      <span className="ss2">9</span>
    </div>
  );
}

export default Countdown;
