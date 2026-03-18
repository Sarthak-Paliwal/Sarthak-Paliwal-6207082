import { test, expect } from '@playwright/test';
//Before all
//before each
//after all
//after each


//! Before All
test.beforeAll('Hooks', async () => {
    console.log("Hello");
    
});
test('Hooks2', async () => {
    console.log("Hello2");
    
});
test('Hooks3', async () => {
    console.log("Hello3");
    
});


//! Before Each
test.beforeEach('Hooks 4', async () => {
    console.log("Hello");
    
});
test('Hooks5', async () => {
    console.log("Hello2");
    
});
test('Hooks6', async () => {
    console.log("Hello3");
    
});


//! After All
test.afterAll('Hooks9', async () => {
    console.log("Hello");
    
});
test('Hooks7', async () => {
    console.log("Hello2");
    
});
test('Hooks8', async () => {
    console.log("Hello3");
    
});

//! After Each
test.afterEach('Hooks10', async () => {
    console.log("Hello");
    
});
test('Hooks12', async () => {
    console.log("Hello2");
    
});
test('Hooks11', async () => {
    console.log("Hello3");
    
});