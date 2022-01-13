import React, { useState } from "react";
import useAuth from "hooks/useAuth";
// import { useTranslation } from 'context/Localization';
import { ConnectWalletButtonWrapper, LogoutWrapper, PopUpConnectWrapper } from "./ConnectWalletButtonStyled";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import ItemWalletConnect from "./ItemWalletConnect";
import { BsQuestionCircleFill } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { MdContentCopy } from "react-icons/md";
import ModalPopup from "../ModalPopup/ModalPopup";
import { disableScroll, enableScroll } from "utils/scrollBody";
import CopyToClipboard from "react-copy-to-clipboard";
import useEagerConnect from "hooks/useEagerConnect";
import Button from "components/Button";

interface Props {
  style?: React.CSSProperties;
  text?: string;
}

enum ConnectorNames {
  Injected = "Injected",
  WalletConnect = "walletconnect",
  BSC = "bsc",
}

const ConnectWalletButton = (props: Props) => {
  const { account, active } = useActiveWeb3React();
  const [logoutPop, setLogoutPop] = useState(false);
  const [popUpConnect, setPopUpConnect] = useState(false);
  // const { t } = useTranslation();
  const { login, logout } = useAuth();
  const [copy, setCopy] = useState(false);
  // const { onPresentConnectModal } = useWalletModal(login, logout, t);

  useEagerConnect();

  const handleClick = (e) => {
    e.stopPropagation();
    if (active) {
      disableScroll();
      setLogoutPop(true);
    } else {
      disableScroll();
      setPopUpConnect(true);
    }
  };

  const onCLickCopy = () => {
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 500);
  };

  const connect = async (connector: ConnectorNames) => {
    login(ConnectorNames[connector]);
    enableScroll();
    setPopUpConnect(false);
  };

  return (
    <ConnectWalletButtonWrapper>
      {!account ? (
        <button style={props.style} className="login_btn" onClick={handleClick}>
          {props.text ? props.text : "Connect to a wallet"}
        </button>
      ) : (
        <button className="login_btn" onClick={handleClick}>
          {account
            ? account.slice(0, 4) + "...." + account.slice(account.length - 4, account.length)
            : "Connect Wallet"}
        </button>
      )}

      <ModalPopup
        show={logoutPop}
        onClose={() => {
          enableScroll();
          setLogoutPop(false);
        }}
        title="Your wallet"
      >
        <LogoutWrapper>
          <div className="logout_container">
            <h2>{account}</h2>
            <div className="link_contain">
              <a rel="noopener noreferrer" target="_blank" href={`https://bscscan.com/address/${account}`}>
                <div>
                  <span>View on BscScan</span>
                  <FiExternalLink />
                </div>
              </a>
              <CopyToClipboard text={account ? account : ""} onCopy={onCLickCopy}>
                <div className="copy_contain">
                  <div>
                    <span>Copy Address</span>
                    <MdContentCopy />
                  </div>
                </div>
              </CopyToClipboard>
              {copy && (
                <div className="copy_success">
                  <span>Copied</span>
                </div>
              )}
            </div>
            <div className="logout_btn">
              <Button
                disabled={false}
                onClick={() => {
                  setLogoutPop(false);
                  logout();
                }}
                style={{ margin: "0 auto" }}
                text={"Logout"}
              />
            </div>
          </div>
        </LogoutWrapper>
      </ModalPopup>

      <ModalPopup
        title={"Connect to a wallet"}
        show={popUpConnect}
        paddingTitle="10rem"
        onClose={() => {
          setPopUpConnect(false);
          enableScroll();
        }}
      >
        <PopUpConnectWrapper>
          <div className="container_connect">
            <ItemWalletConnect
              text={"Metamask"}
              image={"/image/wallet/metamask.svg"}
              onClick={() => connect(ConnectorNames.Injected)}
            />
            <ItemWalletConnect
              onClick={() => connect(ConnectorNames.Injected)}
              text={"TrustWallet"}
              image={"/image/wallet/trustWallet.svg"}
            />
            <ItemWalletConnect
              onClick={() => connect(ConnectorNames.Injected)}
              text={"MathWallet"}
              image={"/image/wallet/mathWallet.svg"}
            />
            <ItemWalletConnect
              onClick={() => connect(ConnectorNames.WalletConnect)}
              text={"TokenPocket"}
              image={"/image/wallet/tokenPocket.svg"}
            />
            <ItemWalletConnect
              onClick={() => connect(ConnectorNames.WalletConnect)}
              text={"Wallet Connect"}
              image={"/image/wallet/walletConnect.svg"}
            />
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={`https://docs.pancakeswap.finance/get-started/connection-guide`}
            >
              <div className="learn_connect">
                <BsQuestionCircleFill />
                <span className="text_inside">Learn how to connect</span>
              </div>
            </a>
          </div>
        </PopUpConnectWrapper>
      </ModalPopup>
    </ConnectWalletButtonWrapper>
  );
};

export default ConnectWalletButton;
