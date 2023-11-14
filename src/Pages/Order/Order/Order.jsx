import { Helmet } from 'react-helmet-async';
import orderCover from '../../../assets/shop/order.jpg';
import Cover from '../../Shared/Cover';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from '../../../Hooks/useMenu';
import OrderTabs from '../OrderTabs';
import { useParams } from 'react-router-dom';


const Order = () => {
    const categories = ['salads', 'pizza', 'soups', 'desserts', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover img={orderCover} coverHeading={'ORDER FOOD'} coverDescription={'Would you like to try a dish?'}></Cover>

            <div className='py-5 font-semibold'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <div className='flex justify-center py-12'>
                        <TabList>
                            <Tab>SALAD</Tab>
                            <Tab>PIZZA</Tab>
                            <Tab>SOUPS</Tab>
                            <Tab>DESSERTS</Tab>
                            <Tab>DRINKS</Tab>
                        </TabList>
                    </div>


                    <TabPanel>
                        <OrderTabs items={salad}></OrderTabs>
                    </TabPanel>
                    <TabPanel>
                        <OrderTabs items={pizza}></OrderTabs>
                    </TabPanel>
                    <TabPanel>
                        <OrderTabs items={soup}></OrderTabs>
                    </TabPanel>
                    <TabPanel>
                        <OrderTabs items={desserts}></OrderTabs>
                    </TabPanel>
                    <TabPanel>
                        <OrderTabs items={drinks}></OrderTabs>
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    );
};

export default Order;