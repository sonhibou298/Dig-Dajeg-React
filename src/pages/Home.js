import React from 'react';
import Header from "../components/Header";
import Menu from "../components/Menu";
import BaniereImage from "../components/BaniereImage";
import A_Propos from "../components/A_Propos";


const Home = () => {

    return (
        <div>
            <Header/>
            <Menu/>
            <BaniereImage/>
            <A_Propos/>
        </div>
    )
}
export default Home;