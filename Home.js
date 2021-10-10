import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>            
                <div className="home__row">
                    <Product id="12321341" title="(Renewed) HONOR Band 5 (Meteorite Black)" image="https://m.media-amazon.com/images/I/51SfEXp3hzL._SL1000_.jpg" price={19.99} rating={5}/>
                    <Product 
                        id="32123451"
                        title="ASUS AIO M241, 23.8inch (60.45 cms) FHD, Dual Core AMD Ryzen 3 3250U, All-in-One Desktop (4GB/1TB HDD/Office 2019/Windows 10/Integrated Graphics/Wireless Keyboard and Mouse/Black/5.4 Kg), M241DAK-BA021TS"
                        price={1999.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81f7Jp81leL._SL1500_.jpg"/>
                </div>

                <div className="home__row">
                    <Product
                        id="43215321"
                        title="OPPO A16 (Pearl Blue, 4GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers"
                        image="https://m.media-amazon.com/images/I/61RQyzwnsBL._SL1500_.jpg"
                        price={129.99}
                        rating={4}/>
                    <Product
                        id="44211465"
                        title="Juârez Acoustic Guitar, 38 Inch Cutaway, 038C with Bag, Strings, Pick and Strap, Black"
                        image="https://m.media-amazon.com/images/I/71y1TJbygLL._SL1500_.jpg"
                        price={30}
                        rating={3}/>
                    <Product
                        id="76893452"
                        title="(Renewed) Infinity Glide 4000 Wireless Bluetooth Over the Ear Headphone with Mic (Black)"
                        image="https://m.media-amazon.com/images/I/517ZeRkAtqL._SL1000_.jpg"
                        price={50}
                        rating={4}/>
                </div>

                <div className="home__row">
                <Product
                        id="69463829"
                        title="Sony HT-RT3 600 Watt Real 5.1 Channel Wireless Bluetooth Soundbar with Dolby (Black)"
                        image="https://m.media-amazon.com/images/I/31yuXsHq+OL.jpg"
                        price={179.9}
                        rating={5}/>
                </div>
            </div>
        </div>
    )
}

export default Home
