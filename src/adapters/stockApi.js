import { API } from '../config';
    
export const getDowJones = () =>{ 
    return fetch(`${API}/stock/dowjones`, {
        method:"GET"
    })
    .then(res=>{return res.json()})
    .catch(err=>{console.log(err);})
};

export const stockSearch = () =>{ 
    return fetch(`${API}/stock/search`, {
        method:"GET",
        headers: {
            Accept:'application/json',
            'Content-Type':'application/json',
            // Authorization: `Bearer ${token}`
        }
    })
    .then(res=>{return res.json()})
    .catch(err=>{console.log(err);})
};

export const getGainerStocks = () =>{ 
    return fetch(`${API}/stock/gainers`, {
        method:"GET"
    })
    .then(res=>{return res.json()})
    .catch(err=>{console.log(err);})
};
export const getLoserStocks = () =>{ 
    return fetch(`${API}/stock/losers`, {
        method:"GET"
    })
    .then(res=>{return res.json()})
    .catch(err=>{console.log(err);})
};
export const getStock = (stockSymbol)=>{
    return fetch(`${API}/stock/${stockSymbol}`, {
        method:"GET"
    })
    .then(res=>{return res.json()})
    .catch(err=>{console.log(err);})
};
export const getStockPrice = (stockSymbol)=>{
    return fetch(`${API}/stock/price/${stockSymbol}`, {
        method:"GET"
    })
    .then(res=>{return res.json()})
    .catch(err=>{console.log(err);})
};
export const getStockNews = (stockSymbol)=>{
    return fetch(`${API}/stock/news/${stockSymbol}`, {
        method:"GET"
    })
    .then(res=>{return res.json()})
    .catch(err=>{console.log(err);})
};

