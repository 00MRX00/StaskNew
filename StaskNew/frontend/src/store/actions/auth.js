import axios from '../../axios/axios-stask'
import { AUTH_SUCCESS, AUTH_LOGOUT, AUTH_ERROR } from './actionTypes'

export function auth(email, password) {
    return async dispatch => {
        const requestData = {
            email: email,
            password: password,
        }

        let url = "auth/login"

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(requestData),
            url: url
        };

        await axios(options)
            .then(response => {
                localStorage.setItem('token', response.data.token);
                dispatch(authSuccess(response.data.token));
            })
            .catch(error => {
                dispatch(authError());
            })
    };
}

export function deleteToken() {
    return dispatch => {
        const token = localStorage.getItem('token')
        const options = {
            method: 'POST',
            headers: {
                'Authorization': 'Token ' + token,
            },
            url: "auth/logout"
        };

        axios(options)
            .then(() => {
                dispatch(logout())
            })
    };
}

export function logout() {
    localStorage.removeItem('token');
    return {
        type: AUTH_LOGOUT
    };
}

export function authSuccess(token) {
    return {
        type: AUTH_SUCCESS,
        token
    };
}

export function authError() {
    return {
        type: AUTH_ERROR,
        errorMessage: "Неправильный логин или пароль"
    };
}

export function autoLogin() {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token) {
            const options = {
                method: 'GET',
                headers: {
                    'Authorization': 'Token ' + token,
                },
                url: "auth/user"
            };

            axios(options)
                .then(() => {
                    dispatch(authSuccess(token))
                })
                .catch(error => {
                    dispatch(logout())
                })

        } else {
            dispatch(logout())
        }

    };
}