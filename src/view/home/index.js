import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import liveAuctionData from '../../assets/fake-data/data-live-auction';
import LiveAuction from '../../components/layouts/LiveAuction';
import TopSeller from '../../components/layouts/TopSeller';
import topSellerData from '../../assets/fake-data/data-top-seller'

const Home01 = () => {

    return (
        <div className='home-1'>
            <Header />
            <LiveAuction data={liveAuctionData} />
            <TopSeller data={topSellerData} />
            <Footer />
        </div>
    );
}

export default Home01;
