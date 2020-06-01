// find a non unique characters  in an array

function nonUniqueElements(data) {
  return data.filter(function (a) {
    return data.indexOf(a) !== data.lastIndexOf(a);
  });
}
console.log(nonUniqueElements([1, 2, 1, 3, 4]));
