/* exported phantomDivRemove */
const phantomDivRemove = () => {
   const div = Array.from(document.getElementsByClassName('hardwareItem'));
   div.map((item) => {
      if (item.firstChild.firstChild.childElementCount === 0) {
         item.parentNode.removeChild(item);
      }
   });
};
