const models = require('../models');
const config = require('../config/config');
const utils = require('../utils');

module.exports = {
    get:{
        getAll: (req, res, next) => {
            models.User.find()
                .then((users) => res.send(users))
                .catch(next)
        }, 
        getOne: (req, res, next) => {

            const id = req.params.id;

            models.User.find(id)
                .then((user) => res.send(user))
                .catch(next)
        }, 
    },

    post: {
        register: (req, res, next) => {
            const { username, password } = req.body;
            models.User.create({ username, password, job: 'Software developer', email: 'gameWatchers@gameWatchers.com', address:"Kaisa Hood Varna",phone:"0895764487" })
                .then((createdUser) => res.send(createdUser))
                .catch(next)
        },

        login: (req, res, next) => {
            const { username, password } = req.body;
            models.User.findOne({ username })
                .then((user) => Promise.all([user, user.matchPassword(password)]))
                .then(([user, match]) => {
                    if (!match) {
                        res.status(401).send('Invalid password');
                        return;
                    }

                    const token = utils.jwt.createToken({ id: user._id });
                    res.cookie(config.authCookieName, token).send(user);
                })
                .catch(next);
        },

        logout: (req, res, next) => {
            const token = req.cookies[config.authCookieName];
            console.log('-'.repeat(60));
            console.log(token);
            console.log('-'.repeat(60));
            models.TokenBlacklist.create({ token })
                .then(() => {
                    res.clearCookie(config.authCookieName).send('Logout successful!');
                })
                .catch(next);
        }
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { job, email, address, phone } = req.body;
        models.User.update({ _id: id }, { job, email, address, phone })
            .then((updatedUser) => res.send(updatedUser))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.User.deleteOne({ _id: id })
            .then((removedUser) => res.send(removedUser))
            .catch(next)
    }
};