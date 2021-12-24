import checkIsSameTree from '../src/day24';

describe('Day 24 challenge', () => {
    const tree = {
        value: 1,
        left: { value: 2, left: null, right: null },
        right: { value: 3, left: null, right: null }
    };

    const tree2 = {
        value: 1,
        left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
        right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
    };

    test('tree one ', () => {
        expect(checkIsSameTree(tree, tree)).toBe(true);
    });

    test('tree two ', () => {
        expect(checkIsSameTree(tree, tree2)).toBe(false);
    });

    test('tree three ', () => {
        expect(checkIsSameTree(tree2, tree2)).toBe(true);
    });

});