const D = require('@cabbagesoup/datelib');  // Adjust the path to the D class if necessary

describe('D Class', () => {
	let d;

	beforeEach(() => {
		// Create a specific date for consistent testing
		d = new D(2021, 6, 27, 18, 6, 5);  // July 27, 2021, 18:06:05
	});

	test('should return the correct full year', () => {
		expect(d.year).toBe(2021);
	});

	test('should return the correct short year', () => {
		expect(d.yr).toBe('21');
	});

	test('should return the correct full month name', () => {
		expect(d.month).toBe('July');
	});

	test('should return the correct short month name', () => {
		expect(d.mon).toBe('Jul');
	});

	test('should return the correct full day name', () => {
		expect(d.day).toBe('Tuesday');
	});

	test('should return the correct short day name', () => {
		expect(d.dy).toBe('Tue');
	});

	test('should return the correct date', () => {
		expect(d.date).toBe(27);
	});

	test('should return the correct hours', () => {
		expect(d.hours).toBe(18);
	});

	test('should return the correct minutes', () => {
		expect(d.mins).toBe(6);
	});

	test('should return the correct seconds', () => {
		expect(d.secs).toBe(5);
	});
});

describe('D Class - Format Method', () => {
	let d;

	beforeEach(() => {
		d = new D(2017, 0, 2, 3, 4, 5);  // January 2, 2017, 03:04:05
	});

	test('should return default formatted date', () => {
		expect(d.format()).toBe('2017 January 02');
	});

	test('should format year, month, date correctly', () => {
		expect(d.format('Y-M-D')).toBe('2017-January-02');
	});

	test('should format short year, short month, and date correctly', () => {
		expect(d.format('y/m/d')).toBe('17/Jan/2');
	});

	test('should format hours, minutes, seconds with padding', () => {
		expect(d.format('H:I:S')).toBe('03:04:05');
	});

	test('should format hours, minutes, seconds without padding', () => {
		expect(d.format('h:i:s')).toBe('3:4:5');
	});

	test('should format date with ordinal suffix', () => {
		expect(d.format('#')).toBe('2nd');
	});

	test('should ignore unrecognized characters in format', () => {
		expect(d.format('Y-M-D @ H:I:S')).toBe('2017-January-02 @ 03:04:05');
	});
});

describe('D Class - When Method', () => {
	let currentDate;

	beforeAll(() => {
		// Use the current date of October 8, 2024 for consistent testing
		currentDate = new Date(2024, 9, 8);  // October 8, 2024
		jest.useFakeTimers('modern').setSystemTime(currentDate);
	});

	afterAll(() => {
		// Reset the timers after the tests
		jest.useRealTimers();
	});

	test('should return "6 months ago"', () => {
		const d = new D(2024, 3, 8);  // April 8, 2024
		expect(d.when()).toBe('6 months ago');
	});

	test('should return "3 months from now"', () => {
		const d = new D(2025, 0, 8);  // January 8, 2025
		expect(d.when()).toBe('3 months from now');
	});

	test('should return "5 years from now"', () => {
		const d = new D(2029, 9, 8);  // October 8, 2029
		expect(d.when()).toBe('5 years from now');
	});

	test('should return "3 days from now"', () => {
		const d = new D(2024, 9, 11);  // October 11, 2024
		expect(d.when()).toBe('3 days from now');
	});

	test('should return "today" for the same date', () => {
		const d = new D(2024, 9, 8);  // October 8, 2024 (same as current date)
		expect(d.when()).toBe('today');
	});

	test('should return "2 days ago"', () => {
		const d = new D(2024, 9, 6);  // October 6, 2024
		expect(d.when()).toBe('2 days ago');
	});
});


