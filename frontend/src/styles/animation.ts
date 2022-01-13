import { keyframes, css } from 'styled-components/macro';

export const spining = keyframes`
  ${'0%'} {
    transform: rotate(0deg);
  }
  ${'100%'} {
    transform: rotate(360deg);
  }
`;

export const animeLayer = keyframes`
  ${'0%'} {
    opacity: 0.1;
  }
  ${'50%'} {
    opacity: 1;
  }
  ${'100%'} {
    opacity: 0.1;
  }
`;

export const animeCat_trans = keyframes`
  ${'0%'} {
    transform: translateX(-50%) translateY(-50%);
  }
  ${'50%'} {
    transform: translateX(-50%) translateY(-45%);
  }
  ${'100%'} {
    transform: translateX(-50%) translateY(-50%);
  }
`;

export const animeCatEarth_trans = keyframes`
  ${'0%'} {
    transform: translateY(-10%);
  }
  ${'50%'} {
    transform: translateY(0%);
  }
  ${'100%'} {
    transform: translateY(-10%);
  }
`;

export const opacity_background = keyframes`
  ${'0%'} {
    opacity: 0.8;
  }
  ${'50%'} {
    opacity: 0.5;
  }
  ${'100%'} {
    opacity: 0.8;
  }
`;

export const animeCat_nav = keyframes`
  ${'0%'} {
    transform: translateY(0%);
  }
  ${'50%'} {
    transform: translateY(-20%);
  }
  ${'100%'} {
    transform: translateY(0%);
  }
`;

export const animeCat_approve = keyframes`
  ${'0%'} {
    transform: translateY(0%);
  }
  ${'50%'} {
    transform: translateY(-10%);
  }
  ${'100%'} {
    transform: translateY(0%);
  }
`;

export const animeLoading = keyframes`
  ${'0%'} {
    opacity: 0.7;
    transform: translateY(0%);
  }
  ${'50%'} {
    opacity: 1;
    transform: translateY(-10%);
  }
  ${'100%'} {
    opacity: 0.7;
    transform: translateY(0%);
  }
`;

export const catAirdrop = keyframes`
  ${'0%'} {
    transform: translateY(0%) rotate(45deg);
  }
  ${'50%'} {
    transform: translateY(-10%) rotate(45deg);
  }
  ${'100%'} {
    transform: translateY(0%) rotate(45deg);
  }
`;

export const catAirdrop2 = keyframes`
  ${'0%'} {
    transform: translateY(0%) rotate(-45deg);
  }
  ${'50%'} {
    transform: translateY(-10%) rotate(-45deg);
  }
  ${'100%'} {
    transform: translateY(0%) rotate(-45deg);
  }
`;

export const shadowTrans = keyframes`
  ${'0%'} {
    box-shadow: rgba(255, 255, 255, 0.35) 0px 0px 100px;
  }
  ${'50%'} {
    box-shadow: rgba(255, 255, 255, 0) 0px 0px 100px;
  }
  ${'100%'} {
    box-shadow: rgba(255, 255, 255, 0.35) 0px 0px 100px;
  }
`;

// export const sizeAnimation = (size) => keyframes`
//   ${'0%'} {
//     width: 10rem;
//     height: 10rem;
//   ${'50%'} {
//     width: 8rem;
//     height: 8rem;
//   ${'100%'} {
//     width: 10rem;
//     height: 10rem;
// `;

export const borderAnimationKey = (color) => keyframes`
  ${'0%'} {
    border: 2px solid ${color};
  }
  ${'50%'} {
    border: 2px solid transparent;
  }
  ${'100%'} {
    border: 2px solid ${color};
  }
`;

export const shadowAnimationKey = (color, blur) => keyframes`
  ${'0%'} {
    -webkit-box-shadow: 0 0 ${blur} 0 ${color};
    box-shadow: 0 0 ${blur} 0 ${color};
  }
  ${'50%'} {
    -webkit-box-shadow: 0 0 ${blur} 0 ${color};
    box-shadow: 0 0 ${blur} 0 transparent;
  }
  ${'100%'} {
    -webkit-box-shadow: 0 0 ${blur} 0 ${color};
    box-shadow: 0 0 ${blur} 0 ${color};
  }
`;

export const animationBorder = (color, time = '2s') => css`
  animation: ${borderAnimationKey(color)} infinite ${time} linear;
`;

export const shadow = (color, blur) => css`
  -webkit-box-shadow: 0 0 ${blur} 0 ${color};
  box-shadow: 0 0 ${blur} 0 ${color};
`;

export const animationShadow = (color, blur, time) => css`
  animation: ${shadowAnimationKey(color, blur)} infinite ${time} linear;
`;
