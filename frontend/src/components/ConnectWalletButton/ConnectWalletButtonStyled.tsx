import { colors } from "colors/colors";
import styled from "styled-components/macro";
import { toneColor } from "styles/fast";

export const ConnectWalletButtonWrapper = styled.div`
  position: relative;
  .login_btn {
    font-family: inherit;
    font-weight: 500;
    font-size: 16px;
    border: 0;
    padding: 1rem 1rem;
    cursor: pointer;
    color: white;
    background-color: ${colors.GLEEN_PROFIT};
    border-radius: 1rem;
    /* background-image: linear-gradient(315deg, #7f53ac 0%, #647dee 74%); */
    /* opacity: 0.8; */
    transform: translateY(0);
  }
  .login_btn:hover {
    opacity: 0.8;
  }
  .popupInstall {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      z-index: 6;
      font-size: 4rem;
      color: white;
      text-align: center;
    }
    img {
      z-index: 6;
      width: 15rem;
    }
    a {
      text-decoration: none;
      -webkit-text-decoration: none;
      ::after {
        height: 0;
        background-color: none;
        width: 0;
      }
    }
    a:hover {
      ::after {
        background-color: white;
      }
    }
  }
`;

export const LogoutWrapper = styled.div`
  /* position: fixed; */
  /* left: 0; */
  /* top: 0; */
  width: 100%;
  height: 100%;
  /* z-index: 5; */
  display: flex;
  justify-content: center;
  align-items: center;
  .logout_container {
    position: relative;
    border-radius: 2rem;
    z-index: 2;
    display: flex;
    flex-direction: column;
    /* padding: 2rem 0; */
    .exit_btn {
      position: absolute;
      right: 2rem;
      top: 0;
      font-size: 2rem;
      cursor: pointer;
      transition: all 0.5s;
      :hover {
        color: ${colors.PURPLE_BTN_DARK};
      }
    }
    h2 {
      color: white;
      font-size: 2rem;
      padding: 1rem 1.5rem;
      margin-bottom: 0;
    }
    .line_logout {
      width: 100%;
      height: 3px;
      background-color: ${colors.GRAY_LIGHT};
    }
    .link_contain {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      margin-bottom: 2rem;
      padding: 0 2rem;
    }
    a {
      text-decoration: none;
      color: white;
      font-size: 1.4rem;
      span {
        margin-right: 0.5rem;
        font-weight: 600;
      }
      div {
        display: flex;
        align-items: center;
        margin-right: 3rem;
      }
    }
    a:hover {
      transform: none;
      color: ${colors.PURPLE_BTN_LIGHT};
      text-decoration: none;
    }
    a::after {
      width: 0;
    }
    .copy_contain {
      text-decoration: none;
      color: white;
      font-size: 1.4rem;
      span {
        margin-right: 0.5rem;
        font-weight: 600;
      }
      div {
        display: flex;
        align-items: center;
        margin-right: 3rem;
      }
    }
    .copy_contain :hover {
      color: ${colors.PURPLE_BTN_LIGHT};
      cursor: pointer;
    }
    .copy_success {
      color: ${colors.PURPLE_BTN_DARK};
      font-weight: 600;
      font-size: 1.4rem;
    }
    .logout_btn {
      width: 100%;
      display: flex;
    }
  }
`;

export const PopUpConnectWrapper = styled.div`
  width: auto;
  height: auto;
  left: 0;
  top: 0;
  /* padding-top: 12rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title_text {
    padding-right: 10rem;
  }
  .container_connect {
    padding-top: 2rem;
    border-radius: 2rem;
    /* padding: 2rem 0; */
    position: relative;
    width: 40rem;
    h1 {
      font-size: 2.8rem;
      color: ${colors.PURPLE_BTN_DARK};
      margin: 0;
      padding: 0 2rem;
    }
    .line_connect_wallet {
      margin: 2rem 0;
      width: 100%;
      height: 2px;
      background-color: ${colors.GRAY_DARK};
    }
    @media screen and (max-width: 967px) {
      width: 50rem;
    }
  }
  .learn_connect {
    width: 100%;
    font-size: 1.8rem;
    font-weight: 500;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    .text_inside {
      margin-left: 1rem;
    }
    :hover {
      color: ${colors.PURPLE_BTN_LIGHT};
    }
    @media screen and (max-width: 967px) {
      font-size: 2.2rem;
    }
  }
`;

export const ItemWalletConnectWrapper = styled.div`
  margin: 0 2rem;
  width: auto;
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-bottom: 0.8rem;
  border-radius: 2rem;
  opacity: 0.9;
  background: ${() => toneColor("pink")};
  p {
    color: white;
    font-size: 1.8rem;
    margin: 0;
  }
  .wallet_type_img {
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .wallet_type_img img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  :hover {
    opacity: 1;
  }
  @media screen and (max-width: 967px) {
    padding: 2rem 2rem;
    margin-bottom: 1.5rem;
    p {
      font-size: 2.4rem;
    }
    .wallet_type_img {
      width: 6rem;
      height: 6rem;
    }
  }
`;
