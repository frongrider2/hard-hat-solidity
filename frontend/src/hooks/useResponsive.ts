import { useMediaQuery } from "react-responsive";
import { device } from "styles/fast";

const useResponsive = (input: "mobileS" | "mobileM" | "mobileL" | "tablet" | "laptop" | "laptopL" | "desktop") => {
  return useMediaQuery({ query: device[input] });
};

export default useResponsive;
