import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';

import TryItOn from './TryItOn.jsx';
import useSound from 'use-sound';
import bruh from '../../assets/bruh.mp3';
import back from '../../assets/340.png';
import * as descriptions from './descriptions.jsx';
import './Shop.scss';


const ItemPage = () => {
    const location = useLocation();

    const navigate = useNavigate();
    const [tryOn, setTryOn] = useState(false); //Determines if try on screen is visible or not
    const handleTryOn = () => {
        setTryOn(!tryOn);
    }
    const [play] = useSound(bruh);

    const handleClick = () => {
        navigate("/shop");
    }

    const linko = useRef(null);

    if (!tryOn) {
        if (location.state.props.name === "pc") {
            linko.current = <a href="https://pcpartpicker.com/list/Xt6ffy" target="_blank" rel="noreferrer">List of parts</a>
        }
        return (
            <div onMouseMove={() => play()}>
                <header>
                    <p>
                        {location.state.props.alt}
                    </p>
                </header>
                <main>
                    <img src={back} alt="back-arrow" className="back-arrow" id="item-page-arrow" onClick={handleClick} />
                    <div id="item-page-div">
                        <img src={location.state.props.src} alt={location.state.props.alt} className='item-page-image' />
                        <p>{descriptions[location.state.props.name]}<br />{linko.current}</p>

                        <button onClick={handleTryOn}>Try it on?</button>
                    </div>

                </main>
            </div>
        );
    }
    else {
        return (
            <div id="try-it-on" onMouseMove={() => play()}>
                <img src={back} alt="back-arrow" className="back-arrow" onClick={handleTryOn} />
                <TryItOn item={location.state.props.alt} />
            </div>

        )
    }

}

export default ItemPage;

