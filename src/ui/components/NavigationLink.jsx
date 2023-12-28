/* eslint-disable react/prop-types */
// import { NavLink } from "react-router-dom";

function NavigationLink({ text }) {
  return (
    <li className="py-[10px] px-[20px] bg-transparent rounded-[20px]">
      {/* <NavLink to={to}>{text}</NavLink> */}
      {text}
    </li>
  );
}

export default NavigationLink;
