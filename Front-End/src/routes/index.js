import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../components/NavBar'
import GuestLandingPage from '../components/LandingPage/GuestPage';
import AboutPage from '../components/About';
import { AuthContextProvider } from '../contexts/auth';
import { ToastContainer } from 'react-toastify';

const Navigation = () => {
    return (
        <Router>
            <AuthContextProvider>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={GuestLandingPage} />
                    <Route path="/about" exact component={AboutPage} />
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
        </Router>
    );
}

export default Navigation;