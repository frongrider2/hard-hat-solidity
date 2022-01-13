import { createGlobalStyle } from "styled-components/macro";
import { colors } from "colors/colors";
import { spining } from "./animation";

const GlobalStyle = createGlobalStyle`
  * {
  font-family: 'Prompt', sans-serif;
  /* font-family: 'Kanit', sans-serif !important; */
  outline: none;
  list-style: none;
  box-sizing: border-box;
  line-height: normal;
}

h1,h2,h3,h4,h5{
  color: white;
  margin: 0;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}


/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}

a {
  text-decoration: none;
  color: #000000;
}

html {
  max-width: 100%;
  /* overflow-x: hidden; */
  font-size: 64.5%;
  --antd-wave-shadow-color: ${colors.PURPLE_LIGHT};
}

body {
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  background-image: url("image/body-bg2.webp");
  background-size: cover;
  background-repeat: no-repeat;
  max-width: 100vw;
  min-height: 100vh;
  height: 100%;
  font-family: 'Prompt', sans-serif !important;
}
.enableScroll{
  padding-right: 1rem;
}

/* end of defalte setting */
@media (max-width: 1279px) and (min-width: 769px) {
  html {
    font-size: 64.5%;
  }
  .enableScroll{
  padding-right: 0;
  }
}
@media (max-width: 768px) and (min-width: 551px) {
  html {
    font-size: 50%;
  }
  .enableScroll{
  padding-right: 0;
  }
}
@media (max-width: 550px) {
  html {
    font-size: 30%;
  }
  .enableScroll{
  padding-right: 0;
  }
}

@media screen and (max-width: 365px) {
  html {
    font-size: 25%;
  }
  .enableScroll{
  padding-right: 0;
  }
}

.page_iframe_container {
  margin-top: 120px;
  margin-bottom: 120px;
}

.page_iframe {
  width: 100%;
  height: 100vh;
  border: none;
}
::-webkit-scrollbar {
  height: 0.1px;
  position: absolute;
  width: 1rem;
  background-color: ${colors.PURPLE_DARK_BG};
}
::-webkit-scrollbar-thumb {
  height: 0.1px;
  background: ${colors.PURPLE_DARK_BG};
  border-radius: 1rem;
}

.hover-pointer:hover {
  cursor: pointer;
}
// AntD global
.subPopUp{
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{
    background-color: white;
    span{
      color: ${colors.PURPLE_BTN_DARK};
    }
  }
}
.spining{
  animation: ${spining} 1s infinite linear;
}
.Toastify{
}
`;

export default GlobalStyle;
