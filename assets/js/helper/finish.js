/* exported finish */

const finish = () => {
   fetch('http://localhost:3000/finish', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(getBuildingPC()),
   }).then((response) => response.blob())
      .then((blob) => {
         const url = window.URL.createObjectURL(blob);
         const a = document.createElement('a');
         a.href = url;
         a.download = 'arquivo.pdf';
         document.body.appendChild(a);
         a.click();
         a.remove();
      });
};

