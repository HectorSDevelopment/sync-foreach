module.exports = (arr, fn) => {
    if (toString.call(fn) !== '[object Function]') {
        throw new TypeError('Iterator must be a function');
    }

    let keys = Object.keys(arr);
    let done;

    const next = () => {
        let index = keys.shift();

        if (!isNaN(index)) {
            index = +index;
        }

        if (arr[index] !== undefined) {
            fn(next, arr[index], index, arr);
        } else if (done !== undefined) {
            done();
        }
    };

    setTimeout(() => next(), 1);

    return { done (cb) { done = cb; } };
};
