import { baseURL } from "../../constants/baseurl";
import useRequestData from "../../hooks/useRequestData";
import { useState } from "react";
const Search = () => {

    const [restaurant, setRestaurant] = useRequestData([], `${baseURL}/restaurants`)
    console.log(restaurant)
    const [inputValue, setValue] = useState("")

    const onChangeValue = (event) => {
        setValue(event.target.value)
    }

    const filter = restaurant && restaurant.filter(restaurantes => {
      if(!inputValue){
          return false
      }
        return  restaurantes.name.toLowerCase().includes(inputValue.toLowerCase())
    }).map(restaurantes => {
        return(
            <p>  {restaurantes.name} </p>
        )
        }) 
        console.log('filter', filter)


    

    return (
        <div>

            <input
                onChange={onChangeValue}
                value={inputValue}
            />

            {filter}

        </div>
    )
};

export default Search;