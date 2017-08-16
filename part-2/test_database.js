const expect = require('chai').expect;
const pgp = require('pgp');
const {
    guests,
    rooms,
    bookings
} = require('./database/database.js');

describe('hotel database testing', () => {
    describe('guests()', () => {
        it('expected return a list of guests', () => {
            return guests()
                .then(data => {
                    expect(data[0]).to.eql([1, 'Aurthur Velti', 'avelti0@live.com'])
                    expect(data[13]).to.eql([14, 'Averil Sawkin', 'asawkind@comsenz.com'])
                    let result = data.map(data => {
                        return [data]
                    })
                })

        })
    })
    describe('rooms()', () => {
        it('expect to return all rooms and info', () => {
            return rooms()
                .then(data => {
                    expect(data[0].length).to.equal(3);
                })
        })
        it("expect to return all available rooms", () => {
            return rooms(--available)
                .then(data => {
                    data.forEach(data => {
                        expect(data[2]).to.equal(true)
                    })
                })
        })
    })
    describe('bookings()'), () => {
        it('expect to return all bookings', () => {
            return bookings()
                .then(data => {

                })
        })
        it('expect to return all bookings for a specific room', () => {
            return bookings()
                .then(data => {
                    console.log()
                })
        })
    }
})