/* exported  getPieces, getGrids, removingPieceFitted*/
const multiSlots = ['ram', 'rom'];
// const URLAPI = 'http://localhost:3000';
const URLAPI = 'https://api-draganddrop.herokuapp.com';


const getPieces = async (pieceType) => {
   const parts = await fethRequest(`${URLAPI}/v1/piece?type=${pieceType}`
      , 'GET');
   return removingPieceFitted(parts, pieceType);
};

const removingPieceFitted = (parts, type) => {
   const buildingPC = getBuildingPC();
   return parts.filter((element) => {
      let piece = element.type === type ? element : null;

      if (piece) {
         if (JSON.stringify(piece) === JSON.stringify(buildingPC[type])) {
            piece = null;
         }

         if (multiSlots.includes(type) && buildingPC[type]) {
            buildingPC[type].map((buildinPiece) => {
               delete buildinPiece.div;
               if (JSON.stringify(piece) === JSON.stringify(buildinPiece)) {
                  piece = null;
               }
            });
         }
      }

      return piece;
   });
};

const getGrids = async (id) => {
   return await fethRequest(`${URLAPI}/v1/gridMother/mother/${id}`, 'GET');
};

