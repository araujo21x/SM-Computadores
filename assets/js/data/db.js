/* exported  getPieces, getGrids*/
const multiSlots = ['ram', 'rom'];
const URLAPI = 'http://localhost:3000';

const getPieces = async (type) => {
   const buildingPC = getBuildingPC();
   const pieces = await fethRequest(`${URLAPI}/v1/piece?type=${type}`, 'GET');
   return pieces.filter((element) => {
      let piece = element.type === type ? element : null;

      if (piece) {
         if (JSON.stringify(piece) === JSON.stringify(buildingPC[type])) {
            piece = null;
         }

         if (multiSlots.includes(type) && buildingPC[type]) {
            buildingPC[type].map((buildinPiece) =>{
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

const getGrids = async (id) =>{
   return await fethRequest(`${URLAPI}/v1/gridMother/mother/${id}`, 'GET');
};

