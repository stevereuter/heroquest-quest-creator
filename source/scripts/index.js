/** @format */
import Draw from './Draw.mjs';
import { getImage } from './repository.mjs';

const board = document.querySelector('#board');
const draw = new Draw(board);

const boardImage = await getImage('board.png');
draw.drawBoard(boardImage);

const spritesheet = await getImage('spritesheet.png');
spritesheet.style.position = 'absolute';
// const block = spritesheet.cloneNode();
// block.style.clip = 'rect(0px 130px 130px 0px)';
// document.querySelector('body').appendChild(block);
// const spear = spritesheet.cloneNode();
// spear.style.clip = 'rect(0px 130px 260px 0px)';
// document.querySelector('body').appendChild(spear);
