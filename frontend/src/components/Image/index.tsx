import React from "react";
import styled from "styled-components/macro";

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {}

function Image({ src, alt, width, height, className, id, ...rest }: Props) {
  return (
    <ImageWrapper id={id} className={className} style={{ width, height }}>
      <img src={src} alt={alt} />
    </ImageWrapper>
  );
}

export default Image;
