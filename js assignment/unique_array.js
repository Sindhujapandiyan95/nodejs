var unique = [2,23,4,5,5,5,6,7,7,2].filter(function(item, index,array) {
    return index == array.indexOf(item);
});
console.log(unique);
