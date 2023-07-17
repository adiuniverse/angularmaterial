import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  baseUrl = "http://localhost:3000/student"
  submitData(formdata : any){
    return this.http.post(this.baseUrl,formdata)
  }

  fetchData(){
    return this.http.get(this.baseUrl)
  }

  deleteData (id:number){
    return this.http.delete(this.baseUrl+id)
  }

  updateData(id: number,formdata:any){
    return this. http.put(this.baseUrl+id, formdata)
  }
}
