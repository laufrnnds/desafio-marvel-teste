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
  Typography
} from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { styled } from '@material-ui/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { marvel } from '../../services';

const Gibis: React.FC = () => {
  // const dispatch = useDispatch();

  // const characterRedux = useSelector((state: any) => state.characterSlice);

  // const likeRedux: ILike = useSelector((state: any) => state.likeReducer);

  // const comicRedux = useSelector((state: any) => state.comic);

  // const hadleLike = () => {
  //   dispatch(
  //     likeRedux.apertou === false
  //       ? adicionarLike({ quantidade: 1, apertou: true })
  //       : retirarLike({ quantidade: 1, apertou: false })
  //   );
  // };

  // const hadleShop = () => {
  //   dispatch(
  //     likeRedux.apertou === false
  //       ? adicionarLike({ quantidade: 1, apertou: true })
  //       : retirarLike({ quantidade: 1, apertou: false })
  //   );
  // };

  // async function run() {
  //   const response = await marvel.get('/characters');
  // }

  // run();

  // useEffect(() => {
  //   dispatch(requestComic());
  //   marvel
  //     .get('/comics')
  //     .then(({ data }) => {
  //       const res = JSON.parse(data);
  //       const id = res.data.results.map((dado: any) => dado.id);
  //       const title = res.data.results.map((dado: any) => dado.title);
  //       const foto = res.data.results.map((dado: any) => dado.thumbnail.path);
  //       const preco = res.data.results.map((dado: any) => dado.prices);

  //       const comics: Comics[] = [];
  //       id.forEach((element: any, index: any) => {
  //         comics.push({
  //           id: element,
  //           name: title[index],
  //           imgPath: foto[index],
  //           price: preco[index],
  //         });
  //       });

  //       dispatch(createComic(comics));
  //     })
  //     .catch((error) => {
  //       dispatch(requestComicError(error.message));
  //     });
  // }, []);

  // useEffect(() => {
  //   dispatch(requestCharacter());
  //   marvel
  //     .get('/characters')
  //     .then(({ data }) => {
  //       const res = JSON.parse(data);
  //       const id = res.data.results.map((dado: any) => dado.id);
  //       const name = res.data.results.map((dado: any) => dado.name);
  //       const foto = res.data.results.map((dado: any) => dado.thumbnail.path);
  //       const description = res.data.results.map(
  //         (dado: any) => dado.description
  //       );
  //       const characters: Characteres[] = [];
  //       id.forEach((element: any, index: any) => {
  //         characters.push({
  //           id: element,
  //           name: name[index],
  //           imgPath: foto[index],
  //           description: description[index],
  //         });
  //       });

  //       dispatch(createCharacter(characters));
  //     })
  //     .catch((error) => {
  //       dispatch(requestCharacterError(error.message));
  //     });
  // }, []);
  // console.log(comicRedux);

  return (
    <h1>HAHAHA</h1>
    // <Grid
    //   container
    //   spacing={2}
    //   xs={12}
    //   sx={{
    //     marginTop: '50px',
    //     padding: '30px',
    //     display: 'flex',
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'space-around',
    //     overflow: 'hidden',
    //   }}
    // >
    //   {comicRedux.loading && <div>Loading...</div>}
    //   {!comicRedux.loading && comicRedux.error ? (
    //     <div>Erro: {comicRedux.error} </div>
    //   ) : null}
    //   {comicRedux.comics.length > 0 &&
    //     comicRedux.comics.map((dado: any) => (
    //       <Grid
    //         item
    //         xs={12}
    //         sm={6}
    //         md={4}
    //         xl={4}
    //         key={dado.id}
    //         sx={{ margin: '0px' }}
    //       >
    //         <Card
    //           sx={{
    //             maxWidth: 300,
    //             backgroundColor: '#202020',
    //             color: '#ffff',
    //           }}
    //         >
    //           <CardActionArea>
    //             <CardMedia
    //               component="img"
    //               height="140"
    //               image={`${dado.imgPath}.jpg`}
    //               alt={`${dado.name}.jpg`}
    //             />
    //             <CardContent>
    //               <Typography gutterBottom variant="h5" component="div">
    //                 {dado.name}
    //               </Typography>

    //               <Typography variant="body2" color="#ffff">
    //                 {dado.price[0].price === 0
    //                   ? 'sem preco'
    //                   : `$ ${dado.price[0].price}`}
    //               </Typography>
    //             </CardContent>
    //           </CardActionArea>
    //           <CardActions disableSpacing>
    //             <IconButton aria-label="add to favorites" onClick={hadleLike}>
    //               <FavoriteIcon
    //                 color={likeRedux.apertou ? 'primary' : 'disabled'}
    //               />
    //             </IconButton>
    //             <IconButton aria-label="add to favorites" onClick={hadleShop}>
    //               <ShoppingCartIcon color="primary" />
    //             </IconButton>
    //           </CardActions>
    //         </Card>
    //       </Grid>
    //     ))}
    // </Grid>
  );
};

export default Gibis;
