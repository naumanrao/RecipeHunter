import { Box, styled } from "@mui/material";

const Main = styled(Box)(() => ({
  textAlign: "center",
  padding: "50px 30px 0px 30px",
  "& .loading": {
    color: "#34bf49",
    fontFamily: '"Stick No Bills", sans-serif',
    fontSize: "59px",
    fontWeight: "900",
    letterSpacing: "0.5em",

    position: "relative",
    "@media screen and (max-width: 767px)": {
      fontSize: "29px",
    },
  },
}));

const StyledSearchItem = styled(Box)(() => ({
  marginTop: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  flexDirection: "row",
  gap: "30px",
  "& .card": {
    borderRadius: "10px",
  },
}));

export { Main, StyledSearchItem };
