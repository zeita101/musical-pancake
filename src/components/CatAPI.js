import React, { useState } from 'react';
import './css/Cat.css';

const apiKey = '544b4c34-95fd-4fb6-bfa6-4361c6f34f45';
const url = 'https://api.thecatapi.com/v1/images/search'

function CatAPI() {
    const [catUrl, setCatUrl] = useState('Kitties!');

    const getCat = () => {
        console.log('So many Cats');

        fetch(url)
            .then((res) => res.json())
            .then((cats) => {
                console.log('Cats:', cats);
                const catUrl = cats[0].url;

                setCatUrl(catUrl);

            })
            .catch((error) => {
                console.log('Error:', error)
            })
    }

    console.log('Cat URL:', catUrl);

    return (
        <div className="app">
            <h1 style={{ color: 'brown' }}>Random Ctas</h1>
            <img src={catUrl} alt="Cat Picture"></img>
            <button style={{
                backgroundColor: 'brown', border: 'none', color: 'white', padding: '15px 32px', textAlign: 'center',
                texDecoration: 'none', display: 'inlineBlock', fontSize: '18px', margin: '4px 2px', cursor: 'pointer'
            }} onClick={getCat}>New Cat</button>

        </div >
    )
}
export default CatAPI;