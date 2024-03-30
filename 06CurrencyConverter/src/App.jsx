import { useState } from 'react'
import {Inputbox} from './components'
import useCurrencyInfo from './hooks/useCurrencyinfo'
import country_list from "./javascript/country-list"

// function returning application 
function App() {
  
  // setting usestate hooks for different value to be changed throughtout process  

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("NPR")
  const [convertedAmount, setConvertedAmount] = useState(0)

//   calling function from useCurrencyinfo file with passing value of from currency and to currency
  const currencyInfo = useCurrencyInfo(from, to)
//   taking the keys of object containing all country list as its values and its abbr for currency as its keys 
  const countryList = Object.keys(country_list)

//   function to swap values of amounts and currency names
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(setConvertedAmount)
  }

//   function to calculate converted currency
  const convert = () => {
    setConvertedAmount(amount * currencyInfo)
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/1629172/pexels-photo-1629172.jpeg?auto=compress&cs=tinysrgb&w=600')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault(); // preventing default behavior as form submits
                         convert(); // calling convert function for calculation when form is submitted
                    }}
                >
                    <div className="w-full mb-1">
                        {/* adding component from inputbox with required props for "from" box */}
                        <Inputbox
                            label="From"
                            amount={amount}
                            currencyOptions={countryList}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        {/* adding button between "from" and "to" components to swap values */}
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap} // calling swap function when clicked
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        {/* adding component from inputbox with required props for "to" box */}
                        <Inputbox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={countryList}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    {/* adding button to submit form */}
                    <button 
                        type="submit" 
                        className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                    >
                        Convert {from.toUpperCase()} to {to.toUpperCase()} 
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
