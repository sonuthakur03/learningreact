import {useEffect, useState} from "react"

function useCurrencyInfo(currency, apiKey){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&currencies=EUR%2CUSD%2CCAD`).then((res) => res.json()) 
        .then((res) => setData(res[currency]))
        console.log(data)
    }, [currency])
    return data
}

export default useCurrencyInfo;