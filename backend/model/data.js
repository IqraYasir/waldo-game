const Character = require('./character');
const User = require('./user');

const x = process.env.POINT_X;
const y = process.env.POINT_Y;

async function characterCreate(name, coordinates) {
    const characterDetail = { name: name, coordinates: coordinates };
    if (!coordinates.x && !coordinates.y) characterDetail.coordinates = coordinates;

    const character = new Character(characterDetail);
    await character.save();
    console.log('Character added');
}

async function userCreate(username, time) {
    const userDetail = { username: username, time: time};

    const user = new User(userDetail);
    await user.save();
    console.log('User added');
}

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const mongoDB = process.env.DB_STRING;
mongoose.connect(mongoDB);

characterCreate('waldo', [
    {x: x[0]['x1'], y: y[0]['y1']},
    {x: x[0]['x2'], y: y[0]['y2']}
]);

characterCreate('odlaw', [
    {x: x[1]['x1'], y: y[1]['y1']},
    {x: x[1]['x2'], y: y[1]['y2']}
]);

characterCreate('whitebeard', [
    {x: x[2]['x1'], y: y[2]['y1']},
    {x: x[2]['x2'], y: y[2]['y2']}
]);

characterCreate('wilma', [
    {x: x[3]['x1'], y: y[3]['y1']},
    {x: x[3]['x2'], y: y[3]['y2']}
]);

userCreate('test1', Date.now());
userCreate('test2', Date.now());
userCreate('test3', Date.now());

mongoose.connection.close();
