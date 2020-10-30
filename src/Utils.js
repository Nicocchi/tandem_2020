export const shuffle = (arr) => {
    let m = arr.length, t, i;

    // While there remain elements to shuffle
    while (m) {
        // Pick a remaining element
        i = Math.floor(Math.random() * m--);

        // Swap it with the current elment
        t = arr[m];
        arr[m] = arr[i];
        arr[i] = t;
    }

    return arr;
}