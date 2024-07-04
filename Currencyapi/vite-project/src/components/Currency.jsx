import React, { useState } from 'react';
import '../css/Currency.css';
import { FaArrowAltCircleRight } from "react-icons/fa";
import axios from 'axios';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_0dle8NOODwNTkD5i4EFlF4hKx3Yrpqcl4PrbHk0u";

function Currency() {
    const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState(0);

    const exchange = async () => {
        try {
            const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
            const rate = response.data.data[toCurrency];
            const calculatedResult = (rate * amount).toFixed(2);
            setResult(calculatedResult);
        } catch (error) {
            console.error("Hata oluştu:", error);
        }
    };

    return (
        <div className='currency-div'>
            <div style={{
                fontFamily: 'arial',
                backgroundColor: 'black',
                color: '#fff',
                width: '100%',
                textAlign: 'center'
            }}>
                <h3>Döviz Kuru Uygulamasi</h3>
            </div>
            <div style={{ marginTop: '25px' }}>
                <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    type="number"
                    className='amount'
                />
                <select
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className='from-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                    <option>GBP</option>
                </select>
                <FaArrowAltCircleRight
                    style={{ marginTop: '5px', fontSize: '25px', color: 'black', marginRight: '10px' }}
                />
                <select
                    onChange={(e) => setToCurrency(e.target.value)}
                    className='to-currency-option'>
                    <option>TRY</option>
                    <option>USD</option>
                    <option>EUR</option>
                    <option></option>
                </select>
                <input
                    value={result}
                    readOnly
                    type="number"
                    className='result'
                />
            </div>
            <div>
                <button onClick={exchange} className='exchange-button'>Çevir</button>
            </div>
        </div>
    );
}

export default Currency;
