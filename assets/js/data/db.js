/* exported getPieces*/
const pieces = [
   {
      id: 1,
      name: 'motherBoard 1',
      type: 'motherBoard',
   },
   {
      id: 2,
      name: 'motherBoard 2',
      type: 'motherBoard',
   },
   {
      id: 1,
      name: 'Cpu 1',
      type: 'cpu',
   },
   {
      id: 2,
      name: 'Cpu 2',
      type: 'cpu',
   },
   {
      id: 3,
      name: 'Cpu 3',
      type: 'cpu',
   },
];

const getPieces = (type) =>{
   return pieces.filter((element) => element.type === type);
};
