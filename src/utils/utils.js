import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { store } from "../redux/store";
import types from "../redux/types";

//-------------------------------Store and get login on Async storage--------------------------------
export const setLoginLocally = async (loginData) => {
    try {
        let jsonValue = JSON.stringify(loginData)
        await AsyncStorage.setItem('LoginLocalStatus', jsonValue)
        return jsonValue;
    } catch (error) {
        console.log("error rasied to store login locally")
    }
}

export const getLoginLocally = async () => {
    try {
        const savedItem = await AsyncStorage.getItem('LoginLocalStatus');
        let paresSavedItem = JSON.parse(savedItem);
        console.log("getItemLocallyConsole---------", paresSavedItem);
        return paresSavedItem;

    } catch (error) {
        console.log(error);
    }
};

export const removeLoginLocally = async () => {
    try {
        await AsyncStorage.removeItem('LoginLocalStatus');
        console.log("remove login");

    } catch (error) {
        console.log("error", error);
    }
};

//-----------------------------App Intro Slider------------------------------
export function setItem(key, data) {
    data = JSON.stringify(data);
    console.log("data set locally", data)
    return AsyncStorage.setItem(key, data);

}

export function getItem(key) {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(key).then(data => {
            resolve(JSON.parse(data));
        });
    });
}




//---------------------------Working with API---------------------------------
const { dispatch, getState } = store;

export async function getHeaders() {
    let loginUser = await AsyncStorage.getItem('loginUser');
    if (loginUser) {
        loginUser = JSON.parse(loginUser);
        //console.log(userData.accessToken, 'header')
        return {
            authorization: `${loginUser?.access_token}`,
        };
    }
    return {};
}


export async function apiReq(
    endPoint,
    data,
    method,
    headers,
    requestOptions = {}
) {
    console.log("api hit", endPoint)
    return new Promise(async (res, rej) => {
        const getTokenHeader = await getHeaders();
        headers = {
            ...getTokenHeader,
            ...headers
        };

        if (method === 'get' || method === 'delete') {
            data = {
                ...requestOptions,
                ...data,
                headers
            };
        }

        axios[method](endPoint, data, { headers })
            .then(result => {

                const { data } = result;

                if (data.status === false) {
                    return rej(data);
                }

                return res(data);
            })
            .catch(error => {
                console.log(error)
                console.log(error && error.response, 'the error respne')
                if (error && error.response && error.response.status === 401) {
                    clearUserData();
                    clearLoginUser();
                    // NavigationService.resetNavigation();
                    //NavigationService.navigate('loginUsingEmailScreen');
                    dispatch({
                        type: types.CLEAR_REDUX_STATE,
                        payload: {}
                    });
                    dispatch({
                        type: types.NO_INTERNET,
                        payload: { internetConnection: true },
                    });


                }
                if (error && error.response && error.response.data) {
                    if (!error.response.data.message) {
                        return rej({ ...error.response.data, msg: error.response.data.message || "Network Error" })
                    }
                    return rej(error.response.data)
                } else {
                    return rej({ message: "Network Error", msg: "Network Error" });
                }
                return rej(error);
            });
    });
}

export function apiPost(endPoint, data, headers = {}) {
    return apiReq(endPoint, data, 'post', headers);
}

// export function apiDelete(endPoint, data, headers = {}) {
//     return apiReq(endPoint, data, 'delete', headers);
// }

// export function apiGet(endPoint, data, headers = {}, requestOptions) {
//     return apiReq(endPoint, data, 'get', headers, requestOptions);
// }

// export function apiPut(endPoint, data, headers = {}) {
//     return apiReq(endPoint, data, 'put', headers);
// }



// export function setItem(key, data) {
//     data = JSON.stringify(data);
//     return AsyncStorage.setItem(key, data);
// }

// export function getItem(key) {
//     return new Promise((resolve, reject) => {
//         AsyncStorage.getItem(key).then(data => {
//             resolve(JSON.parse(data));
//         });
//     });
// }

// export function removeItem(key) {
//     return AsyncStorage.removeItem(key);
// }

// export function clearAsyncStorate(key) {
//     return AsyncStorage.clear();
// }

// export function setUserData(data) {
//     data = JSON.stringify(data);
//     return AsyncStorage.setItem('userData', data);
// }

// export function setLoginUser(data) {
//     data = JSON.stringify(data);
//     return AsyncStorage.setItem('loginUser', data);
// }

// export function setDefaultSelectedLanguage(data) {
//     data = JSON.stringify(data);
//     return AsyncStorage.setItem('defaultLanguage', data);
// }


// export function setClientInfo(data) {
//     data = JSON.stringify(data);
//     return AsyncStorage.setItem('clientInfo', data);
// }
// export function saveShortCodeData(data) {
//     data = JSON.stringify(data);
//     return AsyncStorage.setItem('saveShortCode', data);
// }

// export async function getUserData() {
//     return new Promise((resolve, reject) => {
//         AsyncStorage.getItem('userData').then(data => {
//             resolve(JSON.parse(data));
//         });
//     });
// }






// export function setLanguage(data) {
//     data = JSON.stringify(data);
//     return AsyncStorage.setItem('language', data);
// }

// export async function getLanguage() {
//     return new Promise((resolve, reject) => {
//         AsyncStorage.getItem('language').then(data => {
//             resolve(JSON.parse(data));
//         });
//     });
// }


// export async function clearUserData() {
//     return AsyncStorage.removeItem('userData');
// }

// export async function clearLoginUser() {
//     return AsyncStorage.removeItem('loginUser');
// }