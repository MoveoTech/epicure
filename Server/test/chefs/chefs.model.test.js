const mongoose = require('mongoose');
const mongodb = "mongodb://localhost/epicure_test";
mongoose.connect(mongodb,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
const Chef = require('../../models/chef');

describe('Chef Model Test', () => {
    beforeAll(async () => {
        await Chef.deleteMany({});
    });

    afterEach(async () => {
        await Chef.deleteMany({});
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    //  Checking Creation

    it('has a module', () => {
        expect(Chef).toBeDefined()
    });

    // ----- Testing Get chefs method ------

    it('should get chefs', async () => {
        const chef = new Chef({ name: 'Ron', img_src: 'wow.png', description: 'so much wow' });
        await chef.save();

        const foundChef = await Chef.findOne({ name: 'Ron' })
        const expected = 'Ron';
        const actual = foundChef.name;
        expect(actual).toEqual(expected)

    });

    it('should saves chef', async () => {
        const chef = new Chef({ name: 'Ron', img_src: 'wow.png', description: 'so much wow' });
        const savedChef = await chef.save();
        const expected = 'Ron';
        const actual = savedChef.name
        expect(actual).toEqual(expected)
    });

    it('should update chef name', async () => {
        const chef = new Chef({ name: 'Ron', img_src: 'wow.png', description: 'so much wow' });
        await chef.save();
        await Chef.findOneAndUpdate({ name: 'Ron' }, { name: 'Kenneth' })
        const updatedChef = await Chef.findOne({ name: "Kenneth" })
        const expected = 'Kenneth';
        const actual = updatedChef.name;
        expect(expected).toEqual(actual);
    })

});



