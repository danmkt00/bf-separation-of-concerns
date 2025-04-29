/**
 * renders a table from a 2D array of arrays
 * each entry in the nested arrays becomes the text in a cell
 * @param {Array[]} arrayOfArrays - a 2D array representing the game board
 * @returns {HTMLTableElement} the rendered game board
 */
const gameBoard = (arrayOfArrays) => {
  const tableEl = document.createElement('table');

  for(const row of arrayOfArrays){
    const trEl = document.createElement('tr');
    for(const cell of row){
      const tdEl = document.createElement('td');
      tdEl.innerText = cell;

      trEl.append(tdEl);
    }
    tableEl.append(trEl);
  }

  return tableEl;
};

export default gameBoard;
