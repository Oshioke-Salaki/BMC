import NavigationLink from "./NavigationLink";

function NavigationLinks() {
  return (
    <ul className="flex items-center gap-x-[34px] text-white text-sm font-bold">
      <NavigationLink text={"Stake"} to={"/"} />
      <NavigationLink text={"Lend"} to={"/"} />
      <NavigationLink text={"Burrow"} to={"/"} />
      <NavigationLink text={"Portfolio"} to={"/"} />
    </ul>
  );
}

export default NavigationLinks;
