const array = [1, 2, 3, 4, 5, 6];
const example = "HEllo !@#*@!)robin";
const newobj = {};
const filterString = example.replace(/[\W]/g, "");

for (let char of example) {
  newobj[char] = newobj[char] + 1 || 1;
}
console.log(filterString);
