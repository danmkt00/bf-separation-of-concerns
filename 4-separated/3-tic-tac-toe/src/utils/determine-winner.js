/** Check the winner of the tic tac toe game
 * @param {Array} - The current game board.
 * @return {string|null} - The winner ("X" or "O"), tie, or null if no winner.
 */

export const determineWinner = (board = []) => {
  debugger;
  //horizontal win
  if(board[0] === board[1] && board[1] === board[2] && board[0]) {
    return `${board[0]} won!`
  }else if(board[3] === board[4] && board[4] === board[5] && board[3]){
    return `${board[3]} won!`
  }else if(board[6] === board[7] && board[7] === board[8] && board[6]){
    return `${board[6]} won!`
  }

  //vertical win
  if(board[0] === board[3] && board[3] === board[6] && board[0]) {
    return `${board[0]} won!`
  }else if(board[1] === board[4] && board[4] === board[7] && board[1]){
    return `${board[1]} won!`
  }else if(board[2] === board[5] && board[5] === board[8] && board[2]){
    return `${board[2]} won!`
  }

  //diagonal win
  if(board[0] === board[4] && board[4] === board[8] && board[0]) {
    return `${board[0]} won!`
  }else if(board[2] === board[4] && board[4] === board[6] && board[2]){
    return `${board[2]} won!`
  }

  if(board.every(num => num !== null)){
    return 'tie!'
  }

  return null; //if there is no winner
  
};
