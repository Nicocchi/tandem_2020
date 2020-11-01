import sinon from "sinon";

export const shuffle = (arr) => {
    let m = arr.length,
        t,
        i;

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
};

export const ranInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const stubConsoleError = () => {
    beforeEach(() => {
        sinon.stub(console, "error");
    });

    afterEach(() => {
        console.error.restore();
    });
};

export const expectMissingProp = (prop, component) => {
    sinon.assert.calledWithMatch(
        console.error,
        new RegExp(`The prop \`${prop}\` is marked as required in \`${component}\`, but its value is \`undefined\`.`)
    );
};