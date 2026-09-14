import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    background: {
      default: "#FFFFFF",
    },
    text: {
      primary: "#5C5850",
    },
    primary: {
      main: "#5C5850",
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: '"SUSE", san-serif',
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          textTransform: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
        },
      },
    },
  },
});

export const customTokens = {
  taskCardBcakground: "#FFF9DE",
};
