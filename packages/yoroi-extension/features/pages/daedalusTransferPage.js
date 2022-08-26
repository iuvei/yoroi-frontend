// @flow

import type { LocatorObject } from '../support/webdriver';

export const nextButton: LocatorObject = { locator: "//button[contains(@label, 'Next')]", method: 'xpath' };
export const backButton: LocatorObject = { locator: "//button[contains(@label, 'Back')]", method: 'xpath' };
export const formFieldOverridesClassicError: LocatorObject = { locator: '.FormFieldOverridesClassic_error', method: 'css' };
export const transferButton: LocatorObject = { locator: '.transferButton', method: 'css' };