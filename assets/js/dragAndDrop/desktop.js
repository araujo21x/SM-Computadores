/* exported  drag, drop, allowDrop*/
const drag = (event, piece) => {
   event.dataTransfer.setData('text', event.target.id);
   event.dataTransfer.setData('piece', JSON.stringify(piece));
};

const allowDrop = (event) => {
   event.preventDefault();
};

const drop = (event) => {
   event.preventDefault();
   const data = event.dataTransfer.getData('text');
   const piece = JSON.parse(event.dataTransfer.getData('piece'));
   console.log(data);

   if (event.targe.id === piece.type) {
      console.log(checkCompatibility(piece));
   } else {

   }
};
