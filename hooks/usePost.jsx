"use client";

import { message } from "antd";
import axios from "axios";

import { useState } from "react";

function usePost() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const postData = async (url, data, onSuccess, onError) => {
        message.loading({ content: "Loading...", key: 1 });
        setLoading(true);
        try {
            const res = await axios.post(process.env.NEXT_PUBLIC_API_URL + url, data);
            setData(res.data);
            onSuccess && onSuccess(res.data);
        } catch (err) {
            console.log(err);
            setError(err.response.data);
            onError && onError(err.response.data);
        } finally {
            setLoading(false);
            message.destroy(1);
        }
    };

    return { data, loading, error, postData };
}

export default usePost;
