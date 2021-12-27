import canMouseEat from "../src/day25";
'../src/day25';

describe('Day 24 challenge', () => {
    const room = [
        [' ', ' ', ' '],
        [' ', ' ', 'm'],
        [' ', ' ', '*']
    ];

    const room2 = [
        ['*', ' ', ' ', ' '],
        [' ', 'm', '*', ' '],
        [' ', ' ', ' ', ' '],
        [' ', ' ', ' ', '*']
    ];

    test('room up one ', () => {
        expect(canMouseEat('up', room)).toBe(false);
    });

    test('room down two ', () => {
        expect(canMouseEat('down', room)).toBe(true);
    });

    test('room right three ', () => {
        expect(canMouseEat('right', room)).toBe(false);
    });

    test('room left three ', () => {
        expect(canMouseEat('left', room)).toBe(false);
    });

    test('room2 up one ', () => {
        expect(canMouseEat('up', room2)).toBe(false);
    });

    test('room2 down two ', () => {
        expect(canMouseEat('down', room2)).toBe(false);
    });

    test('room2 right three ', () => {
        expect(canMouseEat('right', room2)).toBe(true);
    });

    test('room2 left three ', () => {
        expect(canMouseEat('left', room2)).toBe(false);
    });

});