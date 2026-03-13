const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const html = fs.readFileSync('index.html', 'utf8');
const script = fs.readFileSync('script.js', 'utf8');

const dom = new JSDOM(html, { runScripts: "dangerously" });
const window = dom.window;

window.onerror = function(msg, url, line, col, error) {
   console.error("Window Error:", msg, line, col, error);
};

try {
  window.eval(`
    window.localStorage = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
    window.Audio = class { play() { return Promise.resolve(); } pause() {} };
    window.location = { origin: 'http://localhost:3000' };
    window.btoa = (str) => Buffer.from(str).toString('base64');
    window.atob = (b64) => Buffer.from(b64, 'base64').toString('ascii');
    window.confetti = function() {};
    
    ${script}
    
    window.currentUser = { name: "Test", email: "test@test.com" };
    initQuiz();
  `);
} catch(e) {
  console.error("Eval Error:", e.stack);
}
