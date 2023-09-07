import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class service {
  getUser(unamer:any){
    return this.Http.get("https://api.github.com/users/"+ unamer +"?access_token=" + environment.githubApi)
    .pipe(((response: any) => response));
  }
  getRepos(repoName:any){
    return this.Http.get("https://api.github.com/users/"+ repoName +"/repos?access_token=" + environment.githubApi)
    .pipe(((response: any) => response));
  }
  constructor(private Http:HttpClient) { }

}
