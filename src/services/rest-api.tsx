import axios from 'axios';
import { Http2ServerResponse } from 'http2';
import React, { useState, useEffect } from "react";
import { slider } from './model';

export type TApiResponse = {
    status: Number;
    statusText: String;
    data: slider[];
    error: any;
    loading: Boolean;
};

const urlAPI: string = 'https://obet.pythonanywhere.com/v1/';

export const useAxiosget = (url: string): TApiResponse => {
    const [status, setStatus] = useState<Number>(0);
    const [statusText, setStatusText] = useState<String>('');
    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    // useEffect(() => {
    const getAPIData = async () => {
        setLoading(true);
        try {
            const apiResponse = await fetch(`https://obet.pythonanywhere.com/v1/${url}`, {
                method: "GET",
                headers: {
                    'Authorization':'token 836a53db3ee059632f06a84ce3cebbee78a030f2'
                }
            });;
            const json = await apiResponse.json();
            setStatus(apiResponse.status);
            setStatusText(apiResponse.statusText);
            setData(json);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    };
    // }, []);
    useEffect(() => {
        getAPIData();
    }, []);
    return { status, statusText, data, error, loading };
};

 