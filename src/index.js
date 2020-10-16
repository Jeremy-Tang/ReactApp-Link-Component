import Header from './Header';
import Body from './Body';
import React from 'react';
import Footer from './Footer';
import './html.css';
import ReactDOM from 'react-dom';


function App(){
    return(
        <div className="html">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));