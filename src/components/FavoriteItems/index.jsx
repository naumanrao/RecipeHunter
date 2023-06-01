// import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Alert, Snackbar } from "@mui/material";

// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";

function FavoriteItems({
  id,
  title,
  image,
  openSnack,
  removeFavoriteItem,
  source,
  openAlert,
  onClose,
  instruction,
}) {
  // console.log(instruction);
  // const [openSnack, setOpenSnack] = useState(false);
  // const step = instruction.steps;
  // // console.log(step);
  // const handleClick = () => {
  //   setOpenSnack(true);
  // };

  // const handleClose = () => {
  //   setOpenSnack(false);
  // };

  return (
    <Card sx={{ width: 400,  "@media screen and (max-width: 767px)": {
      width: 350,
    }, }} key={id} className="card">
      <CardMedia sx={{ height: 250 }} image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <a
          href={source}
          style={{
            textDecoration: "none",
            color: "#34bf49",
          }}
        >
          <Typography
            style={{
              fontSize: "15px",
              fontWeight: "700",
              border: "1px solid #71964e",
              borderRadius: "5px",
            }}
          >
            Click to hunt more about Recipe
          </Typography>
        </a>
        {/* {instruction.map((step) => (
          <Typography key={step.steps.map((s) => s.number)}>
            {step.steps.map((s) => s.step)}
          </Typography>
        ))} */}
        {/* {instruction.map((step) => (
          <ListItem>
            {step.steps.map((s) => (
              <List key={s.ingredients.map((item) => item.id)}>
                <ListItemText>
                  {" "}
                  {s.ingredients.map((item) => item.name)}{" "}
                </ListItemText>
              </List>
            ))}
          </ListItem>
        ))} */}
      </CardContent>

      <CardActions
        style={{
          paddingBottom: "15px",
          justifyContent: "center",
        }}
      >
        <Button
          size="small"
          type="button"
          onClick={removeFavoriteItem}
          variant="contained"
          style={{
            backgroundColor: "#34bf49",
            padding: "10px",
            fontWeight: "600",
          }}
        >
          Remove from Favorite
        </Button>
        {openSnack && (
          <Snackbar open={openSnack} autoHideDuration={900} onClose={onClose}>
            <Alert
              severity="success"
              variant="filled"
              sx={{ width: "100%" }}
              onClose={onClose}
            >
              Successfully Added
            </Alert>
          </Snackbar>
        )}
        {openAlert && (
          <Snackbar open={openAlert} autoHideDuration={900} onClose={onClose}>
            <Alert
              severity="warning"
              variant="filled"
              sx={{ width: "100%" }}
              onClose={onClose}
            >
              Already Added
            </Alert>
          </Snackbar>
        )}
      </CardActions>
    </Card>
  );
}
export default FavoriteItems;
