/* eslint-disable max-len */
// Cria uma matriz de itens arrastáveis
const draggableItems = document.querySelectorAll('imagePiece');
const dropAreas = document.querySelectorAll('.dropMobile');
let initialX; // Receberá a coordenada X dentro do manipulador interactionStart
let initialY; // Receberá a coordenada Y dentro do manipulador interactionStart
const offsetX = 0; // Receberá a diferença entre initialX e a coordenada X atual dentro do manipulador interactMove
const offsetY = 0; // Receberá a diferença entre initialY e a coordenada Y atual dentro do manipulador interactMove
let startingX;
let startingY;
let targetElement;
const lastActiveDropArea = null;

const createKeeper = function(draggableItem) {
   // Define variables
   const draggableItemRect = draggableItem.getBoundingClientRect();
   const keeper = document.createElement('div');

   // Sets element properties
   //  keeper.classList.add('keeper');
   keeper.style.width = draggableItemRect.width + 'px';
   keeper.style.height = draggableItemRect.height + 'px';

   // Acrescenta o elemento antes do item arrastável ativo
   draggableItem.parentElement.insertBefore(keeper, draggableItem);
};

// inicializar touch
const touchStartHandler = function(event) {
   interactionStart(event.target, event.touches[0].pageX, event.touches[0].pageY);
};

const interactionStart = function(element, coordX, coordY) {
   // Defines variables
   const draggableItemRect = element.getBoundingClientRect();

   // Sets initial values
   initialX = coordX;
   initialY = coordY;
   startingX = draggableItemRect.left;
   startingY = draggableItemRect.top;

   // Configura o tamanho e a posição do item arrastável
   element.style.width = draggableItemRect.width + 'px';
   element.style.height = draggableItemRect.height + 'px';
   element.style.transform = 'translateX(' + draggableItemRect.left + 'px) translateY( ' + draggableItemRect.top + 'px) translateZ(0)';

   // Creates the keeper
   createKeeper(element);

   // ver se funcioanr se funcioanr adiciono isso a parte de de centralizar no dedo
   //  // Adds active class
   //  if (!element.classList.contains('active')) {
   //     element.classList.add('active');
   //  }
};

// Adicionar evento touch
draggableItems.forEach(function(draggableItem) {
   draggableItem.addEventListener('touchstart', touchStartHandler);
});
