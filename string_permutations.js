var number = 0;

function getAllPermutationsOfASet(text) {

  console.log("step #: ", number++)
  console.log("starting at the top, text input -> ", text);
  var results = [];

  if (text.length === 1) {
    results.push(text);
    console.log("step #: ", number++)
    console.log("the return results if text.length == 1, ", results)
    return results;
  }

  for (var i = 0; i < text.length; i++) {

    console.log("step #: ", number++)

    console.log("the text i am working with is -> ", text)
    console.log("i = ", i)

    var first = text[i];
    console.log("the first element -> ", first);

    var remains = text.substring(0, i) + text.substring(i + 1);
    console.log("the remains element -> ", remains);

    var innerPermutations = getAllPermutationsOfASet(remains);

    for (var j = 0; j < innerPermutations.length; j++) {
      console.log("step #: ", number++)
      console.log("the first element is: ", first)
      console.log("the remains are: ", remains)
      console.log("in the j loop, innerPermutations are: ", innerPermutations);
      console.log("j = ", j)
      results.push(first + innerPermutations[j]);
      console.log("the results are -> ", results)
    }
  }

  console.log("step #: ", number++);
  console.log("returning results ", results)
  return results;
}

console.log(getAllPermutationsOfASet('abc'));