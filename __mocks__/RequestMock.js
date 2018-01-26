import {Request} from 'gap-front-request';

const expectUrl = 'http://fake.com/api';

export class RequestMock extends Request {
    postJson(url, params) {
        return new Promise((resolve, reject) => {
            window.setTimeout(() => {
                if (url === expectUrl && params.k1 == 'v1') {
                    resolve(JSON.parse(this.responseText));
                } else {
                    reject({
                        error: 'failed'
                    });
                }
            }, 0);
        });
    }
}
