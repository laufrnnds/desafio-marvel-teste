/* eslint-disable no-param-reassign */
/* eslint-disable no-multi-assign */
/* eslint-disable array-callback-return */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import React, { useEffect, useRef } from 'react';

// import { styled } from '@material-ui/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
  getAll,
  selectAll,
  upsertOne,
} from '../../store/modules/characters/charactersSlice';
import { adicionarLike, retirarLike } from '../../store/modules/likes/actions';
import {
  useAppDispatch,
  useAppSelector,
} from '../../store/modules/types-hooks';

const Characters: React.FC = () => {
  const dispatch = useAppDispatch();

  const charactersRedux = useAppSelector(selectAll);
  const charactersLoading = useAppSelector((state) => state.characters.loading);

  const ref = useRef(null);
  const handleFavorite = (id: any, favorite: boolean) => {
    // let updateFavorite = true;
    // if (favorite === true) {
    //   updateFavorite = false;
    // }
    dispatch(upsertOne({ id, favorite: !favorite }));

    dispatch(
      favorite === true
        ? retirarLike({ quantidade: 1 })
        : adicionarLike({ quantidade: 1 })
    );

    console.log(charactersRedux);
  };

  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <Grid
      container
      spacing={2}
      xs={12}
      sx={{
        marginTop: '50px',
        padding: '30px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        overflow: 'hidden',
      }}
    >
      {charactersLoading && <div>Loading...</div>}
      {charactersRedux.length > 0 &&
        charactersRedux.map((dado: any) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            xl={4}
            key={dado.id}
            sx={{ margin: '0px' }}
          >
            <Card
              sx={{ maxWidth: 300, backgroundColor: '#F0141E', color: '#ffff' }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={`${dado.thumbnail.path}.jpg`}
                  alt={`${dado.name}.jpg`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {dado.name}
                  </Typography>

                  <Typography variant="body2" color="#ffff">
                    {dado.description === ''
                      ? 'sem descrição'
                      : dado.description}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div" />
                </CardContent>
              </CardActionArea>
              <CardActions disableSpacing>
                <IconButton
                  ref={ref}
                  aria-label="add to favorites"
                  onClick={() => handleFavorite(dado.id, dado.favorite)}
                >
                  {dado.favorite ? (
                    <FavoriteIcon color="secondary" />
                  ) : (
                    <FavoriteBorderIcon color="secondary" />
                  )}
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default Characters;
