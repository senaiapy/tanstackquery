import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { FoodData } from '../interface/FoodData';

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<FoodData[]> => {
    const response = axios.get(API_URL + '/food');
    return response;
}

export function useFoodData(/*id */){
    const query = useQuery({
        queryFn: fetchData, // call the function
        queryKey: ['food-data'], // name of the query
        retry: 2, // max 2 retries
        // enabled: !!id, // enabled when id is not null
        // refetchInterval: 60 * 5 * 1000, //search every 5 minutes
    })

    return {
        ...query,
        data: query.data?.data
    }
}