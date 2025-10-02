/**
 * DOM Utilities for SPA
 * Provides helper functions for DOM manipulation and event handling
 */

/**
 * Wait for an element to be available in the DOM
 * @param {string} selector - CSS selector for the element
 * @param {number} timeout - Maximum time to wait in milliseconds (default: 1000)
 * @returns {Promise<Element>} The found element
 */
export const waitForElement = (selector, timeout = 1000) => {
    return new Promise((resolve, reject) => {
        const element = document.querySelector(selector);
        if (element) {
            resolve(element);
            return;
        }

        const observer = new MutationObserver((mutations, obs) => {
            const element = document.querySelector(selector);
            if (element) {
                obs.disconnect();
                resolve(element);
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        // Timeout fallback
        setTimeout(() => {
            observer.disconnect();
            reject(new Error(`Element ${selector} not found within ${timeout}ms`));
        }, timeout);
    });
};

/**
 * Wait for multiple elements to be available
 * @param {string[]} selectors - Array of CSS selectors
 * @param {number} timeout - Maximum time to wait in milliseconds
 * @returns {Promise<Element[]>} Array of found elements
 */
export const waitForElements = async (selectors, timeout = 1000) => {
    const promises = selectors.map(selector => waitForElement(selector, timeout));
    return Promise.all(promises);
};

/**
 * Initialize interactive elements after DOM is ready
 * @param {Function} initFunction - Function to execute after DOM is ready
 * @param {string[]} requiredSelectors - Array of selectors that must exist before initialization
 */
export const initWhenReady = async (initFunction, requiredSelectors = []) => {
    try {
        if (requiredSelectors.length > 0) {
            await waitForElements(requiredSelectors);
        }
        initFunction();
    } catch (error) {
        console.error('Failed to initialize interactive elements:', error);
    }
};

/**
 * Create a page component with initialization
 * @param {string} html - HTML content
 * @param {Function} initFunction - Initialization function
 * @param {string[]} requiredSelectors - Required selectors for initialization
 * @returns {Object} Page object with html and init properties
 */
export const createPage = (html, initFunction, requiredSelectors = []) => {
    return {
        html,
        init: () => initWhenReady(initFunction, requiredSelectors)
    };
};

