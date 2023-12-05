import { useState } from "react";
import * as importedThings from "./ShopPageImageImports.jsx";

import { useNavigate } from 'react-router-dom';

import './Shop.scss';
const ShopPage = () => {


    const navigate = useNavigate();

    const [itemList, setItemList] = useState([
        <img src={importedThings.airpods} name="airpods" alt="Airpods Pro" data-alphabet={1} data-want={3} data-price={189.99} data-link={importedThings.links.airpods} id="shop-page-airpods" className="shop-page-item-image" key="pod" />,
        <img src={importedThings.schoolOfRock} name="schoolOfRock" alt="Bass Lessons at School Of Rock" data-alphabet={2} data-want={4} data-price={320.00} data-link={importedThings.links.schoolOfRock} id="shop-page-schoolOfRock" className="shop-page-item-image" key="sor" />,
        <img src={importedThings.pillow} name="pillow" alt="Bedsure Satin Pillow Case" data-alphabet={3} data-want={12} data-price={7.99} data-link={importedThings.links.pillow} id="shop-page-pillow " className="shop-page-item-image" key="sat" />,
        <img src={importedThings.air_purifier} name="air_purifier" alt="Coway Airmega 200m Air Purifier" data-alphabet={4} data-want={5} data-price={197.00} data-link={importedThings.links.air_purifier} id="shop-page-air_purifier" className="shop-page-item-image" key="pur" />,
        <img src={importedThings.razor} name="razor" alt="Dovo Special Straight Razor" data-alphabet={5} data-want={7} data-price={190.62} data-link={importedThings.links.razor} id="shop-page-razor" className="shop-page-item-image" key="raz" />,
        <img src={importedThings.elkay} name="elkay" alt="Elkay LZS8WSLK EZH2O Bottle Filling Station" data-alphabet={6} data-want={1} data-price={1249.00} data-link={importedThings.links.elkay} id="shop-page-elkay" className="shop-page-item-image" key="elk" />,
        <img src={importedThings.furbo} name="furbo" alt="Furbo Cat Camera" data-alphabet={7} data-want={8} data-price={139.00} data-link={importedThings.links.furbo} id="shop-page-furbo" className="shop-page-item-image" key="fur" />,
        <img src={importedThings.masa} name="masa" alt="Heirloom Masa Gift Set" data-alphabet={8} data-want={10} data-price={48.00} data-link={importedThings.links.masa} id="shop-page-masa" className="shop-page-item-image" key="hms" />,
        <img src={importedThings.plants} name="plants" alt="The Luscious Trinity Plant Set" data-alphabet={9} data-want={6} data-price={313.00} data-link={importedThings.links.plants} id="shop-page-plants" className="shop-page-item-image" key="ltp" />,
        <img src={importedThings.pan} name="pan" alt="Matfer Carbon Steel Pan" data-alphabet={10} data-want={2} data-price={60.00} data-link={importedThings.links.pan} id="shop-page-pan" className="shop-page-item-image" key="pan" />,
        <img src={importedThings.nasacort} name="nasacort" alt="Nasacort: 240 Sprays" data-alphabet={11} data-want={11} data-price={23.68} data-link={importedThings.links.nasacort} id="shop-page-nasacort" className="shop-page-item-image" key="nas" />,
        <img src={importedThings.shoes} name="shoes" alt="New Balance 574 Core Sneakers" data-alphabet={12} data-want={9} data-price={89.99} data-link={importedThings.links.shoes} id="shop-page-shoes" className="shop-page-item-image" key="sho" />
    ]);

    const organizer = (filter_quality) => {
        //The organizer function is used to reorder the list based on the filter quality (price lowest to highest, price highest to lowest, 
        // most wanted by Zach) that the user chooses. It will then update the state so the site can rerender
        let quality = "data-alphabet"; //This will be the actual attribute itself
        let num = false; //This will determine if we're doing lth/htl (true) or not (false)
        let direction = false; //This will be used for htl vs. lth. If direction is true, it's lth and if it's false, it's htl.
        if (filter_quality.target.value === "htl" || filter_quality.target.value === "lth") {
            num = true;
            quality = "data-price";
            if (filter_quality.target.value === "lth") {
                direction = true;
            }

        }
        else if (filter_quality.target.value === "want") {
            quality = "data-want";

        }
        num ? setItemList(direction ? [...itemList].sort((a, b) => Number(a.quality) > Number(b.quality) ? 1 : -1) : [...itemList].sort((a, b) => Number(a.props[quality]) < Number(b.props[quality]) ? 1 : -1)) : setItemList([...itemList].sort((a, b) => a.props[quality] > b.props[quality] ? 1 : -1))
    }

    const handleClick = (e, item) => {
        e.preventDefault();
        navigate(`/item/${item.key}`, { state: { props: item.props } });
    }
    return (
        <>
            {/* <img src={} name="" alt="Shop Background" key="" /> */}
            <header className='center'>
                <p>Items</p>
            </header>
            <main>
                <div id="sort-div">
                    <p>Sort by:</p>
                    <select name="sort" onChange={e => organizer(e)}>
                        <option value="alpha">Aphabetically</option>
                        <option value="htl">Price Highest To Lowest</option>
                        <option value="lth">Price Lowest To Highest</option>
                        <option value="want">How Much Zach Wants It</option>
                    </select>
                </div>

                {itemList.map(item => {
                    return <table className="shop-page-item-image-table" key={item.props.id}>
                        <tbody>
                            <tr>
                                <td>{item}</td>
                                <td><p>{item.props.alt}: <br /> ${item.props["data-price"]}</p></td>
                                <td><button onClick={e => handleClick(e, item)}>Look At Item</button></td>
                            </tr>
                        </tbody>

                    </table>
                })}
            </main>

        </>
    );
}

export default ShopPage;

