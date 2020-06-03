// input is the number of columns and rows
// build :
//      #
//     ##
//    ###
//   ####
//  #####
// ######

function staircase(input) {
  for (var i = 0; i < input; i++) {
    let spaces = new Array(input - i).join(' ');
    let hashes = new Array(2 + i).join('#');
    console.log(spaces + hashes);
  }
}
