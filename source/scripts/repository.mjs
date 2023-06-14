/** @format */

export async function getImage(name) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = reject;
        image.src = `images/${name}`;
    });
}
