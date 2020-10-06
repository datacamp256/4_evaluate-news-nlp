import formHandler from '../formHandler';
import {describe, expect} from '@jest/globals';
import fetchMock from "fetch-mock";



describe('In "formHandler"', () => {
    describe('the function "handleSubmit"', () => {
        let defaultWasPrevented;

        function preventDefaultCallback() {
            return jest.fn(() => defaultWasPrevented = true);
        }

        beforeEach(() => {
            defaultWasPrevented = false;
        })

        test('should call the API', function () {
            document.body.innerHTML = `<input id="name" type="::type::" name="" value="::text::">`
            const responseBody = {hello: "world"};
            fetchMock.getOnce('http://localhost:8081/meaningcloud?text=::text::', responseBody);
            const eventMock = {
                preventDefault: preventDefaultCallback()
            };

            formHandler.handleSubmit(eventMock);

            expect(defaultWasPrevented).toBeTruthy();
        });

    });

});