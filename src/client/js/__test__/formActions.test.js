import {describe, expect, test} from '@jest/globals';

const rewire = require('rewire');
const sut = rewire('../formActions.js');

describe('In "formActions"', () => {
    describe('the function "toggleButton"', () => {
        const toggleButton = sut.__get__('toggleButton');

        test('should activate a button', () => {
            document.body.innerHTML = `<input id="id" type="::type::" disabled="disabled" name="" value="::value::">`
            const button = document.getElementById('id');

            toggleButton(button, true);

            expect(document.body.innerHTML).toEqual(`<input id="id" type="::type::" name="" value="::value::">`)
        });

        test('should deactivate a button', () => {
            document.body.innerHTML = `<input id="id" type="::type::" name="" value="::value::">`
            const button = document.getElementById('id');

            toggleButton(button, false);

            expect(document.body.innerHTML).toEqual(`<input id="id" type="::type::" name="" value="::value::" disabled="disabled">`)
        });

    })
    describe('the function "analyzeForm"', () => {
        test('should toggle toggle button "active"', function () {
            let toggleWasExecuted = false;
            const submitButton = document.createElement('input');
            submitButton.setAttribute('disabled', 'disabled');
            const textField = document.createElement('input');
            textField.value = '::present::';

            sut.__set__('toggleButton', function (submitButton, active) {
                expect(active).toBeTruthy();
                toggleWasExecuted = true;
            });

            sut.analyzeForm(textField, submitButton);

            expect(toggleWasExecuted).toBeTruthy();
        });

        test('should toggle toggle button "inactive"', function () {
            let toggleWasExecuted = false;
            const submitButton = document.createElement('input');
            // submitButton.setAttribute('disabled', 'disabled');//active
            const textField = document.createElement('input');
            textField.value = '';

            sut.__set__('toggleButton', function (submitButton, active) {
                expect(active).toBeFalsy();
                toggleWasExecuted = true;
            });

            sut.analyzeForm(textField, submitButton);

            expect(toggleWasExecuted).toBeTruthy();
        });
        test('should NOT toggle toggle inactive button without text in field', function () {
            let toggleWasExecuted = false;
            const submitButton = document.createElement('input');
            submitButton.setAttribute('disabled', 'disabled');
            const textField = document.createElement('input');
            textField.value = '';

            sut.__set__('toggleButton', () => toggleWasExecuted = true);

            sut.analyzeForm(textField, submitButton);

            expect(toggleWasExecuted).toBeFalsy();
        });
        test('should NOT toggle toggle active button with text in field', function () {
            let toggleWasExecuted = false;
            const submitButton = document.createElement('input');
            // submitButton.setAttribute('disabled', 'disabled');//active
            const textField = document.createElement('input');
            textField.value = '::content::';

            sut.__set__('toggleButton', () => toggleWasExecuted = true);

            sut.analyzeForm(textField, submitButton);

            expect(toggleWasExecuted).toBeFalsy();
        });
    });
});