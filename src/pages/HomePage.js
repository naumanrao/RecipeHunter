import React, { useEffect, useReducer, useState } from "react";
import Search from "../components/Search";
import SearchItems from "../components/SearchItems";
import { Main, StyledSearchItem } from "./styles";
import SearchFavorite from "../components/SearchFavorite";
import FavoriteItems from "../components/FavoriteItems";

const filteredReducer = (filtered, action) => {
  switch (action.type) {
    case "favoritesFood":
      console.log(action);

      return {
        ...filtered,
        filteredValue: action.value,
      };

    default:
      return filtered;
  }
};

const initialState = {
  filteredValue: "",
};

const HomePage = () => {
  const [filtered, dispatch] = useReducer(filteredReducer, initialState);

  // const [filteredFavorite, setFilteredFavorite] = useState([]);
  // const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [favorite, setFavorite] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [openSnack, setOpenSnack] = useState(false);
  const [alert, setAlert] = useState(false);
  const [apiCalledSuccess, setApiCalledSuccess] = useState(false);
  const getSearchData = (getData) => {
    setLoading(true);

    async function getReciepe() {
      const apiResponse = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=c860f43d71bf451babd6adb385a97a83&query=${getData}&addRecipeInformation=true`
      );

      const result = await apiResponse.json();
      console.log(result);
      const { results } = result;

      // results.forEach((recipe) => {
      //   const analyzedInstructions = recipe.analyzedInstructions;

      //   analyzedInstructions.forEach((instruction) => {
      //     const steps = instruction.steps;

      //     // Loop through the steps array and log each step
      //     steps.forEach((step) => {
      //       console.log(step.step);
      //     });
      //   });
      // });

      if (results && results.length > 0) {
        setLoading(false);
        setRecipes(results);
        setApiCalledSuccess(true);
      }
    }

    getReciepe();
  };

  const addFavorites = (getFavoriteFood) => {
    let copyFavorites = [...favorite];
    const index = copyFavorites.findIndex(
      (item) => item.id === getFavoriteFood.id
    );

    if (index === -1) {
      copyFavorites.push(getFavoriteFood);
      setFavorite(copyFavorites);
      localStorage.setItem("favorite", JSON.stringify(copyFavorites));
      setOpenSnack(true);
      window.scrollTo(0, document.documentElement.scrollHeight);
    } else {
      setAlert(true);
    }
  };
  const handleClose = () => {
    setOpenSnack(false);
    setAlert(false);
  };
  const removeFavoriteItem = (getCurrentId) => {
    let copyFavorites = [...favorite];
    copyFavorites = copyFavorites.filter((item) => item.id !== getCurrentId);

    setFavorite(copyFavorites);

    localStorage.setItem("favorite", JSON.stringify(copyFavorites));
  };

  // const handleChange = (e) => {
  //   setInput(e.target.value);
  // };
  //   const favoriteFiltered = favorite.filter((item) =>
  //     item.title.toLowerCase().includes(e.target.value)
  //   );
  //   setFilteredFavorite(favoriteFiltered);
  // };

  useEffect(() => {
    const extractFavorite = JSON.parse(localStorage.getItem("favorite")) || [];
    console.log(extractFavorite);
    setFavorite(extractFavorite);
  }, []);

  const favoriteRecipe =
    favorite && favorite.length > 0
      ? favorite.filter((item) =>
          item.title.toLowerCase().includes(filtered.filteredValue)
        )
      : [];

  console.log(favoriteRecipe);

  console.log(filtered);
  return (
    <Main>
      <Search
        getSearchData={getSearchData}
        className="search"
        apiCalledSuccess={apiCalledSuccess}
        setApiCalledSuccess={setApiCalledSuccess}
      />
      {loading && <div className="loading">Hunting!!</div>}

      <StyledSearchItem>
        {recipes.map((item) => (
          <SearchItems
            id={item.id}
            title={item.title}
            image={item.image}
            source={item.sourceUrl}
            openAlert={alert}
            // instruction={item.analyzedInstructions}
            addFavorites={() => addFavorites(item)}
            openSnack={openSnack}
            onClose={handleClose}
          />
        ))}
      </StyledSearchItem>
      <SearchFavorite
        getSearchData={getSearchData}
        className="search"
        value={filtered.filteredValue}
        type="text"
        onChange={(e) =>
          dispatch({ type: "favoritesFood", value: e.target.value })
        }
      />
      <StyledSearchItem>
        {
          favoriteRecipe && favoriteRecipe.length > 0 ? (
            <StyledSearchItem>
              {favoriteRecipe.map((item) => (
                <FavoriteItems
                  removeFavoriteItem={() => removeFavoriteItem(item.id)}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  source={item.sourceUrl}
                  openSnack={openSnack}
                  onClose={handleClose}
                />
              ))}
            </StyledSearchItem>
          ) : null
          // <StyledSearchItem>
          //   {" "}
          //   {favorite.map((item) => (
          //     <FavoriteItems
          //       removeFavoriteItem={() => removeFavoriteItem(item.id)}
          //       id={item.id}
          //       title={item.title}
          //       image={item.image}
          //       source={item.sourceUrl}
          //       openSnack={openSnack}
          //       onClose={handleClose}
          //     />
          //   ))}
          // </StyledSearchItem>
        }
      </StyledSearchItem>
    </Main>
  );
};

export default HomePage;
