import { useState } from "react";

{
  /** function that handling the listOne toggling link*/
}
export function linkChanging() {
  const [activeNavLink, setActive] = useState(false);
  setActive((prevState) => !prevState);
  return activeNavLink;
}
