import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateAppointmentForm,
  generateAppointmentRef,
  formatPhoneNumber,
  filterArticles
} from './appointment';

test('validateAppointmentForm rejects empty inputs', () => {
  const result = validateAppointmentForm({});
  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.email);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.treatment);
  assert.ok(result.errors.date);
  assert.ok(result.errors.timeSlot);
});

test('validateAppointmentForm accepts valid appointment submission', () => {
  // Today's date in YYYY-MM-DD
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const futureDate = `${year}-${month}-${day}`;

  const result = validateAppointmentForm({
    name: 'Sarah Connor',
    email: 'sarah@example.com',
    phone: '555-123-4567',
    treatment: 'teeth-whitening',
    date: futureDate,
    timeSlot: '10:00 AM'
  });

  assert.equal(result.isValid, true);
  assert.deepEqual(result.errors, {});
});

test('validateAppointmentForm rejects invalid email and past date', () => {
  const result = validateAppointmentForm({
    name: 'John',
    email: 'not-an-email',
    phone: '1234567',
    treatment: 'teeth-whitening',
    date: '2020-01-01',
    timeSlot: '09:00 AM'
  });

  assert.equal(result.isValid, false);
  assert.ok(result.errors.email);
  assert.ok(result.errors.date);
});

test('generateAppointmentRef generates valid prefix and pattern', () => {
  const ref = generateAppointmentRef('FLS');
  assert.match(ref, /^FLS-\d{4}-\d{4}$/);
});

test('formatPhoneNumber formats 10-digit phone', () => {
  assert.equal(formatPhoneNumber('5551234567'), '(555) 123-4567');
});

test('filterArticles filters by category and query accurately', () => {
  const sample = [
    { title: 'Teeth Whitening Secrets', category: 'Cosmetic', excerpt: 'How to whiten teeth' },
    { title: 'Gum Care Basics', category: 'Oral Health', excerpt: 'Healthy gums advice' },
    { title: 'Aligner Guide', category: 'Orthodontics', excerpt: 'Clear braces' }
  ];

  const all = filterArticles(sample, 'All', '');
  assert.equal(all.length, 3);

  const cosmetic = filterArticles(sample, 'Cosmetic', '');
  assert.equal(cosmetic.length, 1);
  assert.equal(cosmetic[0].title, 'Teeth Whitening Secrets');

  const querySearch = filterArticles(sample, 'All', 'braces');
  assert.equal(querySearch.length, 1);
  assert.equal(querySearch[0].title, 'Aligner Guide');
});
