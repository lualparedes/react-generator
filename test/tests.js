const assert = require('chai').assert;
const convertToUpperCamelCase = require('../utils/utils').convertToUpperCamelCase;

describe('Functions', () => {
    it('Converts string without dashes to UpperCamelCase', () => {
        assert(
            convertToUpperCamelCase('component') === 'Component',
            'Fails without dashes'
        );
    });
    it('Converts string with dashes to UpperCamelCase', () => {
        assert(
            convertToUpperCamelCase('my-component') === 'MyComponent',
            'Fails with dashes'
        );
    });
});