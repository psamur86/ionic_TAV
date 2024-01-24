import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { Task } from '../models/task.model';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.urlBase;
  private endpoint = environment.endpoints.users;
  private endpointTask = environment.endpoints.tasks;
  utilsSvc =inject(UtilsService);

  constructor(private http: HttpClient) { }

  createUser(user: User) {
    const url = `${this.apiUrl}/${this.endpoint}/register`;
    const headers = new HttpHeaders().set('x-tenant-id', '65a1df494fce9ceca47950b3');
    const body = {
      name: user.name,
      email: user.email,
      password: user.password
    };

    const request = this.http.post(url, body, { headers });
    console.log(request);
    return request;
  }

  loginUser(email: string, password: string) {
    const url = `${this.apiUrl}/${this.endpoint}/login`;
    const headers = new HttpHeaders().set('x-tenant-id', '65a1df494fce9ceca47950b3');
    const body = {
      email,
      password
    };

    const request = this.http.post(url, body, { headers });

    return request;
  }
 
  signOut() {
    // await this.auth.signOut();
    this.utilsSvc.routerLink('/auth');
    // this.utilsSvc.removeFromLocalStorage('user');
  }
  
  
  /*TODO: TASK */
  createTask(task: Task) { 
    const token = this.utilsSvc.getFromLocalStorage('user-token');
    
    const url = `${this.apiUrl}/${this.endpointTask}/`;
    const headers = new HttpHeaders()
      .set('x-tenant-id', '65a08d5f8dbd709da49b2fdb')
      // .set('Authorization', token);
  
    const body = {
      title: task.title,
      description: task.description,
      completed: task.completed,
      state: task.state,
      activities: task.activities,
      owner: task.owner,
    };
  
    const request = this.http.post(url, body, { headers });
    return request;
  }
  
  
  updateTask(task: Task) {
    const url = `${this.apiUrl}/${this.endpointTask}/createTask`;
    const headers = new HttpHeaders().set('x-tenant-id', '65a08d5f8dbd709da49b2fdb');
    const body = {
      title: task.title,
      description: task.description,
      completed: task.completed,
      state: task.state,
      activities: task.activities,
      owner: task.owner,
    };
  
    const request = this.http.post(url, body, { headers });
    return request;
  }
  
  getTask(task: Task) {
    const url = `${this.apiUrl}/${this.endpointTask}/getAllTask`;
    const headers = new HttpHeaders().set('x-tenant-id', '65a08d5f8dbd709da49b2fdb');
  
    const request = this.http.get(url, { headers });
    return request;
  }
  
}


