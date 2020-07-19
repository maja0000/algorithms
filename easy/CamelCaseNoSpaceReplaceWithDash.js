// replace spaces with dash and all to lower case

function spinalCase(str) {
  //-----v
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  //-------^
  let dash = str.toLowerCase().replace(/[\s_]/g, '-');
  console.log(dash);
  return dash;
}

console.log(spinalCase('This Is Spinal Tap'));
