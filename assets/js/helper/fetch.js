/* exported  fethRequest*/
const fethRequest = async (url, method) => {
   const response = await fetch(url, {
      method,
      headers: {'Content-Type': 'application/json'},
   });
   return response.json();
};
