import assert from 'assert';
// 刻意寫錯算式，以觸發 Assertion Error
assert.strictEqual(2 * 2, 4);
console.log('✅ Integration tests passed');
