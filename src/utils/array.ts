export function createArray<T>(length: number, callback: (i: number)=> T ) {
    return [...new Array(length)].map((value, i) => callback(i));
};
