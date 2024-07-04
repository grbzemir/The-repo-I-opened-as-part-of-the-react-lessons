import React from 'react'
import '../css/Currency.css'
import { FaArrowAltCircleRight } from "react-icons/fa";

function Currency() {

    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('');
    const [toCurrency, setToCurrency] = useState('');
    const [result, setResult] = useState(0);


    return (
        <div className='currency-div'>
            <div style={{
                fontFamily: 'arial',
                backgrounColor: 'black',
                color: '#fff',
                width: '100%',
                textAlign: 'center'
            }}>
                <h3>Döviz Kuru Uygulamasi</h3>
            </div>

            <div style={{ marginTop: '25px' }}>

                <input value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    type="number" className='amount' />


                <select onChange={(e) => setFromCurrency(e.target.value)}
                    className='from-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TL</option>
                </select>

                <FaArrowAltCircleRight style={{ MarginTop: '5px', fontSize: '25px', color: 'black', marginRight: '10px' }} />

                <select onChange={(e) => setToCurrency(e.target.value)}
                    className='to-currency-option'>
                    <option>TL</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>

                <input value={result} onChange={(e) => setResult} type="number" className='result' />

            </div>

            <div>
                <button>Çevir</button>
            </div>

        </div>

    )
}

export default Currency
