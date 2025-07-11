import "./header.css";
import logo from "../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Investment Calculator Logo" />
      <h1>Investment Calculator</h1>
    </div>
  );
};

export default Header;
