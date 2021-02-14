const mongoose = require('mongoose');
const app = require('../../index');
const request = require('supertest');
const { expect } = require('chai');

describe('Dish Test', () => {
    afterAll(() => {
        mongoose.connection.close();
    })

    it('should get signature dishes', async () => {
        const dishes = await request(app).get('/dishes/signature').expect(200);
        expect(dishes.body.length).greaterThan(1)
    })
})