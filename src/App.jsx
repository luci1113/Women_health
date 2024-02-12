import React from 'react';
import { BrowserRouter as Router, Route ,Routes } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Facts from './views/Facts';
import Options from './views/Options';
import Tracker from './views/Tracker';
import About from './views/About';
import Privacy from './views/Privacy';


import './App.css';


const viewList = [
    {
        id: 'period-facts',
        title: 'Period Facts',
        path: '/',
        element: <Facts />,
        sections: [
            {
                id: 'menstruation',
                title: 'Menstruation',
                path: '/',
            },
            {
                id: 'menstrual-cycle',
                title: 'Menstrual Cycle',
            },
            {
                id: 'faq-for-teens',
                title: 'FAQ for Teens',
            },
        ],
    },
    {
        id: 'product-options',
        title: 'Product Options',
        path: '/product-options',
        element: <Options />,
        sections: [
            {
                id: 'sanitary-pads',
                title:'Sanitary Pads',
                path:'/product-options',
            },
            {
                id: 'tampons',
                title: 'Tampons',
                path: '/product-options',
            },
            {
                id: 'menstrual-cups',
                title: 'Menstrual Cups',
            },
        ],
    },
    {
        id: 'tracker',
        title: 'Tracker',
        path: '/tracker',
        element: <Tracker />,
        sections: [],
    },
    {
        id: 'about',
        title: 'About',
        path: '/about',
        element: <About />,
        sections: [
            {
                id: 'our-mission',
                title: 'Our Mission',
            },
            {
                id: 'pain-point',
                title: 'Pain Point',
            },
            {
                id: 'contact-us',
                title: 'Contact Us',
            },
        ],
    },
    {
        id: 'privacy',
        title: 'Privacy',
        path: '/privacy',
        element: <Privacy />,
        sections: [],
    },
    
];


function App() { 
    return (
        <div className="App">
            <Router>
                <Header menu={viewList.slice(0,4)} />  
                <Routes>
                    { viewList.map((view) => {
                        return (
                            <Route key={view.id} exact path={view.path} element={view.element} />
                        )
                    })}
                </Routes> 
                <Footer links={[viewList[3], viewList[4]]} />              
            </Router>          
        </div>
    );
}

export default App;
