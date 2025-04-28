import { determineWinner } from './determine-winner.js';

describe('determineWinner', () => {

    it('should declare X as the winner (horizontal top row)', () => {
      const board = ['X', 'X', 'X', null, null, null, null, null, null];
      expect(determineWinner(board)).toBe('X won!');
    });
  
    it('should declare O as the winner (vertical middle column)', () => {
      const board = [null, 'O', null, null, 'O', null, null, 'O', null];
      expect(determineWinner(board)).toBe('O won!');
    });
  
    it('should declare X as the winner (diagonal from top-left to bottom-right)', () => {
      const board = ['X', null, null, null, 'X', null, null, null, 'X'];
      expect(determineWinner(board)).toBe('X won!');
    });
  
    it('should declare O as the winner (diagonal from top-right to bottom-left)', () => {
      const board = [null, null, 'O', null, 'O', null, 'O', null, null];
      expect(determineWinner(board)).toBe('O won!');
    });
  
    it('should declare a tie if all cells are filled with no winner', () => {
      const board = ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'];
      expect(determineWinner(board)).toBe('tie!');
    });
  
    it('should return null if no winner and board is not full', () => {
      const board = ['X', null, 'O', null, 'X', null, null, null, null];
      expect(determineWinner(board)).toBeNull();
    });
});
