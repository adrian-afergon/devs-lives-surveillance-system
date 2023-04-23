import {hello} from "../index";

describe('Hello world', function () {
  it('says "Hello World!"', function () {
    expect(hello()).toEqual("Hello World!");
  });
});
