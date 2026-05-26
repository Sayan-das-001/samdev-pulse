import test from 'node:test';
import assert from 'node:assert/strict';

// The regex used in profile.route.js — tested in isolation
const usernameRegex = /^(?!.*--)[a-zA-Z0-9]([a-zA-Z0-9-]{0,37}[a-zA-Z0-9])?$/;

test('username regex rejects consecutive hyphens', () => {
  assert.equal(usernameRegex.test('a--b'), false, 'a--b should be rejected');
  assert.equal(usernameRegex.test('a---b'), false, 'a---b should be rejected');
  assert.equal(usernameRegex.test('x--y'), false, 'x--y should be rejected');
  assert.equal(usernameRegex.test('a--'), false, 'trailing consecutive hyphens rejected');
  assert.equal(usernameRegex.test('--a'), false, 'leading consecutive hyphens rejected');
});

test('username regex accepts valid single-hyphen usernames', () => {
  assert.equal(usernameRegex.test('a-b'), true, 'single hyphen accepted');
  assert.equal(usernameRegex.test('abc-def-ghi'), true, 'multiple single hyphens accepted');
  assert.equal(usernameRegex.test('a123-b456'), true, 'mixed with single hyphen accepted');
  assert.equal(usernameRegex.test('a-b-c-d-e-f'), true, 'many single hyphens accepted');
});

test('username regex accepts simple alphanumeric usernames', () => {
  assert.equal(usernameRegex.test('a'), true, 'single letter');
  assert.equal(usernameRegex.test('1'), true, 'single digit');
  assert.equal(usernameRegex.test('ab'), true, 'two letters');
  assert.equal(usernameRegex.test('testuser123'), true, 'alphanumeric only');
});

test('username regex rejects leading/trailing hyphens', () => {
  assert.equal(usernameRegex.test('-ab'), false, 'leading hyphen rejected');
  assert.equal(usernameRegex.test('ab-'), false, 'trailing hyphen rejected');
  assert.equal(usernameRegex.test('-'), false, 'just hyphen rejected');
});

test('username regex rejects empty string', () => {
  assert.equal(usernameRegex.test(''), false, 'empty rejected');
});

test('username regex enforces max 39 characters', () => {
  const valid39 = 'a'.repeat(39);
  const invalid40 = 'a'.repeat(40);
  assert.equal(usernameRegex.test(valid39), true, '39 chars accepted');
  assert.equal(usernameRegex.test(invalid40), false, '40 chars rejected');
});
