/** @format */
// board 26 x 19
export default class Draw {
    constructor(canvas) {
        this.context = canvas.getContext('2d');
    }

    drawBoard(image) {
        this.context.drawImage(image, 0, 0, 800, 600);
    }
}
