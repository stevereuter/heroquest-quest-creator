/** @format */
import Draw from './Draw.mjs';
import { getImage } from './repository.mjs';

const board = document.querySelector('#board');
const draw = new Draw(board);

const boardImage = await getImage('images/board.png');
draw.drawBoard(boardImage);

