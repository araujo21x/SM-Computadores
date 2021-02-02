/* exported pciExpressSpecificity, ramSpecificity */
const pciExpressSpecificity = () => {
   const pciExpress = document.getElementById('pciExpress_1');
   pciExpress.classList.add('docked');
};

const ramSpecificity = (data, dropImage) => {
   const pciExpress = document.getElementById(data);
   pciExpress.src = dropImage;
};
