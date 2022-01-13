import { colors } from "colors/colors";
import styled from "styled-components";

export const InputTextWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  font-size: 1.8rem;
  transition: all 0.5s;
  cursor: pointer;
  position: relative;
  input::placeholder {
    color: ${colors.GRAY_DARK};
  }
  input {
    transition: all 0.5s;
    width: 100%;
    padding: 0.8rem 1rem;
    border-radius: 1rem;
    background-color: #ffffff;
    border: 0.3rem solid ${colors.GRAY_DARK};
  }
  input:hover {
    border: 0.3rem solid ${colors.PURPLE_BTN_DARK};
  }
  input:focus {
    border: 0.3rem solid ${colors.PURPLE_BTN_DARK};
    color: ${colors.PURPLE_BTN_DARK};
  }
  .max_length_place {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    span {
      font-size: 1.8rem;
      color: ${colors.RED_PROFIT};
    }
  }
`;
