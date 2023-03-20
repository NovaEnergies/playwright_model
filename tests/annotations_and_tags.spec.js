import { test, expect } from '@playwright/test';

test.describe('Annotations and tags all tests', () => {

    // Annotations
    test.skip('Skip this test', async ({page}) => {
        // this test is not run
    })

    test('Not yet ready', async ({page}) => {
        // page.goto('https://yandex.ru');
        test.fail();
    })

    test.fixme('Test to be fixed', async ({page}) => {
        // ...
    })

    test('Slow test', async ({page}) => {
        test.slow();
        // ...
    })

    test.only('Focus this test', async ({page}) => {
        // run only focused tests in the entire project
    })

    // Tags
    test('Test login page @smoke', async ({page}) => {
        // --grep "@smoke"
    })
})