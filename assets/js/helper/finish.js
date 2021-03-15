/* exported finish */
const finish = () => {
   fetch('https://api-draganddrop.herokuapp.com/finish', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(getBuildingPC()),
   }).then((response) =>{
      if (response.status === 200) {
         response.blob().then((blob) => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'arquivo.pdf';
            document.body.appendChild(a);
            a.click();
            a.remove();
         });
      } else {
         alert('erro!');
      }
   });
};
