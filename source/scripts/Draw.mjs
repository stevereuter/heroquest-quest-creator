/** @format */
export default class Draw {
    #context;
    #mapWidth;
    #mapHeight;
    #squareSize;

    constructor(canvas) {
        this.#context = canvas.getContext('2d');
        this.#mapWidth = 800;
        this.#mapHeight = 600;
        this.#squareSize = this.#mapWidth / 28;
    }

    #getBoardPadding() {
        return this.#squareSize * 2;
    }

    #getBoardWidth() {
        const padding = this.#getBoardPadding();
        return this.#mapWidth - padding;
    }

    #getBoardHeight() {
        const padding = this.#getBoardPadding();
        return this.#mapHeight - padding;
    }

    /**
     * @description for drawing the 26 x 19 board with one space padding all around
     * @param {img} image image element
     */
    drawBoard(image) {
        this.#context.drawImage(
            image,
            this.#squareSize,
            this.#squareSize,
            this.#getBoardWidth(),
            this.#getBoardHeight()
        );
    }
}
