import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homeLayouts/LeftAside';
import RightAside from '../components/homeLayouts/RightAside';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div>
            <header className='mt-5'>
                <Header></Header>
                <section className='w-4/5 mx-auto bg-base-200 mt-5 p-3'>
                    <LatestNews></LatestNews>
                </section>
                <section className='w-4/5 mx-auto mt-5 p-3'>
                    <Navbar></Navbar>
                </section>
            </header>
            <main className='w-4/5 mx-auto mt-5 grid grid-cols-12 gap-5'>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;