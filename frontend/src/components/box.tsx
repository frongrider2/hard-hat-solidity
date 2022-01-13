import { colors } from "colors/colors";
import styled from "styled-components/macro";
import { flexAlign, imageBg } from "styles/fast";

export const AutoRow = styled.div`
  width: 100%;
  padding: 0 20px;
  button {
    font-size: 20px;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GridColumn = styled.div<{ gap?: string }>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content;
  place-content: flex-start;
  grid-gap: ${({ gap }) => (gap ? gap : "1rem")};
`;

export const GridRow = styled.div<{ gap?: string; rowTem?: string }>`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ rowTem }) => (rowTem ? rowTem : "1fr")};
  grid-template-rows: 1fr;
  place-content: flex-start;
  grid-gap: ${({ gap }) => (gap ? gap : "1rem")};
`;

export const BoxShadow = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 2rem;
  padding: 2rem 2rem;
`;

export const H1TEXT = styled.h1<{
  color?: string;
  weight?: string;
  align?: string;
  size?: string;
}>`
  font-weight: ${({ weight }) => (weight ? weight : 400)};
  text-align: ${({ align }) => (align ? align : "left")};
  font-size: ${({ size }) => (size ? size : "2.5rem")};
  color: ${({ color }) => (color ? color : "white")};
  margin: 0;
`;

export const TextH2 = styled.h2<{
  color?: string;
  weight?: string;
  align?: string;
  size?: string;
}>`
  font-weight: ${({ weight }) => (weight ? weight : 400)};
  text-align: ${({ align }) => (align ? align : "left")};
  font-size: ${({ size }) => (size ? size : "2.5rem")};
  color: ${({ color }) => (color ? color : "white")};
  margin: 0;
`;

export const Text = styled.h3<{
  color?: string;
  weight?: string;
  align?: string;
  size?: string;
}>`
  font-weight: ${({ weight }) => (weight ? weight : 400)};
  text-align: ${({ align }) => (align ? align : "left")};
  font-size: ${({ size }) => (size ? size : "1.4rem")};
  color: ${({ color }) => (color ? color : "white")};
  margin: 0;
`;

export const SocialButton = styled.div<{
  image?: string;
  height?: string;
  width?: string;
}>`
  width: ${({ width }) => (width ? width : "4rem")};
  height: ${({ height }) => (height ? height : "4rem")};
  background-image: ${({ image }) => (image ? `url(${image})` : 'url("image/social/red.webp")')};
  ${imageBg}
  display: flex;
  ${flexAlign}
  font-size: 2rem;
  color: white;
  opacity: 1;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const LinkExternalWrapper = styled.a`
  * {
    color: white;
  }
  :hover {
    * {
      color: ${colors.YELLOW_BINANCE};
    }
  }
`;

const TextHoverWrapper = styled(Text)`
  color: white;
  cursor: pointer;
  :hover {
    color: ${colors.YELLOW_BINANCE};
  }
`;

export const LinkExternal = ({ text, link, size }: { text: string; link: string; size?: string }) => {
  return (
    <LinkExternalWrapper target="_blank" rel="noreferrer" href={link}>
      <Text size={size || "1.4rem"}>{text}</Text>
    </LinkExternalWrapper>
  );
};

export const TextHover = ({ size, text, className }: { size?: string; text: string; className?: string }) => {
  return (
    <TextHoverWrapper className={className} size={size || "1.6rem"}>
      {text}
    </TextHoverWrapper>
  );
};

export const ActiveButton = styled.button<{ active?: boolean }>`
  font-size: 2rem;
  border-radius: 0.4rem;
  padding: 0.2rem 0;
  border: solid 0.2rem ${colors.PURPLE_LIGHT};
  background-color: ${({ active }) => (active ? colors.PURPLE_LIGHT : "transparent")};
  color: white;
  cursor: pointer;
  display: flex;

  ${flexAlign}
  :disabled {
    color: white;
    background-color: ${colors.PURPLE_LIGHT};
    cursor: not-allowed;
    opacity: 0.8;
  }
  :hover {
    background-color: ${colors.PURPLE_LIGHT};
  }
`;
