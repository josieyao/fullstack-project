import React, { useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: "1rem",
  },
  gridList: {
    width: "32rem",
  },
  icon: {
    color: "red",
  },
  defaultText: {
    paddingLeft: "1rem",
  },
}));

const FavoriteGifs = ({ favorites, setFavorites, ...props }) => {
  const classes = useStyles();

  //loads all favorited gifs to the page & updates when there is a new favorited gif
  useEffect(() => {
    const getFavorites = () => {
      axios
        .get("http://localhost:3010/api/v1/favorites")
        .then((res) => {
          setFavorites(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getFavorites();
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="h5" classes={{ root: classes.defaultText }}>
        Favorites
      </Typography>
      {favorites && favorites.length > 0 ? (
        <GridList cellHeight={180} classes={{ root: classes.gridList }}>
          {favorites.map((gif, i) => {
            const { title, url } = gif;
            const alreadyFavorited = favorites.some((f) => f.title === title);
            return (
              <GridListTile key={i}>
                <img src={url} alt={title} />
                <GridListTileBar
                  title={title}
                  actionIcon={
                    <IconButton
                      aria-label={`info about ${title}`}
                      className={classes.icon}
                      disabled={alreadyFavorited}
                    >
                      <FavoriteIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            );
          })}
        </GridList>
      ) : (
        <Typography classes={{ root: classes.defaultText }}>
          No favorites yet!
        </Typography>
      )}
    </div>
  );
};

export default FavoriteGifs;
