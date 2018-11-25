var expect = require('chai').expect;
const execises = require('./exercisms');
function addPre(s) {
  return `/exercism-rust-zh/${s}`;
}
describe('exercism-rust-zh 0', function() {
  execises.forEach(function(lianxi) { // 递归
    describe('each link', function() {
      it(`${lianxi} test`, function() {
        browser.url(addPre(lianxi));
        var dclicks = $$('details').filter(function(link) {
          return link.isVisible();
        });
        dclicks[0].click(); // open answer details

        var buttons = $$('.play-button').filter(function(link) {
          return link.isVisible();
        }); // play

        expect(buttons.length).to.be.equal(3); // three

        buttons[0].click(); // src
        buttons[2].click(); // answer

        var results = $$('.result'); // output

        browser.waitUntil(
          function() {
            return results[0].getText() !== 'Running...';
          },
          8000,
          '期待 8s内，用户代码可以出现结果'
        );
        browser.waitUntil(
          function() {
            return results[1].getText() !== 'Running...';
          },
          8000,
          '期待 8s内，答案可以出现结果'
        );
        expect(results.length).to.be.equal(2);
        let pas = ['... FAILED', 'Compiling playground'];
        let res = pas.some(p => results[0].getText().includes(p));
        expect(res).to.be.equal(true);
        expect(results[1].getText()).to.include('test result: ok.');
      });
    });
  });
});
