import {describe, expect} from '@jest/globals';
import fetchMock from 'fetch-mock';
import formHandler from '../formHandler';


describe('In "formHandler"', () => {
    describe('the function "handleSubmit"', () => {
        let defaultWasPrevented;
        const eventMock = {
            preventDefault: preventDefaultCallback()
        };

        function preventDefaultCallback() {
            return jest.fn(() => defaultWasPrevented = true);
        }

        beforeEach(() => {
            defaultWasPrevented = false;
            fetchMock.restore();
        })

        test('should call the API', function () {
            document.body.innerHTML = '<form class="">' +
                '<input id="name" type="::type::" name="" value="::text::"/>' +
                '<label id="connection-error" style="display: none;" class="error-label">::error-text::</label>' +
                '</form>';
            const responseBody = {hello: "world"};
            fetchMock.getOnce('http://localhost:8081/meaningcloud?text=::text::', responseBody);

            formHandler.handleSubmit(eventMock, false);

            expect(defaultWasPrevented).toBeTruthy();
        });

        test('should show an error if connection is faulty', function () {
            document.body.innerHTML = '<form class="" >' +
                '<input id="name" type="::type::" name="" value="::text::"/>' +
                '<label id="connection-error" style="display: none;" class="error-label">::error-text::</label>' +
                '</form>'
            fetchMock.getOnce('http://localhost:8081/meaningcloud?text=::text::', 400);

            formHandler.handleSubmit(eventMock, false);

            expect(defaultWasPrevented).toBeTruthy();
        });

    });

});