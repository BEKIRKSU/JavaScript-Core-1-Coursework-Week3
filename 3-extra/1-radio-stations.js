/**
 * Finding a radio station, and a good one, can be hard manually.
 * Let's use some code to help us build a program that helps us scan
 * the radio waves for some good music.
 */

/**
 * First, let's create a function that creates a list of all the frequencies.
 * Call this function `getAllFrequencies`.
 *
 * This function should:
 * - Create an array  starting at 87 and ending in 108
 * - Should return this array to use in other functions
 */

// `getAllFrequencies` goes here

/**
 * Next, let's write a function that gives us only the frequencies that are radio stations.
 * Call this function `getStations`.
 *
 * This function should:
 * - Get the available frequencies from `getAllFrequencies`
 * - There is a helper function called isRadioStation that takes an integer as an argument and returns a boolean.
 * - Return only the frequencies that are radio stations.
 */
// `getStations` goes here

/*
 * ======= TESTS - DO NOT MODIFY =======
 * Note: You are not expected to understand everything below this comment!
 */

function getAllFrequencies() {
  const frequencies = [];
  for (let i = 87; i <= 108; i++) {
    frequencies.push(i);
  }
  return frequencies;
}

function getStations() {
  const allFrequencies = getAllFrequencies();
  const radioStations = allFrequencies.filter((frequency) => {
    return isRadioStation(frequency);
  });
  return radioStations;
}

test("getAllFrequencies() returns all frequencies between 87 and 108", () => {
  expect(getAllFrequencies()).toEqual([
    87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104,
    105, 106, 107, 108,
  ]);
});

test("getStations() returns all the available stations", () => {
  expect(getStations()).toEqual(getAvailableStations());
});
