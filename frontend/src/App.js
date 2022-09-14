import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import BackToTop from './components/backToTop/BackToTop';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomeScreen from './screens/homeScreen/homeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import OrderListScreen from './screens/OrderListScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';

import PlaceOrderWalletScreen from './screens/PlaceOrderWalletScreen';


const App = () => {
    return (
        <Router>
            <Header />
            <main className='py-3'>
                <Container>
                    <Route path='/orders/:id' component={OrderScreen} />
                    <Route path='/shipping' component={ShippingScreen} />
                    <Route path='/payment' component={PaymentScreen} />
                    <Route path='/placeorder' component={PlaceOrderScreen} />

                    <Route path='/placeorder-wallet' component={PlaceOrderWalletScreen} />

                    <Route path='/login' component={LoginScreen} />
                    <Route path='/register' component={RegisterScreen} />
                    <Route path='/profile' component={ProfileScreen} />
                    <Route path='/products/:id' component={ProductScreen} />
                    <Route path='/cart/:id?' component={CartScreen} />
                    <Route path='/admin/userlist' component={UserListScreen} />
                    <Route
                        path='/admin/products/:id/edit'
                        component={ProductEditScreen}
                    />
                    <Route
                        path='/admin/productlist'
                        component={ProductListScreen}
                    />
                    <Route
                        path='/admin/orderlist'
                        component={OrderListScreen}
                    />
                    <Route path='/' component={HomeScreen} exact />
                </Container>
            </main>
            <BackToTop />
            <Footer />
        </Router>
    );
};

export default App;
