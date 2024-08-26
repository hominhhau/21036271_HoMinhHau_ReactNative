
/*
 Viết các method sau cho mảng: myfilter(),  find(), map(), some(), every(), sort(),
forEach(), includes(), indexOf(), push(), pop(), shift(), unshift(), splice(), concat(),
fill(), reverse(), flat(), flatMap(), keys(), values(), entries(), lastIndexOf(), join(), toString(),
 toLocaleString(), copyWithin(), filter(), reduce(), reduceRight(), slice(), and lastly.
 */

// array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// myfilter
Array.prototype.myFilter = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            result.push(this[i]);
        }
    }
    return result;
}
console.log(arr.myFilter((item) => item > 5));

// find
Array.prototype.myFind = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return this[i];
        }
    }
    return undefined;
}
console.log(arr.myFind((item) => item > 5));

// map
Array.prototype.myMap = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i]));
    }
    return result;
}
console.log(arr.myMap((item) => item * 2));

// some
Array.prototype.mySome = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return true;
        }
    }
    return false;
}
console.log(arr.mySome((item) => item > 5));

// every
Array.prototype.myEvery = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i])) {
            return false;
        }
    }
    return true;
}
console.log(arr.myEvery((item) => item > 5));

// sort
Array.prototype.mySort = function (callback) {
    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (callback(this[i], this[j]) > 0) {
                let temp = this[i];
                this[i] = this[j];
                this[j] = temp;
            }
        }
    }
    return this;
}
console.log(arr.mySort((a, b) => a - b));

// forEach
Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}
arr.myForEach((item) => console.log(item));

// includes
Array.prototype.myIncludes = function (value) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === value) {
            return true;
        }
    }
    return false;
}

console.log(arr.myIncludes(5));

// indexOf
Array.prototype.myIndexOf = function (value) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === value) {
            return i;
        }
    }
    return -1;
}
console.log(arr.myIndexOf(5));

// push
Array.prototype.myPush = function (value) {
    this[this.length] = value;
    return this.length;
}
console.log(arr.myPush(10));

// pop
Array.prototype.myPop = function () {
    let value = this[this.length - 1];
    this.length--;
    return value;
}
console.log(arr.myPop());

// shift
Array.prototype.myShift = function () {
    let value = this[0];
    for (let i = 0; i < this.length - 1; i++) {
        this[i] = this[i + 1];
    }
    this.length--;
    return value;
}
console.log(arr.myShift());

// unshift
Array.prototype.myUnshift = function (value) {
    for (let i = this.length; i > 0; i--) {
        this[i] = this[i - 1];
    }
    this[0] = value;
    return this.length;
}
console.log(arr.myUnshift(1));

// splice
Array.prototype.mySplice = function (start, deleteCount, ...items) {
    let deletedItems = [];
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if (i >= start && i < start + deleteCount) {
            deletedItems.push(this[i]);
        } else {
            temp.push(this[i]);
        }
    }
    this.length = 0;
    for (let i = 0; i < temp.length; i++) {
        this[i] = temp[i];
    }
    for (let i = 0; i < items.length; i++) {
        this[this.length] = items[i];
    }
    return deletedItems;
}
console.log(arr.mySplice(2, 2, 10, 11, 12));

// concat
Array.prototype.myConcat = function (...arrays) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(this[i]);
    }
    for (let i = 0; i < arrays.length; i++) {
        for (let j = 0; j < arrays[i].length; j++) {
            result.push(arrays[i][j]);
        }
    }
    return result;
}
console.log(arr.myConcat([10, 11, 12], [13, 14, 15]));

// fill
Array.prototype.myFill = function (value, start, end) {
    for (let i = start; i < end; i++) {
        this[i] = value;
    }
    return this;
}
console.log(arr.myFill(0, 2, 5));

// reverse
Array.prototype.myReverse = function () {
    for (let i = 0; i < this.length / 2; i++) {
        let temp = this[i];
        this[i] = this[this.length - 1 - i];
        this[this.length - 1 - i] = temp;
    }
    return this;
}
console.log(arr.myReverse());

