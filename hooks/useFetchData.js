import { useEffect, useState } from "react";
import api from "../api";

const useFetchData = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      api.get('endpoint').then(({ data: responseData }) => {
        setData(responseData.results);
      }).catch(e => console.log('error', e.response));
    }, []);
    return data;
};

export default useFetchData;