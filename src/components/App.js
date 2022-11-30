// create your App component here
import React, { useEffect } from 'react';

function App(){
    const [dogImage, setDogImage] = React.useState(null);


    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => setDogImage(data))
        console.log(dogImage);
    }, [])

    
    if(!dogImage) return <p>Loading...</p>

    return(
        <div>
        <img src={dogImage.message} alt= "A Random Dog"></img>
        </div>
    )
}


export default App;