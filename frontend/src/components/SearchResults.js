import React from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: "1rem",
  },
  gridList: {
    width: "32rem",
    height: "32rem",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  favoritedIcon: {
    color: "red",
  },
  defaultText: {
    paddingLeft: "1rem",
  },
}));

const SearchResults = ({ gifs, addFavorite, favorites, ...props }) => {
  const classes = useStyles();

  //saves favorited gifs
  const handleAddFavorite = (gif) => {
    axios
      .post(`http://localhost:3010/api/v1/favorites`, {
        favorite: {
          giphy_id: gif.id,
          title: gif.title,
          url: gif.url,
        },
      })
      .then((res) => {
        addFavorite(gif);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={classes.root}>
      {gifs && gifs.length > 0 ? (
        <React.Fragment>
          <Typography variant="h5" classes={{ root: classes.defaultText }}>
            Search Results
          </Typography>
          <GridList className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: "auto" }} />
            {gifs.map((gif, i) => {
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
                        className={classNames({
                          [classes.icon]: !alreadyFavorited,
                          [classes.favoritedIcon]: alreadyFavorited,
                        })}
                        onClick={() => handleAddFavorite(gif)}
                      >
                        {alreadyFavorited ? (
                          <Tooltip title="Already Favorited, silly!">
                            <FavoriteIcon />
                          </Tooltip>
                        ) : (
                          <FavoriteBorderIcon />
                        )}
                      </IconButton>
                    }
                  />
                </GridListTile>
              );
            })}
          </GridList>
        </React.Fragment>
      ) : (
        <Typography classes={{ root: classes.defaultText }}>
          Go ahead and search for some gifs!
        </Typography>
      )}
    </div>
  );
};

export default SearchResults;
