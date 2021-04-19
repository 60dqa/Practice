var {isOdd} = require ('./tasksAfterProject.js');
var {getDays} = require ('./tasksAfterProject.js');
var {every} = require ('./tasksAfterProject.js');
describe('isOdd', function () {
  var a = 10;
  var b = 9;
  it("should be defined", function () {
    expect(Number.prototype.isOdd).toBeDefined();
     });
      it("should be a function", function () {
      expect(typeof Number.prototype.isOdd).toBe("function");
    });
      it("must be false", function () {
      expect(a.isOdd()).toBe(false);
    });
      it("must be true", function () {
        expect(b.isOdd()).toBe(true);
    });
});

describe('getDays', function () {
    it("should be defined", function () {
      expect(getDays).toBeDefined();
       });
       it("should be a function", function () {
        expect(typeof getDays).toBe("function");
      });
      it("should return 30", function () {
        expect(getDays(2021 ,  4)).toEqual(30);
      });
      it("should return 30", function () {
        expect(getDays(2021 ,  'April')).toEqual(30);
      });
  })


  describe('every', function () {
    it("should be defined", function () {
      expect(every).toBeDefined();
       });
       it("should be a function", function () {
        expect(typeof every).toBe("function");
      });

      function a(num) {
        return  num % 2 === 0;
      }
      it("should be a function", function () {
        expect(every([2,4,6],a)).toEqual(true);
      });
      it("should be a function", function () {
        expect(every([3,4,6],a)).toEqual(false);
      });
    })