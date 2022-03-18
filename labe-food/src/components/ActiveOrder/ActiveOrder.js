
import { Snackbar, Typography } from "@mui/material";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import React, { useContext, useEffect, useState } from 'react'
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ActiveOrder = () => {
    const {activeOrder, getActiveOrder} = useContext(GlobalStateContext);

    useEffect(() => {
        getActiveOrder()
    },[])

    const snackbar = () => {
        if (activeOrder !== null && activeOrder.order) {
        return  <Snackbar
                sx={{mb: 5}}
                open={true}
                autoHideDuration={activeOrder.order.expiresAt - activeOrder.order.createdAt}
                >
                    <Alert severity="success" sx={{ width: '100%' }}>
                        <Typography> Pedido em andamento </Typography>
                        <Typography color="primary.contrastText">{activeOrder.order.restaurantName}</Typography>
                        <Typography fontWeight={600} color="primary.contrastText">SUBTOTAL R${activeOrder.order.totalPrice.toFixed(2)}</Typography>
                    </Alert>
                </Snackbar>
    }}

    return (
       
        <div>
            {snackbar()}
        </div>
            );
}
export default ActiveOrder;