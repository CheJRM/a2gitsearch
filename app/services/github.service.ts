import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username:string;
    private client_id = 'fff9f85bb756945222e7';
    private client_secret = '7e1774ad87a9e7240174e78d374854ad3079123d';

    constructor(private _http:Http)
    {
        console.log('Github Service Ready...');
        this.username = 'CheJRM';
    }

    getUser()
    {
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json());
    } 

    getRepos()
    {
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json());
    }

    updateUser(username:string)
    {
        this.username  = username;
    }
}