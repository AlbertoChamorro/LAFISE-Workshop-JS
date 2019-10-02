Number.prototype.toArray = function () {
    return Array.from(Array(this.valueOf()).keys()).map(number => number + 1)
}