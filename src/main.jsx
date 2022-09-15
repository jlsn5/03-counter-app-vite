import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';

import './styles.css';


// import App from './HelloWorldApp'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title="Hola, soy Goku" subTitle={ 123 } />
    </React.StrictMode>
);




