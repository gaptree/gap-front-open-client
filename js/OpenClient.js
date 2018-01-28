import {Request} from 'gap-front-request';

export class OpenClient {
    constructor(accessToken, apps, request) {
        this.request = request || new Request();

        this.accessToken = accessToken;
        this.apps = apps;

        if (this.accessToken) {
            this.request.addHeader('Authorization', 'Bearer ' + this.accessToken);
        }

        this.request.withCredentials = true;
    }

    call(appKey, apiName, params) {
        let url = this.apps[appKey]['baseUrl']
            + this.apps[appKey]['api'][apiName];

        return this.request.postJson(url, params);
    }
}
