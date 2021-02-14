const mongoose = require('mongoose');
const app = require('../../index');
const request = require('supertest');
const { expect } = require('chai');

describe('Restaurants Test', () => {
    afterAll(() => {
        mongoose.connection.close();
    })

    it('should get restaurants list', async () => {
        let restaurants = await request(app).get('/restaurants').expect(200)
        expect(restaurants.body.count).to.be.greaterThan(1)
    })
})