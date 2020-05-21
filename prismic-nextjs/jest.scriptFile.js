/* eslint-disable import/no-extraneous-dependencies */
// make sure components are removed from the DOM after each test
import '@testing-library/react/cleanup-after-each';

// add @testing-library/jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
