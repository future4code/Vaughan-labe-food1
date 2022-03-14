import { useEffect, useState } from "react";
import axios from 'axios';

const useRequestData = (initialData, url) => {
    token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkVveGZNWnJ3NnpvaFhPQnJjUTh0IiwibmFtZSI6ImFsb3VhbG91YWxvdSIsImVtYWlsIjoiYWxvdWFsb3VhbG91QGZ1dHVyZTQuY29tIiwiY3BmIjoiMTExLjExMS45MjMtMTciLCJoYXNBZGRyZXNzIjpmYWxzZSwiaWF0IjoxNjQ3Mjc4MTQ2fQ.6mAbhIDEYtf39IWoK7qIfQaXGCPlNQTdnlwwDMBCsaY"

    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const getData = async(url) => {
        setIsLoading(true);

        const config = {
            headers: {
                auth: token
            }
        };

        try {
            const response = await axios.get(url, config)
            console.log(response.data)
            setIsLoading(false);
        } catch (error) {
            console.log(error.response)
            setIsLoading(false);
        }
    }

    return [data, setData, isLoading, error]
};

export default useRequestData;