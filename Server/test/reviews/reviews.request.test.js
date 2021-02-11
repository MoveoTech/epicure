const mongoose = require('mongoose');
const app = require('../../index');
const request = require('supertest');
const { expect } = require('chai');

describe('Reviews Test', () => {
    afterAll(() => {
        mongoose.connection.close();
    })

    it('should get forbiden access with no query', async () => {
        await request(app).get('/reviews').expect(403)
    })

    it('should get reviews for restaurant', async () => {
        const reviews = await request(app).get('/reviews?restaurant=60070d5c1ed4438eb68346fb');
        expect(reviews.body.length).greaterThan(1);
    })

    it('should block STATUS 401 from adding review with no TOKEN', async () => {
        await request(app).post('/reviews/add').expect(401);
    })
})