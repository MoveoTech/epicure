const mongoose = require('mongoose');
const mongodb = "mongodb://localhost/epicure_test";
mongoose.connect(mongodb,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
const Restaurant = require('../../models/restaurant');

describe('Restaurant Model Test', () => {
    beforeAll(async () => {
        await Restaurant.deleteMany({});
    });

    afterEach(async () => {
        await Restaurant.deleteMany({});
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    //  Checking Creation

    it('has a module', () => {
        expect(Restaurant).toBeDefined()
    });

    // ----- Testing Get chefs method ------

    it('should get restaurants', async () => {
        const chef = new Restaurant({ name: 'Cafeo', img_src: 'wow.png', description: 'so much wow', popularity: 8, chef: '6007ffd31ed4438eb6834709' });
        await chef.save();

        const foundRestaurant = await Restaurant.findOne({ name: 'Cafeo' })
        const expected = 'Cafeo';
        const actual = foundRestaurant.name;
        expect(actual).toEqual(expected)

    });

    it('should saves restaurant', async () => {
        const chef = new Restaurant({ name: 'Cafeo', img_src: 'wow.png', description: 'so much wow', popularity: 8, chef: '6007ffd31ed4438eb6834709' });
        const savedChef = await chef.save();
        const expected = 'Cafeo';
        const actual = savedChef.name
        expect(actual).toEqual(expected)
    });

    it('should update restaurant name', async () => {
        const chef = new Restaurant({ name: 'Cafeo', img_src: 'wow.png', description: 'so much wow', popularity: 8, chef: '6007ffd31ed4438eb6834709' });
        await chef.save();
        await Restaurant.findOneAndUpdate({ name: 'Cafeo' }, { name: 'Kenneth' })
        const updatedRestaurant = await Restaurant.findOne({ name: "Kenneth" })
        const expected = 'Kenneth';
        const actual = updatedRestaurant.name;
        expect(expected).toEqual(actual);
    })

});



