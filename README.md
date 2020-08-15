#
# GameWatchers-App

### GameWatchers is a Web Application, created using React framework for the user interface, a local server built using Node.js and MongoDB for the back-end. It is made as a project for the React Framework course exam in SoftUni.
##### Front-End: React
###### Libraries used:
* ######  "axios": "^0.19.0",
* ######    "bootstrap": "^4.3.1",
* ######   "cloudinary-react": "^1.6.6",
* ###### "lodash": "^4.17.19",
* ######    "prop-types": "^15.7.2",
* ######    "react": "^16.12.0",
* ######    "react-bootstrap": "^1.3.0",
* ######    "react-dom": "^16.12.0",
* ######    "react-image-appear": "^1.3.24",
* ######    "react-images-upload": "^1.2.8",
* ######   "react-live-clock": "^4.0.5",
* ######    "react-router-dom": "^5.1.2",
* ######    "react-scripts": "^3.4.3",
* ######   "react-toastify": "^5.4.1"

 ##### Back-End: NodeJs-RestAPI
###### Libraries used:
* ######  bcrypt": "^3.0.6",
* ######            "body-parser": "^1.19.0",
* ######   "cookie-parser": "^1.4.4",
* ######  "cors": "^2.8.5",
* ######    "express": "^4.17.1",
* ######    "jsonwebtoken": "^8.5.1",
* ######    "mongoose": "^5.7.8",
* ######    "mongo": "^0.1.0",
* ######    "mongodb": "^3.5.3",
* ######    "passport": "0.3.2",
* ######   "passport-local": "1.0.0",
* ######    "validator": "7.2.0"
# Summary

The Application  is similar to a blog/post website where the users can make posts, read and delete articles. Much like &quot; CrackWatch.com &quot; and &quot;GamesForum.com&quot; it displays user posts and allows the other part of the comunity to interact with each other. There are two types of roles are implemented in this project: Guest and user. Depending on the role you can have access to different parts and functionalities. Users: can create posts and view all available posts including their own in details.


# Build

# 2 main parts:

- public
- private

1. **Public part** - which is accessible to everyone, without authentication. Every visitor can:

- Home page background with world clock for Sofia/Bulgaria;
- View the Home page (by clicking the brand logo "GameWatchers");
- About  button ( leading to about information page);
- Sign In button ( leading to signin form);
- Sign Up button ( leading to signup form);

2. **Private part** - only for logged in users. After successful registration using the given(by the user) credentials, he can use the full functionality of the application:

- View the Home page (by clicking the brand logo "GameWatchers");
- About  button ( leading to about information page);
- View Latest posts (by clicking Latest Posts button), see latest posts from users;
- View My posts (by clicking My Posts button), see your posts;
- Create post (by clicking Create Post button) - leads to a creation form for an new topic;
- View Full post information about each post (by clicking its Full Post button);
-  Logout button (by clicking Logout button) user is LogedOut;



**Additionally**  the app offers Sign In page, Sign Up page, Logout option, About page, Home page, Create post, Delete post, Latest Posts, Full Post.
