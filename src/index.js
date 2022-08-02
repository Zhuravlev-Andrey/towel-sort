// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return [];
    }

    let conclusion = [];
    for (let i = 0; i < matrix.length; i++) {
        const towelArray = i % 2 == 0 ? matrix[i] : matrix[i].reverse();
        conclusion = conclusion.concat(towelArray);
    }
    return conclusion;
};