// flat
Array.prototype.myFlat = function (depth = 1) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (Array.isArray(this[i]) && depth > 0) {
            result = result.concat(this[i].myFlat(depth - 1));
        } else {
            result.push(this[i]);
        }
    }
    return result;
}
console.log(arr.myFlat(1));

// flatMap
Array.prototype.myFlatMap = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result = result.concat(callback(this[i]));
    }
    return result;
}
console.log(arr.myFlatMap((item) => [item, item]));

// keys
Array.prototype.myKeys = function () {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(i);
    }
    return result;
}
console.log(arr.myKeys());

// values
Array.prototype.myValues = function () {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(this[i]);
    }
    return result;
}
console.log(arr.myValues());

// entries
Array.prototype.myEntries = function () {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push([i, this[i]]);
    }
    return result;
}
console.log(arr.myEntries());

// lastIndexOf
Array.prototype.myLastIndexOf = function (value) {
    for (let i = this.length - 1; i >= 0; i--) {
        if (this[i] === value) {
            return i;
        }
    }
    return -1;
}
console.log(arr.myLastIndexOf(5));

// join
Array.prototype.myJoin = function (separator) {
    let result = '';
    for (let i = 0; i < this.length; i++) {
        result += this[i];
        if (i < this.length - 1) {
            result += separator;
        }
    }
    return result;
}
console.log(arr.myJoin('-'));

// toString
Array.prototype.myToString = function () {
    return this.myJoin(',');
}
console.log(arr.myToString());

// toLocaleString
Array.prototype.myToLocaleString = function () {
    let result = '';
    for (let i = 0; i < this.length; i++) {
        result += this[i].toLocaleString();
        if (i < this.length - 1) {
            result += ',';
        }
    }
    return result;
}
console.log(arr.myToLocaleString());

// copyWithin
Array.prototype.myCopyWithin = function (target, start, end) {
    let temp = [];
    for (let i = start; i < end; i++) {
        temp.push(this[i]);
    }
    for (let i = 0; i < temp.length; i++) {
        this[target + i] = temp[i];
    }
    return this;
}
console.log(arr.myCopyWithin(2, 0, 3));

// filter
Array.prototype.myFilter = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            result.push(this[i]);
        }
    }
    return result;
}
console.log(arr.myFilter((item) => item > 5));

// flatMap
Array.prototype.myFlatMap = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result = result.concat(callback(this[i]));
    }
    return result;
}
console.log(arr.myFlatMap((item) => [item, item]));

// reduce
Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue;
    let i = 0;
    if (accumulator === undefined) {
        accumulator = this[0];
        i = 1;
    }
    for (; i < this.length; i++) {
        accumulator = callback(accumulator, this[i]);
    }
    return accumulator;
}
console.log(arr.myReduce((accumulator, currentValue) => accumulator + currentValue, 0));

// reduceRight
Array.prototype.myReduceRight = function (callback, initialValue) {
    let accumulator = initialValue;
    let i = this.length - 1;
    if (accumulator === undefined) {
        accumulator = this[i];
        i--;
    }
    for (; i >= 0; i--) {
        accumulator = callback(accumulator, this[i]);
    }
    return accumulator;
}
console.log(arr.myReduceRight((accumulator, currentValue) => accumulator + currentValue, 0));

// slice
Array.prototype.mySlice = function (start, end) {
    let result = [];
    for (let i = start; i < end; i++) {
        result.push(this[i]);
    }
    return result;
}
console.log(arr.mySlice(2, 5));

// includes
Array.prototype.myIncludes = function (value) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === value) {
            return true;
        }
    }
    return false;
}
console.log(arr.myIncludes(5));

// lastIndexOf
Array.prototype.myLastIndexOf = function (value) {
    for (let i = this.length - 1; i >= 0; i--) {
        if (this[i] === value) {
            return i;
        }
    }
    return -1;
}
console.log(arr.myLastIndexOf(5));


//lastly
Array.prototype.myLastly = function () {
    return this[this.length - 1];
}
console.log(arr.myLastly());






