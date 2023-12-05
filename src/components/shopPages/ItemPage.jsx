import { useLocation } from 'react-router-dom';

import * as descriptions from './descriptions.jsx';
import './Shop.scss';


const ItemPage = () => {
    const location = useLocation();

    return (
        <>
            <header>
                <p>
                    {location.state.props.alt}
                </p>
            </header>
            <main>
                <div id="item-page-div">
                    <img src={location.state.props.src} alt={location.state.props.alt} className='item-page-image' />
                    <p>{descriptions[location.state.props.name]}</p>
                </div>

            </main>
        </>
    );
}

export default ItemPage;

