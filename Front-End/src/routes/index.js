import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../components/NavBar'
import GuestLandingPage from '../components/LandingPage/GuestPage';
import AboutPage from '../components/About';
import { AuthContextProvider } from '../contexts/auth';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer';
import Login from '../components/Login';
import Register from '../components/Register';

const Navigation = () => {
    return (
        <Router>
            <AuthContextProvider>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={GuestLandingPage} />
                    <Route path="/about" exact component={AboutPage} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                </Switch>
                <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                />
            </AuthContextProvider>
            <Footer />
        </Router>
    );
}

export default Navigation;