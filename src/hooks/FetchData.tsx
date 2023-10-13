import { useState, useEffect } from "react";
import { server_calls } from "../data/api/server";

export const useGetData = () => {
    const [ carData, setData ] = useState<[]>([]) // typescript allowing array 

    async function handleDataFetch(){         //actually talking to the db 
        const result = await server_calls.get();
        setData(result)
    }

    useEffect( () => {
        handleDataFetch(); 
    }, [])
    // anytime useGetData is called, anything on the ui changes, it refreshes
    // an empty array useEffect on Mount when the Data table component comes into existance 1 time

    return { carData, getData: handleDataFetch }
}
