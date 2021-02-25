/* exported configGrid*/
const configGrid = (tag, piece) => {
   const div = document.getElementById(tag);
   div.style.gridColumn = piece.gridColumn;
   div.style.gridRow = piece.gridRow;
};
