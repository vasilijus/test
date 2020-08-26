import test from 'ava';
const request = require('supertest');
const app = require('./../app.js');

test('check status', async t => {
    const response = await request(app)
        .get('/status');
    t.is(response.status, 200);
    t.deepEqual(response.body, {
        status : 'Ok'
    });
})

test('check greeting', async t => {
    const name = "Sergio";
    const food = "Paela";
    const response = await request(app)
        .get('/greet')
        .query({ name, food });
    t.is(response.status, 200);
    t.deepEqual( response.body , {
        message : `hello ${name} would you like a ${food}`
    });
})

test('Didn\'t send username', async t => {
    const password = 'PasswordHash';
    const response = await request(app)
        .post('/register')
        .send({ password });
    t.is(response.status, 400);
    t.deepEqual( response.body.message , 'username is missing');
})