// import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };

  }
}

// const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
//   color: theme.status.danger,
//   '&.Mui-checked': {
//     color: theme.status.danger,
//   },

// }));

export const theme = createTheme({
  // status: {
  //   danger: orange[500],
  // },
  // palette: {
  //   primary: {
  //     main: '#00DD00',
  //     contrastText: '#fff',
      
  //   },
  //   secondary: {
  //     main: '#19857b',
  //   },
    
 
  //   background: {
  //     default: '#fff',
  //   },
  // },s
  status: {
    danger: orange[500],
  },
  palette: {
    primary: {
      // main: '#0B0C0D',
      main : "#101827",
      contrastText: '#a0a7b2',
      
    },
    secondary: {
      // main: '#F1F2F4',
      main: '#19857b',


      
    },
    
 
    background: {
      default: '#fff',
    },
  },

});

// export default function CustomStyles() {
//   return (
//     <ThemeProvider theme={theme}>
//       <CustomCheckbox defaultChecked />
//     </ThemeProvider>
//   );
// }
