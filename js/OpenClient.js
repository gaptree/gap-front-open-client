import {Request} from 'gap-front-request';

export class OpenClient {
    constructor(token, appOpts, request) {
        this.request = request || new Request();

        this.token = token;
        this.appOpts = appOpts;

        this.request.addHeader('Authorization', 'Bearer ' + this.token);
        this.request.withCredentials = true;
    }

    call(appKey, apiName, params) {
        let url = this.appOpts[appKey]['baseUrl']
            + this.appOpts[appKey]['api'][apiName];

        return this.request.postJson(url, params);
    }
}
