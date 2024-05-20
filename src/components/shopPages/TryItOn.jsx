import { useLocation } from 'react-router-dom';
import * as All from "./TryMeImageImports.jsx";

import './Shop.scss';
const TryItOn = () => {
    const location = useLocation();
    const images = {
        "nas": { 1: <img src={All.nasacort} alt="Nasacort" id="nasacort" className="item-image" key="1" /> },
        "fur": { 1: <img src={All.furbo} alt="Furbo Camera" id="furbo" className="item-image" key="1" />, 2: <img src={All.calvin} alt="Calvin" id="calvin" className="item-image" key="2" /> },
        "sho": { 1: <img src={All.shoes} alt="NB Shoes and Legs" id="shoes" className="item-image" key="1" /> },
        "ltp": {
            1: <img src={All.plants} alt="Plants Trio" id="plants" className="item-image" key="1" />, 2: <img src={All.watering_can} alt="Watering Can" id="watering-can" className="item-image" key="2" />
        },
        "elk": {
            1: <img src={All.elkay} alt="Elkay water filter" id="elkay" className="item-image" key="1" />, 2: <img src={All.bottle} alt="Water bottle" id="bottle" className="item-image" key="2" />
        },
        "com": {
            1: <img src={All.pc} alt="Custom Computer" id="computer" className="item-image" key="1" />
        }
    } //this object is where the images are saved so you can pick them based on the ending three characters of the pathname
    if (location.pathname.slice(-3) === "mon") {
        return (
            <>
                <div className="before-after-card">
                    <img src={All.zach_base} alt="Zach base" className="zach-photo" />
                    <img src={All.moneybag} alt="Money Bag" id="money-bag" className='item-image' />
                </div>
            </>
        );
    }
    return (
        <>
            <div className="before-after-card">
                <img src={All.zach_base} alt="Zach base" className="zach-photo" />
                {Object.values(images[location.pathname.slice(-3)])}
            </div>
        </>
    );
}

export default TryItOn;