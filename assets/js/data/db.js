/* eslint-disable max-len */
import {request} from '../helper/utils.js';
import {getPCBuilding} from '../data/localStorage.js';

const multiplesParts = ['ram', 'rom'];
const API = 'https://sm-computadores.onrender.com';
// const API = 'http://localhost:3000';
export function removingPieceFitted(parts, partType) {
   const pcBuilding = getPCBuilding();
   const ramListed = {};

   return parts.filter((element) => {
      let part = element.type === partType ? element : null;

      if (part) {
         if (JSON.stringify(part) === JSON.stringify(pcBuilding[partType])) {
            part = null;
         }

         if (multiplesParts.includes(partType) && pcBuilding[partType]) {
            console.log(ramListed[part.memoryFrequency]);
            if (partType === 'ram' && ramListed[part.memoryFrequency]) {
               if (ramListed[part.memoryFrequency].has(part.memorySize)) {
                  part = null;
               } else {
                  pcBuilding[partType].map((buildingPart) => {
                     delete buildingPart.div;
                     if (JSON.stringify(part) === JSON.stringify(buildingPart)) {
                        part = null;
                     }
                  });
               }
            } else {
               pcBuilding[partType].map((buildingPart) => {
                  delete buildingPart.div;
                  if (JSON.stringify(part) === JSON.stringify(buildingPart)) {
                     part = null;
                  }
               });
            }
         }
         if (partType === 'ram' && part) {
            if (!ramListed[part.memoryFrequency]) {
               ramListed[part.memoryFrequency] = new Set();
            }
            ramListed[part.memoryFrequency].add(part.memorySize);
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

export async function getFieldsFilter(partType) {
   const fields = await request(
      `${API}/v1/piece/getFieldsFilter?typePart=${partType}`
      , 'GET');
   return fields;
}
