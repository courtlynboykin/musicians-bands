const { db } = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const testBand = await Band.create({name: "Trojan Band", genre: "Rock"});
        expect(testBand.name).toBe('Trojan Band');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const testMusician = await Musician.create({name: "Drake", instrument: "Violin"});
        expect(testMusician.name).toBe('Drake');
    })

    test('can create a Song', async () => {
        const testSong = await Song.create({title: "One Dance", year: 2016, length: 5})
        expect(testSong.title).toBe("One Dance")
    })

    test('can update a Band', async () => {
        // TODO - test updating a band
        const testBand = await Band.create({name: "Trojan Band", genre: "Rock"});
        const updateBand = await testBand.update({name: "Drake"})
        
        

        expect(updateBand.name).toBe('Drake');
    })

    test('can update a Musician', async () => {
        // TODO - test updating a musician
        const testMusician = await Musician.create({name: "Drake", instrument: "Violin"});
        const updateMusician = await testMusician.update({instrument: "Drums"})
        expect(updateMusician.instrument).toBe("Drums");
    })

    test('can update a Song', async () => {
        const testSong = await Song.create({title: "One Dance", year: 2016, length: 5})
        const updateSong = await testSong.update({title: "Marvin's Room"})
        expect(updateSong.title).toBe("Marvin's Room")
    })
    

    test('can delete a Band', async () => {
        // TODO - test deleting a band
        const testBand = await Band.create({name: "Trojan Band", genre: "Rock"});
        const deleteBand = await testBand.destroy()
        expect(deleteBand.name).toBe('Trojan Band');
    })

    test('can delete a Musician', async () => {
        // TODO - test deleting a musician
        const testMusician = await Musician.create({name: "Drake", instrument: "Violin"});
        const deleteMusician = await testMusician.destroy()
        expect(deleteMusician.name).toBe("Drake")

    })

    test('can delete a Song', async () => {
        // TODO - test deleting a musician
        const testSong = await Song.create({title: "One Dance", year: 2016, length: 5});
        const deleteSong = await testSong.destroy()
        expect(deleteSong.title).toBe("One Dance")

    })
    
})