import React, { useContext, Fragment } from 'react'
import { Link } from 'react-router-dom';
import './styles.css'
import AuthContext from '../../contexts/auth';

function Navigation() {
    const [user] = useContext(AuthContext);

    return (
        <ul>
            {user.loggedIn ?
                <Fragment>
                    <li>
                        <Link to="/"><strong>GameWatchers</strong></Link>
                    </li>
                    <li>
                        <Link to="/createPost">
                            <i className="fas fa-marker"></i> Create Post
                         </Link>
                    </li>
                    <li>
                        <Link to="/latest">
                            <i className="fas fa-clock"></i> Latest Posts
                        </Link>
                    </li>
                    <li>
                        <Link to="/myPosts">
                            <i className="fab fa-medium-m"></i> My Posts
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile">
                            <i className="fas fa-user-circle"></i> Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/logout">
                            <i className="fas fa-sign-out-alt"></i> Logout
                        </Link>
                    </li>
                </Fragment>
                :
                <Fragment>
                    <li>
                    <Link to="/"><strong>GameWatchers</strong></Link>
                     </li>
                    <li>
                        <Link to="/login">
                            <i className="fas fa-door-open"></i> Login
                        </Link>
                    </li>
                    <li>
                        <Link to="/register">
                            <i className="fas fa-user-plus"></i> Register
                        </Link>
                    </li>
                </Fragment>}
            <li>
                <Link to="/about">
                    <i className="fas fa-info-circle"></i> About
                </Link>
            </li>
        </ul>
    );
}

export default Navigation;