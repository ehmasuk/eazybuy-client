import axios from "axios";
import { useState } from "react";

function useGet() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getData = async (url, onSuccess, onError) => {
        setLoading(true);
        try {
            const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + url);
            setData(res.data);
            onSuccess && onSuccess(res.data);
        } catch (err) {
            console.log(err);
            setError(err.response.data);
            onError && onError(err.response.data);
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, getData };
}

export default useGet;
