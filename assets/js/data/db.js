import {request} from '../helper/utils.js';
import {getPCBuilding} from '../data/localStorage.js';

const multiplesParts = ['ram', 'rom'];
const API = 'https://api-draganddrop.herokuapp.com';

function removingPieceFitted(parts, partType) {
   const pcBuilding = getPCBuilding();

   return parts.filter((element) => {
      let part = element.type === partType ? element : null;

      if (part) {
         if (JSON.stringify(part) === JSON.stringify(pcBuilding[partType])) {
            part = null;
         }

         if (multiplesParts.includes(partType) && pcBuilding[partType]) {
            pcBuilding[partType].map((buildingPart) => {
               delete buildingPart.div;
               if (JSON.stringify(part) === JSON.stringify(buildingPart)) {
                  part = null;
               }
            });
         }
      }

      return part;
   });
}

export async function getParts(partType) {
   const parts = await request(`${API}/v1/piece?type=${partType}`
      , 'GET');
   return removingPieceFitted(parts, partType);
}

export async function getGrids(id) {
   return await request(`${API}/v1/gridMother/mother/${id}`, 'GET');
}
