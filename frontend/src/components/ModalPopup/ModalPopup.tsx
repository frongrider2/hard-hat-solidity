import { enableScroll } from "utils/scrollBody";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components/macro";
import { AiOutlineClose } from "react-icons/ai";
import { colors } from "colors/colors";
import { toneBg, toneColor } from "styles/fast";
import { CgTimer } from "react-icons/cg";

interface Props {
  show: boolean;
  onClose: () => any;
  children: React.ReactNode;
  title: string;
  containerStyle?: React.CSSProperties;
  blockStyle?: React.CSSProperties;
  blockClass?: string;
  contentStyle?: React.CSSProperties;
  paddingTitle?: string;
  onlyElement?: boolean;
  tone?: string;
}

const ModalPopup = (props: Props) => {
  const tone = props.tone || "pink";
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e: any) => {
    e.preventDefault();
    enableScroll();
    props.onClose();
  };

  const modalContent = props.show ? (
    <StyledModalContainer style={props.containerStyle} tone={tone}>
      <div className="bgDark_modal" onClick={handleCloseClick} />
      <div className={`container_modal ${props.blockClass}`} style={props.blockStyle}>
        {!props.onlyElement && (
          <>
            <div onClick={handleCloseClick} className="exit_btn">
              <AiOutlineClose />
            </div>
            <h1
              className="title_text"
              style={{
                paddingRight: props.paddingTitle ? props.paddingTitle : null,
              }}
            >
              <CgTimer style={{ marginRight: "0.5rem", fontSize: "3rem" }} />
              {props.title}
            </h1>
          </>
        )}
        <div className="content_modal" style={props.contentStyle}>
          {props.children}
        </div>
      </div>
    </StyledModalContainer>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(modalContent, document.getElementById("modal-root"));
  } else {
    return null;
  }
};

const StyledModalContainer = styled.div<{ tone: string }>`
  width: 100%;
  min-height: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: transparent;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  .ModalContent {
    position: relative;
  }
  .bgDark_modal {
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: black;
    top: 0;
    left: 0;
    opacity: 0.4;
    transition: all 0.5s;
  }
  .container_modal {
    position: relative;
    height: auto;
    width: auto;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 2rem;
    /* padding: 2rem 0; */
  }
  .exit_btn {
    font-size: 20px;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    display: flex;
    cursor: pointer;
    padding: 0.8rem;
    border-radius: 0.8rem;
    transition: 0.5s all;
    color: white;
    :hover {
      background-color: ${colors.GRAY_LIGHT2};
      color: ${colors.PURPLE_BTN_DARK};
    }
  }
  .title_text {
    font-size: 22px;
    color: white;
    font-weight: 500;
    padding: 2rem 3rem;
    padding-right: 10rem;
    background: ${({ tone }) => toneBg(tone)};
    border-radius: 1.5rem 1.5rem 0 0;
    display: flex;
    align-items: center;
    margin-bottom: 0;
  }
  .line_modal {
    width: 100%;
    height: 3px;
    background-color: ${colors.GRAY_LIGHT2};
    margin-bottom: 1rem;
  }
  .content_modal {
    border: solid 0.2rem ${({ tone }) => toneColor(tone)};
    border-radius: 0 0 2rem 2rem;
    border-top: 0;
    padding-bottom: 2rem;
  }
`;

export default ModalPopup;
