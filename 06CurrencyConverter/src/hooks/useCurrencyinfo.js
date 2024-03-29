import {useEffect, useState} from "react"
import apiKey from "../javascript/apikey"

function useCurrencyInfo(currency, currencyTo){
    console.log(currencyTo);
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`).then((res) => res.json()) 
        .then((val) => {
            console.log(val);
            console.log(val.conversion_rates[currencyTo]);
            setData(val.conversion_rates[currencyTo])
        })
        
    }, [currency, currencyTo])
    return data
}

export default useCurrencyInfo;