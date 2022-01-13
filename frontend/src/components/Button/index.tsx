import { colors } from "colors/colors";
import styled from "styled-components/macro";
import { toneBg } from "styles/fast";

interface Props {
  style?: React.CSSProperties;
  onClick?: (e: any) => any;
  text: string;
  disabled: boolean;
  tone?: string;
  className?: string;
}

export const ButtonWrapper = styled.button<{ tone?: string }>`
  width: auto;
  background: ${({ tone }) => toneBg(tone)};
  border: 0;
  height: auto;
  font-size: 2.4rem;
  padding: 1rem 4rem;
  color: white;
  border-radius: 1rem;
  cursor: pointer;
  opacity: 0.9;
  :hover {
    opacity: 1;
  }
  :disabled {
    background-color: ${colors.GRAY_DARK};
    color: white;
    cursor: not-allowed;
  }
`;

const Button = (props: Props) => {
  const tone = props.tone || "pink";
  return (
    <ButtonWrapper
      className={props.className}
      disabled={props.disabled}
      onClick={props.onClick}
      style={props.style}
      tone={tone}
    >
      {props.text}
    </ButtonWrapper>
  );
};

export default Button;
