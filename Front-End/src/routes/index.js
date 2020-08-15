import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../components/NavBar'
import GuestLandingPage from '../components/LandingPage/GuestPage';
import AboutPage from '../components/About';
import { AuthContextProvider } from '../contexts/auth';
import { ToastContainer } from 'react-toastify';
import Profile from '../components/ProfilePage'
import Footer from '../components/Footer';
import Login from '../components/Login';
import Logout from '../components/Logout'
import Register from '../components/Register';
import editProfile from '../components/ProfilePage/editProfile';
import CreatePost from '../components/Posts/CreatePost';
import MyPosts from '../components/Posts/myPosts';
import FullPost from '../components/Posts/FullPost';
import LatestPosts from '../components/Posts/LatestPosts';

const Navigation = () => {
    return (
        <Router>
            <AuthContextProvider>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={GuestLandingPage} />
                    <Route path="/about" exact component={AboutPage} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/logout" exact component={Logout} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/profile" exact component={Profile} />
                    <Route path="/editProfile" exact component={editProfile} />
                    <Route path="/createPost" exact component={CreatePost} />
                    <Route path="/myPosts" exact component={MyPosts} />
                    <Route path="/post/:id" component={FullPost} />
                    <Route path="/latest" exact component={LatestPosts} />
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