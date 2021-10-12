import { API } from '../config';

export const signup = userData =>{ 
    return fetch(`${API}/signup`, {
        method:'POST',
        headers: {
            Accept:'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(res=>{return res.json()})
    .catch(err=>{console.log(err);})
};
    
export const signin = userData =>{ 
    return fetch(`${API}/signin`, {
        method:'POST',
        headers: {
            Accept:'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(res=>{return res.json()})
    .catch(err=>{console.log(err);})
};

export const saveAuth = ({token,user},next)=>{
    localStorage.setItem('authInfo',JSON.stringify(user));
    localStorage.setItem('token',token);
    next();
};

export const isAuthenticated = ()=>{
    if(localStorage.getItem('token')){
        if(localStorage.getItem('authInfo')){
            return JSON.parse(localStorage.getItem('authInfo'));
        }
        return false;
    }
    return false;
};
export const getToken = ()=>{
    if(localStorage.getItem('token')){
        return JSON.parse(localStorage.getItem('token'));
    }
    return false;
}