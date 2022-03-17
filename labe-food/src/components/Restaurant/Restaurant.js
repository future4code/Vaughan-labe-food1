import { SettingsInputAntennaTwoTone } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { baseURL } from "../../constants/baseurl";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import useRequestData from "../../hooks/useRequestData";
import Header from "../Header/Header";
import {
  ButtonAdd,
  ButtonDiv,
  CardProducts,
  CardRestaurant,
  MainDiv,
  ProductImage,
  ProductText,
  ShippingAndTime,
  TimeStyled,
  TypographyStyled,
} from "./styled-restaurant";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const Restaurant = () => {
  const params = useParams();
  const [restaurantDetails, getRestaurantDetails] = useRequestData([], `${baseURL}/restaurants/${params.id}`);
  const { productsInCart, setProductsInCart } = useContext(GlobalStateContext);
  // const { addButton, setAddButton } = useContext(GlobalStateContext);
  const [open, setOpen] = useState(false);
  const [quantityNumber, setQuantityNumber] = useState('0');
  const [productToAdd, setProductToAdd] = useState({});
  const {restaurantId, setRestaurantId} = useContext(GlobalStateContext);

  const cardRestaurant = restaurantDetails.restaurant;

  useEffect(() => {
  }, [productsInCart])

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  // Tentando separar os produtos por categoria!!

  // useEffect(() => {
  //     addingCategory()
  // }, [restaurantDetails])

  // const addingCategory = () => {
  //     if (cardRestaurant) {
  //         let category = []
  //         let p = 0
  //         for (let i = 0; i < cardRestaurant.products.length; i++) {
  //             console.log(cardRestaurant.products[i].category)
  //             if (cardRestaurant.products[i].category !== category.name) {
  //                 category.push({ name: cardRestaurant.products[i].category, products: [cardRestaurant.products[i]] })
  //             }
  //         }
  //         console.log(category)
  //     }
  // }

  const handleOpen = (product) => {
    if(restaurantId && restaurantId !== params.id) {
      if(window.confirm("Você já tem itens adicionados no seu carrinho de outro restaurante. Deseja limpar o carrinho?")) {
        setRestaurantId("")
        setProductsInCart([])
        setProductToAdd(product);
        setOpen(true)
      }
    } else {
    setOpen(true)
    setProductToAdd(product);
  }
  };
  const handleClose = () => setOpen(false);
  const handleChange = (event) => {
    setQuantityNumber(event.target.value);
  };

  const addToCart = (id) => {
    const cartProduct = productsInCart.find(product => id === product.id)

    if (cartProduct) {
      const newProductsInCart = productsInCart.map(product => {
        if (id === product.id) {
          return {
            ...product,
            quantity: product.quantity + quantityNumber,
          }
        }
        setRestaurantId(params.id)
        return product
      })

      setProductsInCart(newProductsInCart)
    } else {
      const addProduct = cardRestaurant.products.find(product => id === product.id)

      const newProductsInCart = [...productsInCart, { ...addProduct, quantity: quantityNumber}]

      setProductsInCart(newProductsInCart)
      setRestaurantId(params.id)
    }
    setOpen(false)
  };

  const removeFromCart = (id) => {
    const newProductsInCart = productsInCart.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity - 1
        }
      }
      return product
    }).filter((product) => product.quantity > 0)

    setProductsInCart(newProductsInCart)
  };

  const renderProducts =
    cardRestaurant &&
    cardRestaurant.products.map((product) => {
      return (
        <CardProducts key={product.id} variant='outlined'>
          <ProductImage
            component='img'
            height='150'
            image={product.photoUrl}
            alt='Foto do Restaurante'
          />
          <ProductText>
            <TypographyStyled variant='body' color='primary'>
              {product.name}
            </TypographyStyled>
            <TypographyStyled variant='body2' color='secondary'>
              {product.description}
            </TypographyStyled>
            <TypographyStyled variant='body'>
              R${product.price}0
            </TypographyStyled>
          </ProductText>
          <ButtonDiv>
            {productsInCart.map(product => product.quantity > 0) ?
              <ButtonAdd variant='outlined' color='primary' onClick={() => { handleOpen(product) }}>
                Adicionar
              </ButtonAdd> :
              <button onClick={() => { removeFromCart(product.id) }}>remover</button>}


          </ButtonDiv>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Selecione a quantidade desejada
              </Typography>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={quantityNumber}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="0">
                    <em>0</em>
                  </MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                </Select>
              </FormControl>
              <Button onClick={() => addToCart(productToAdd.id)}>Adicionar</Button>
            </Box>
          </Modal>
        </CardProducts>
      );
    });

  console.log("produtos no carrinho", productsInCart)
  console.log("id do restaurante", restaurantId)

  return (
    <>
      <Header title='Restaurante' />
      <MainDiv>
        {cardRestaurant && (
          <CardRestaurant>
            <CardMedia
              component='img'
              height='150'
              image={cardRestaurant.logoUrl}
              alt='Foto do Restaurante'
            />
            <CardContent>
              <Typography variant='body' component='div' color='primary'>
                {cardRestaurant.name}
              </Typography>
              <Typography variant='body2' color='secondary'>
                {cardRestaurant.category}
              </Typography>
              <ShippingAndTime>
                <TimeStyled variant='body2' color='secondary'>
                  {cardRestaurant.deliveryTime} min
                </TimeStyled>
                <Typography variant='body2' color='secondary'>
                  Frete R${cardRestaurant.shipping},00
                </Typography>
              </ShippingAndTime>

              <Typography variant='body2' color='secondary'>
                {cardRestaurant.address}
              </Typography>
            </CardContent>
          </CardRestaurant>
        )}
        {cardRestaurant && renderProducts}
      </MainDiv>

    </>
  );
};

export default Restaurant;