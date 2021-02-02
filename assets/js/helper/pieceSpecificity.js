/* exported pciExpressSpecificity, tradeImagem */
const pciExpressSpecificity = (data, dropImage) => {
   const pciExpress = document.getElementById('pciExpress_1');
   pciExpress.classList.add('docked');

   const img = document.getElementById(data);
   img.src = dropImage;
};

const tradeImagem = (data, dropImage) => {
   const pciExpress = document.getElementById(data);
   pciExpress.src = dropImage;
};
