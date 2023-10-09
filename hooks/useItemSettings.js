import { useDispatch } from "react-redux";
import api from "../api";

export const useItemSettings = () => {
    const dispatch = useDispatch();

    const modifyItem = async (data) => {
        try {
            const { data: responseData, status } = await api.put('items/me', data);
            if (status === 200) {
                dispatch({ type: 'SET_ITEM', payload: responseData });
                return true;
            }
            return false;
        } catch (error) {
            console.error('Error modifying item', error);
            return null;
        }
    }

    const addImageToItem = async () => {
        //add code image
    }

    const fetchDetails = async () => {
        try {
            const { data, status } = await api.get('items/details');
            if (status === 200) return data;
            return null;
        } catch (error) {
            console.error('Error fetching item details', error);
            return null;
        }
    }

    return {
        modifyItem,
        addImageToItem,
        fetchDetails
    }
}

