import { classyHeader } from './classy-header.js';

describe('classyHeader: renders DOM headers of different levels and classes', () => {
    describe('an H3 with text: "hello", and no classes', () => {
        const actual = classyHeader(3, 'hello');
        it('has tagName "H3"', () => {
            expect(actual.tagName).toBe('H3');
        });
        it('has innerHTML: "hello"', () => {
            expect(actual.innerHTML).toBe('hello');
        });
        it('has classList length 0', () => {
            expect(actual.classList.length).toBe(0);
        });
        it('has className: ""', () => {
            expect(actual.className).toBe('');
        });
        it('has childElementCount: 0', () => {
            expect(actual.childElementCount).toBe(0);
        });
    });

    describe('an H1 with text: "good bye", and two classes', () => {
        const actual = classyHeader(1, 'good bye', ['fancy', 'hover-right']);
        it('has tagName "H1"', () => {
            expect(actual.tagName).toBe('H1');
        });
        it('has innerHTML: "good bye"', () => {
            expect(actual.innerHTML).toBe('good bye');
        });
        it('has classList length 2', () => {
            expect(actual.classList.length).toBe(2);
        });
        it('have class: "fancy"', () => {
            expect(actual.classList.contains('fancy')).toBe(true);
        });
        it('have class: "hover-right"', () => {
            expect(actual.classList.contains('hover-right')).toBe(true);
        });
        it('has childElementCount: 0', () => {
            expect(actual.childElementCount).toBe(0);
        });
    });

    describe('does not allow invalid header levels', () => {
        it('throws an error if level is less than 1', () => {
            const shouldThrow = () => classyHeader(0, 'oops!');
            expect(shouldThrow).toThrowError(RangeError);
        });
        it('throws an error if level is greater than 6', () => {
            const shouldThrow = () => classyHeader(7, 'oops!');
            expect(shouldThrow).toThrowError(RangeError);
        });
    });
});
