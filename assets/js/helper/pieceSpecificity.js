/* exported pciExpressSpecificity, tradeImagem,motherBoardSpecificity */
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

const motherBoardSpecificity = () => {
   const {motherBoard: {hasSocketM2}} = getBuildingPC();
   const m2Div = document.getElementById('m2');
   if (hasSocketM2) m2Div.style.display = 'inline';
};