function spinalCase(str) {
  //-----v
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  //-------^
  let dash = str.toLowerCase().replace(/[\s_]/g, '-');
  console.log(dash);
  return dash;
}

spinalCase('This Is Spinal Tap');
