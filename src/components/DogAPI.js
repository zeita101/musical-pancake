import React, { useState } from 'react';
import './css/Cat.css';

const url = 'https://dog.ceo/api/breeds/image/random/3'

function App() {
    const [dogUrl, setDogUrl] = useState('Puppies!');

    const getDog = () => {
        console.log('So many Dogs');

        fetch(url)
            .then((res) => res.json())
            .then((dogs) => {
                console.log('Dogs:', dogs);
                const dogUrl = url.dogUrl.message;

                setCatUrl(dogUrl);

            })
            .catch((error) => {
                console.log('Error:', error)
            })
    }

    console.log('Dog URL:', dogUrl);

    return (
        <div className="app">
            <h1 style={{ color: 'brown' }}>Random Dogs</h1>
            <img src={dogUrl} alt="Dog Picture"></img>
            <button style={{
                backgroundColor: 'brown', border: 'none', color: 'white', padding: '15px 32px', textAlign: 'center',
                texDecoration: 'none', display: 'inlineBlock', fontSize: '18px', margin: '4px 2px', cursor: 'pointer'
            }} onClick={getDog}>New Dog</button>

        </div >
    )
}
export default DogAPI;