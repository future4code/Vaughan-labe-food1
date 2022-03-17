import { useEffect, useState } from "react";
import axios from 'axios';

const useRequestData = (initialData, url) => {
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkVveGZNWnJ3NnpvaFhPQnJjUTh0IiwibmFtZSI6ImFsb3VhbG91YWxvdSIsImVtYWlsIjoiYWxvdWFsb3VhbG91QGZ1dHVyZTQuY29tIiwiY3BmIjoiMTExLjExMS45MjMtMTciLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4gQWZvbnNvIEJyYXplciwgMTg3LCA3NiAtIFZpbGEgTi4gQ29uY2Vpc3NhbmRyYSIsImlhdCI6MTY0NzI3ODg3M30.kmEYuhUSBrpLSe9Jqyf2f-6uQo27xpb3SZiK0TepNgs"
    
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        getData(url)
    }, [url])
    
    const getData = async(url) => {
        setIsLoading(true);

        const config = {
            headers: {
                // coloquei o token aki pegando o local storage. 
                auth: localStorage.getItem("token")
            }
        };

        try {
            const response = await axios.get(url, config)
            setData(response.data)
            setIsLoading(false);
        } catch (error) {
            setError(error.response)
            setIsLoading(false);
        }
    }

    return [data, getData, isLoading, error]
};

export default useRequestData;