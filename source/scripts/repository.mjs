/** @format */

export async function getImage(path) {
    return new Promise((resolve) => {
        const image = new Image();
        image.src = path;
        image.onload = () => resolve(image);
    });
}
