import {request} from '../helper/utils.js';
import {getPCBuilding} from '../data/localStorage.js';

const multiplesParts = ['ram', 'rom'];
const API = 'https://api-draganddrop.herokuapp.com';
// const API = 'http://localhost:3000';
export function removingPieceFitted(parts, partType) {
   const pcBuilding = getPCBuilding();
   const ramListed = new Set();

   return parts.filter((element) => {
      let part = element.type === partType ? element : null;

      if (part) {
         if (JSON.stringify(part) === JSON.stringify(pcBuilding[partType])) {
            part = null;
         }

         if (multiplesParts.includes(partType) && pcBuilding[partType]) {
            if (partType === 'ram' && ramListed.has(part.memoryFrequency)) {
               part = null;
            } else {
               pcBuilding[partType].map((buildingPart) => {
                  delete buildingPart.div;
                  if (JSON.stringify(part) === JSON.stringify(buildingPart)) {
                     part = null;
                  }
               });
            }
         }
         if (partType === 'ram' && part) ramListed.add(part.memoryFrequency);
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

export async function getFieldsFilter(partType) {
   const fields = await request(
      `${API}/v1/piece/getFieldsFilter?typePart=${partType}`
      , 'GET');
   return fields;
}
