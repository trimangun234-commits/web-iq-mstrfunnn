const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const html = fs.readFileSync('index.html', 'utf8');
const script = fs.readFileSync('script.js', 'utf8');

const dom = new JSDOM(html, { runScripts: "dangerously" });
const window = dom.window;
const document = window.document;

// Attach mock globals
window.localStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {}
};
window.Audio = class {
  play() { return Promise.resolve(); }
  pause() {}
};
window.location.origin = 'http://localhost:3000';
window.btoa = (str) => Buffer.from(str).toString('base64');
window.atob = (b64) => Buffer.from(b64, 'base64').toString('ascii');

try {
    const scriptEl = document.createElement('script');
    scriptEl.textContent = script;
    document.body.appendChild(scriptEl);

    // Call initQuiz manually
    window.currentUser = { name: "Test", email: "test@test.com" };
    window.initQuiz();
    
    console.log("Current Question Text: ", document.getElementById('question-text').textContent);
    console.log("Active Questions Length: ", window.activeQuestions ? window.activeQuestions.length : "undefined");
} catch (err) {
    console.error("ERROR CAUGHT", err);
}
