const mongoose = require('mongoose');
const app = require('../../index');
const request = require('supertest');
const { User } = require('../../models/user');
// const mongodb = "mongodb://localhost/epicure_test";
// mongoose.connect(mongodb,
//     { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })

describe('Chefs Test', () => {
    it('has a module', () => {
        expect(app).toBeDefined()
    })

    beforeAll(() => {
    })

    afterAll(done => {
        mongoose.connection.close();
    })

    it('should get chef list', async () => {
        await request(app).get('/chefs').expect(200)
    })
    it('should get weekly chef', async () => {
        await request(app).get('/chefs/weekly').expect(200)
    })
    it('should regiester', async () => {
        let expectedUsername;
        let expectedFname;
        let expectedLname;
        const user = {
            fname: 'ron',
            lname: 'gab',
            username: 'testddtt',
            password: '4314231'
        }
        await request(app).post('/user/register').send(user)
            .expect(res => {
                expectedUsername = res.body.user.username;
                expectedFname = res.body.user.fname
                expectedLname = res.body.user.lname;
            })
        expect(user.username).toEqual(expectedUsername);
        expect(user.fname).toEqual(expectedFname);
        expect(user.lname).toEqual(expectedLname);

        await User.deleteOne({ username: user.username }) // cleaining the db
    })
})

