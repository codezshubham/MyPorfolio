// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// JSDOM doesn't implement scrolling APIs; stub them for components that use hash scrolling.
Object.defineProperty(window, 'scrollTo', { value: jest.fn(), writable: true });
Element.prototype.scrollIntoView = jest.fn();
