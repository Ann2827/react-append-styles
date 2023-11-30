import {JSDOM} from "jsdom";

const html = '<!DOCTYPE html><html lang="en"><head><title></title></head><body></body></html>';

const dom = new JSDOM(html);

global.document = dom.window.document;
global.window = dom.window;

// https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
// Object.defineProperty(global, 'document', {
//   writable: true,
//   value: jest.fn().mockImplementation(query => ({
//     matches: false,
//     media: query,
//     onchange: null,
//     addListener: jest.fn(), // deprecated
//     removeListener: jest.fn(), // deprecated
//     addEventListener: jest.fn(),
//     removeEventListener: jest.fn(),
//     dispatchEvent: jest.fn(),
//   })),
// });
