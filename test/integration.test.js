const assert = require('assert');
// 這裡我們先寫對的測試。稍後為了截取「測試失敗」的畫面，我們會回來故意把它改錯。
assert.strictEqual(2 * 2, 4);
console.log('✅ Integration tests passed');
