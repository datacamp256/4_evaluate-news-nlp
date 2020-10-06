import {describe, expect, test} from '@jest/globals';
import apiKeyLoader from '../apiKeyLoader'

describe('the apiKeyLoader', function () {
    test('should provide a valid json', function () {
        const apiKeys = apiKeyLoader.getApiKeys().sites;
        expect(apiKeys).toHaveLength(1);
        expect(apiKeys[0].api_location).toEqual('https://api.meaningcloud.com/');
        expect(apiKeys[0].application_key).toBeTruthy();
        expect(apiKeys[0].site).toEqual('MeaningCloud');
    });
});