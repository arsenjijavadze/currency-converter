import React from 'react';

const defaultCurrencies = ['USD', 'EUR', 'GBP', 'GEL'];

export const Block = ({ value, currency, onChangeValue, onChangeCurrency, type }) => (
    <div className="block">
        <ul className="currencies">
            {defaultCurrencies.map((cur) => (
                <li
                    onClick={() => onChangeCurrency(cur)}
                    className={currency === cur ? 'active' : ''}
                    key={cur}>
                    {cur}
                </li>
            ))}

            {/* <li>
                <svg heght="50px" viewBox="0 0 50 50" width="50px">
                    <rect fill="none" height="50" width="50" />
                    <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
                </svg>
            </li> */}
        </ul>
        <input
            inputMode="numeric"
            onChange={(e) => onChangeValue(e.target.value)}
            value={value}
            type={type}
            placeholder={0}
        />

    </div>
)