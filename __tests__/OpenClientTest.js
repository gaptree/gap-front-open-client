import {OpenClient} from '../index.js';
import {RequestMock} from '../__mocks__/RequestMock.js';

test('test', async () => {
    const requestMock = new RequestMock();
    requestMock.responseText = JSON.stringify({
        welcome: 'ok'
    });

    let openClient = new OpenClient(
        'fakeToken',
        {
            appKey: {
                baseUrl: 'http://fake.com',
                api: {
                    apiName: '/api'
                }
            }
        },
        requestMock
    );

    const res = await openClient.call(
        'appKey',
        'apiName',
        {k1: 'v1'}
    );

    expect(res.welcome).toBe('ok');
});
