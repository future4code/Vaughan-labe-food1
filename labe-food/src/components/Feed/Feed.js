import { baseURL } from "../../constants/baseurl";
import useRequestData from "../../hooks/useRequestData";

const Feed = () => {
    const [restaurants, getRestaurants, isLoading, error] = useRequestData([], `${baseURL}/restaurants`)
    
    console.log(restaurants);

    const renderRestaurants = restaurants && restaurants.map((restaurant) => {
        console.log(restaurant.name)
        return (
            <div>
                <p>{restaurant.name}</p>
                <img src={restaurant.logoUrl} alt="Foto do Restaurante" />
                <p>Tempo de entrega: {restaurant.deliveryTime} min</p>
                <p>Frete: R${restaurant.shipping},00</p>
            </div>
        )
    })
    return (
        <div>
            {renderRestaurants}
            {!isLoading && error && <p>Deu um erro. Tente novamente.</p>}
        </div>
    )
};

export default Feed;