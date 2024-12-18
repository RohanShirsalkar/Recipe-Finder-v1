import { scroller } from "react-scroll";

export const scrollToElement = (element) => {
  scroller.scrollTo(element, {
    duration: 500,
    offset: -100,
    smooth: "easeInOutQuart",
    // delay: 0,
  });
};
