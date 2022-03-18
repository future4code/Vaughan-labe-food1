
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
                open={true}
                autoHideDuration={activeOrder.order.expiresAt - activeOrder.order.createdAt}
                >
                    <Alert severity="error" sx={{ width: '100%' }}>
                        <Typography>Pedido em andamento </Typography>
                        <Typography>{activeOrder.order.restaurantName}</Typography>
                        <Typography>SUBTOTAL R${activeOrder.order.totalPrice}</Typography>
                    </Alert>
                </Snackbar>
    }}

    console.log(activeOrder)

    return (
       
        <div>
            {snackbar()}
        </div>
            );
}
export default ActiveOrder;