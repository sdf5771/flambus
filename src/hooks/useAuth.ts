import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const REFRESH_TOKEN_KEY = 'flambus-refreshToken'
const ACCESS_TOKEN_KEY = 'flambus-accessToken'

function useAuth(){
    const [loggedIn, setLoggedIn] = useState(false); 
    /*
    AsyncStorage에 저장된 refreshToken 체크
    boolean return (true/false)
    */
    const isLoggedIn = async () => {
        const refreshToken = await AsyncStorage.getItem(REFRESH_TOKEN_KEY)
        
        if (refreshToken){
            setLoggedIn(true);
        }
    }

    const setAccessToken = async (token: string) => {
        await AsyncStorage.setItem(ACCESS_TOKEN_KEY, token)
    }

    useEffect(() => {
        isLoggedIn();
    }, [AsyncStorage.getItem(REFRESH_TOKEN_KEY)])


    return {
        isLoggedIn: loggedIn,
        setAccessToken,
    }
}

export default useAuth;