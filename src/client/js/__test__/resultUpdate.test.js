import {describe, expect, test} from '@jest/globals';
import resultUpdate from '../resultUpdate'
import 'regenerator-runtime/runtime'

describe('resultUpdate', () => {
    test('should update', function () {
        document.body.innerHTML = `<div id="results"></div><footer></footer>`
        const jsonValue = {
            status: {
                code: "::any::",
                msg: "::any::",
                credits: "::any::",
                remaining_credits: "::remaining-credits::"
            },
            model: "::model::",
            score_tag: "::score-tag::",
            agreement: "::agreement::",
            subjectivity: "::any::",
            confidence: "::confidence::",
            irony: "::irony::",
            sentence_list: [{
                text: "::sentence1-text::",
                inip: "::any::",
                endp: "::any::",
                bop: "::sentence1-bop::",
                confidence: "::sentence1-confidence::",
                score_tag: "::sentence1-scoretag::",
                agreement: "::sentence1-agreement::",
            }, {
                text: "::sentence2-text::",
                inip: "::any::",
                endp: "::any::",
                bop: "::sentence2-bop::",
                confidence: "::sentence2-confidence::",
                score_tag: "::sentence2-scoretag::",
                agreement: "::sentence2-agreement::",
            }]
        };
        resultUpdate.update(jsonValue);
        expect(document.body.innerHTML).toEqual('<div id="results" style="display: block;"><h1></h1><h2></h2><ul><li></li><li></li><li></li><li></li><li></li></ul><h2></h2><table><tr><th></th><th></th><th></th><th></th><th></th></tr><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr></table></div><footer style="display: block;"></footer>');
    });

    describe('toggle url warning', function () {
        test('should inactivate warning', function () {
            document.body.innerHTML = `<div id='warning' style="display: block;">::content::</div>`;
            resultUpdate.toggleUrlWarning(false);
            expect(document.body.innerHTML).toEqual(`<div id="warning" style="display: none;">::content::</div>`)
        });

        test('should activate warning', function () {
            document.body.innerHTML = `<div id='warning' style="display: none;">::content::</div>`;
            resultUpdate.toggleUrlWarning(true);
            expect(document.body.innerHTML).toEqual(`<div id="warning" style="display: block;">::content::</div>`)
        });
        test('should keep active warning', function () {
            document.body.innerHTML = `<div id='warning' style="display: block;">::content::</div>`;
            resultUpdate.toggleUrlWarning(true);
            expect(document.body.innerHTML).toEqual(`<div id="warning" style="display: block;">::content::</div>`)
        });
        test('should keep inactive warning', function () {
            document.body.innerHTML = `<div id='warning' style="display: none;">::content::</div>`;
            resultUpdate.toggleUrlWarning(false);
            expect(document.body.innerHTML).toEqual(`<div id="warning" style="display: none;">::content::</div>`)
        });
    });
})
;