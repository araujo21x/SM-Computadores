/* exported getPieces*/
const pieces = [
   {
      name: 'motherBoard 1',
      type: 'motherBoard',
   },
   {
      name: 'motherBoard 2',
      type: 'motherBoard',
   },
   {
      name: 'Cpu 1',
      type: 'cpu',
   },
   {
      name: 'Cpu 2',
      type: 'cpu',
   },
   {
      name: 'Cpu 3',
      type: 'cpu',
   },
];

const getPieces = (type) =>{
   return pieces.filter((element) => element.type === type);
};
