import 'styled-components/macro';
interface IPalette {
  main: string;
  contrastText: string;
}
declare module 'styled-components/macro' {
  export interface DefaultTheme {
    borderRadius: string;
    palette: {
      common: {
        black: string;
        white: string;
      };
      primary: IPalette;
      secondary: IPalette;
    };
  }
}
