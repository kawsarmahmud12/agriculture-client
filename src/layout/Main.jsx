import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../pages/shared/Header';
import Footer from '../pages/shared/Footer';
import Loading from '../pages/shared/Loading';

const Main = () => {
    const navigation = useNavigation();
    if(navigation.state === 'loading') {
        return (
             <Loading></Loading>
        )
    }
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;