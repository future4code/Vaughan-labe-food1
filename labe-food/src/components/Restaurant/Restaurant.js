import { useContext } from "react";
import { useParams } from "react-router";
import { baseURL } from "../../constants/baseurl";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import useRequestData from "../../hooks/useRequestData";

const Restaurant = () => {
    const params = useParams();
    const [restaurantDetails] = useRequestData([], `${baseURL}/restaurants/${params.id}`);

    console.log(restaurantDetails.restaurant)

    return (
        <div>
            {restaurantDetails.restaurant && 
            
            <p>{restaurantDetails.restaurant.name}</p>}
        </div>
    )
};

export default Restaurant;