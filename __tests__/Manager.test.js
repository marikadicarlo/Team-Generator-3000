const { expect } = require('@jest/globals');
const { describe } = require('yargs');
const Manager = require('../lib/Manager');

describe('Manager Class', () => {
    describe('Initialization', () => {
        it('Should create an object with an id and name', () => {
            const manager = new Manager(123, 'Michael')

            expect(manager.id).toEqual(123);
            expect(manager.name).toEqual('Michael');
        });
    });
});