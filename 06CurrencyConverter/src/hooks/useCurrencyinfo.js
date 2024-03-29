import {useEffect, useState} from "react"
import apiKey from "../javascript/apikey"

function useCurrencyInfo(currency, currencyTo){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`).then((res) => res.json()) 
        .then((val) => {
            console.log(val)
            setData(val.conversion_rates[currencyTo.value])
        })
        
    }, [currency])
    console.log(data);
    console.log(currencyTo);
    console.log(currency);
    return data
}

export default useCurrencyInfo;