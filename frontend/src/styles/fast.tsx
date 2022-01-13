import { colors } from "colors/colors";
import { css } from "styled-components/macro";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "992px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};

export const imageBg = css`
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: transparent;
`;

export const flexAlign = css`
  justify-content: center;
  align-items: center;
`;

export const scrollableHide = css`
  ::-webkit-scrollbar {
    height: 0.1px;
    position: absolute;
    width: 0;
    background-color: red;
  }
  ::-webkit-scrollbar-thumb {
    height: 0.1px;
    border-radius: 1rem;
  }
`;

export function toneBg(tone) {
  if (tone === "pink") {
    return "linear-gradient(90deg, #e84cf9 0%, #74267d 100%)";
  } else if (tone === "blue") {
    return "linear-gradient(90deg, #3EE5F2 0%, #3EE5F2 100%)";
  }
  return colors.PURPLE_LIGHT;
}

export function toneColor(tone) {
  if (tone === "pink") {
    return "#74267d";
  } else if (tone === "blue") {
    return "#3EE5F2";
  }
  return "#74267d";
}

export const boxShadow = (blur = "2rem") => css`
  box-shadow: rgba(255, 255, 255, 0.35) 0px 0px ${blur};
`;

export const boxBg = css`
  background-color: ${colors.PURPLE_DARK};
  border-radius: 1rem;
  padding: 1.5rem;
  border: 0.3rem solid ${colors.PURPLE_BORDER};
`;

export const hoverOpacity = css`
  transition: all 0.5s;
  opacity: 0.8;
  :hover {
    opacity: 1;
  }
`;

export const hideScroll = css`
  ::-webkit-scrollbar {
    height: 0;
    position: absolute;
    width: 0;
  }
  ::-webkit-scrollbar-thumb {
    height: 0.1px;
  }
`;

export function bgButton(type) {
  return `/image/other/btn-${type}.png`;
}
