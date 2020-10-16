import React from 'react';
import './Body.css';

function Body(){
    return(
        <div className="Container">
            {intro()}
            <h4>Is it You feel {randomMood()}</h4>
            {randomNum()}
        </div>
    )

}
function intro() {
    return(
        <div className="body">
            <h1>Why Mhub ?</h1>
            <p>Buying a property can be a very rewarding experience. But it can also be a very tedious one with the
            many processes involved. A typical sales cycle can take up to 3 months and sometimes more.
            This is because there are many stakeholders involved in a property transaction.</p>
            <hr />
            <h2>Function</h2>
        </div>
    )
}
function randomMood() {
    const moods = ['Happy', 'Sad', 'Silence', 'On Fire', 'Excelent'];
    return moods[Math.floor(Math.random() * moods.length)]
}
function randomNum(){
    const num = getNum();
    return (
        <div>
            <h3>Today Lucky Number is {num}</h3>
            <p>{num >= 9000 ? <img className="gif" src="https://media.giphy.com/media/ZcUGu59vhBGgbBhh0n/giphy.gif"/> : <img className="gif" src="https://media.giphy.com/media/eJ4j2VnYOZU8qJU3Py/giphy.gif" />}</p>
        </div>
    );

}
function getNum() {
    return (
        Math.floor(Math.random() * (9999 - 1000) + 1000)
    );
}
export default Body;