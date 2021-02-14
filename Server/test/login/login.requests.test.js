const mongoose = require('mongoose');
const app = require('../../index');
const request = require('supertest');
const { expect } = require('chai');

describe('Login Test', () => {
    afterAll(() => {
        mongoose.connection.close();
    })

    it('should register new user', async () => {
        const userData = {
            fname: 'Ron', lname: "Moveo", username: "rong", password: '1234'
        }
        const user = await request(app).post('/user/register').send(userData).expect(200)


    })
})