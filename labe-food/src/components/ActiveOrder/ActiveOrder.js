
import { Snackbar } from "@mui/material";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import React, { useContext, useEffect, useState } from 'react'


const ActiveOrder = () => {
    const { getActiveOrder, activeOrder} = useContext(GlobalStateContext);

    // useEffect(() => {
    //     getActiveOrder()
    // },[])

    const snackbar = () => {
        if (activeOrder !== null && activeOrder.order) {
        return  <Snackbar
                open={true}
                autoHideDuration={activeOrder.order.expiresAt - activeOrder.order.createdAt}
                message={`Pedido em andamento 
                            ${activeOrder.order.restaurantName}
                            SUBTOTAL R$${activeOrder.order.totalPrice}
                        `}
                />
    }}

    return (
       
        <div>
            {console.log("activeorder", activeOrder)}
            {snackbar()}
        </div>
            );
}
export default ActiveOrder;