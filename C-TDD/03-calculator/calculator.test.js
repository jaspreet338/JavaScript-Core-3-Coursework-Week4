let add = require("./calculator");

test("return 11 if the argument passed is 5, 6", function (){
    expect(add('"5"')).toEqual('5')
});

test("return 11 if the argument passed is 5, 6", function () {
  expect(add('"5", "6"')).toEqual('11');
});

test("return 13 if the argument passed is 10, 15, 5", function () {
  expect(add('"1", "5", "7"')).toEqual("13");
});