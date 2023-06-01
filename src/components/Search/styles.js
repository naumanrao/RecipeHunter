import { Box, styled } from "@mui/material";

const Main = styled(Box)(() => ({
  display: "flex",
  gap: "70px",
  alignItems: "center",
  justifyContent: "flex-start",
  "@media screen and (max-width: 767px)": {
    gap: "20px",
    flexDirection: "column-reverse",
    justifyContent: "center",
  },
}));

const SearchBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "15px",
  "& .title": {
    color: "#34bf49",
    textAlign: "center",
    fontFamily: '"Stick No Bills", sans-serif',
    fontSize: "59px",
    fontWeight: "900",
    letterSpacing: "0.5em",

    position: "relative",
    "@media screen and (max-width: 767px)": {
      fontSize: "29px",
    },
  },
  "& .heading": {
    color: "#ffffff",
    textAlign: "center",
    fontFamily: '"Stick No Bills", sans-serif',
    fontSize: "40px",
    fontWeight: "700",
    position: "relative",
    "@media screen and (max-width: 767px)": {
      fontSize: "20px",
    },
  },
  "& .form": {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    justifyContent: "center",
    "& .input": {
      border: "1px solid #ffffff",
      backgroundColor: "white",
    },
    "& .btn": {
      backgroundColor: "#34bf49",
      cursor: "pointer",
    },
  },
}));
export { Main, SearchBox };
