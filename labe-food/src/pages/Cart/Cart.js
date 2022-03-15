import React, { useContext } from "react";
import axios from 'axios';
import { Typography } from "@mui/material";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import useRequestData from "../../hooks/useRequestData";

const Cart = () => {
    
    
    


    return (
        <div>
            <Typography variant="subtitle1" mt={1}>Meu Carrinho</Typography>
            <p>GET ENDEREÇO DE ENTREGA</p>
            <p>GET NOME, ENDEREÇO E TEMPO DE ENTREGA DO REST</p>
            <p>CARD DE CADA ITEM</p>
            <p>FRETE</p>
            <p>SUBTOTAL: VALOR TOTAL COM FRETE</p>
            <p>FORMA DE PAGAMENTO (SELECT CARTÃO OU DINHEIRO)</p>
            <p>CONFIRMAR</p>

        </div>
    )
};

export default Cart;