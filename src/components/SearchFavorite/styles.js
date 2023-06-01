import { Box, styled } from "@mui/material";

const Main = styled(Box)(() => ({
  display: "flex",
  // gap: "180px",
  alignItems: "center",
  justifyContent: "center",
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
    fontSize: "45px",
    fontWeight: "900",
    letterSpacing: "0.5em",

    position: "relative",
    "@media screen and (max-width: 767px)": {
      fontSize: "29px",
    },
  },
  "& .input": {
    border: "1px solid #ffffff",
    backgroundColor: "white",
  },
  "& .form": {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    justifyContent: "center",

    "& .btn": {
      backgroundColor: "#34bf49",
      cursor: "pointer",
      width: "80%",
    },
  },
}));
export { Main, SearchBox };
