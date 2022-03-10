import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable} from 'rxjs';

const SERVER_API = 'https://krypto-serv.herokuapp.com/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  cuurentToken: any;

  constructor(private http: HttpClient) { }

  getData() : Observable<any> {
    return this.http.get(SERVER_API + 'getdata',{
      observe: 'response',
    })
  }
  getcoinData(uuid: any) : Observable<any> {
    return this.http.post(SERVER_API + 'getcoinData',{
      uuid : uuid
    })
  }
  register(user : any): Observable<any> {
    return this.http.post(SERVER_API + 'signup', {
      email: user.email,
      password: user.password,
      phonenumber: user.phonenumber
    }, httpOptions);
  }
  login(credentials : any ): Observable<any> {

    return this.http.post(SERVER_API + 'signin', {
      email: credentials.email,
      password: credentials.password
    }, httpOptions);
  }
  addtofav(user : any ): Observable<any> {
    return this.http.post(SERVER_API + 'fav', {
    iconUrl: user.iconUrl,
    name: user.name,
    change: user.change,
    price: user.price,
    marketcap: user.marketcap,
    userId: user.userId,
    isFav: user.isFav,
    }, httpOptions);
  }
  getfav(user : any ): Observable<any> {
    return this.http.post(SERVER_API + 'getfav', {
    userId: user.userId,
    }, httpOptions);
  }
  delfav(user : any ): Observable<any> {
    return this.http.post(SERVER_API + 'delfav', {
    userId: user.userId,
    name:user.name
    }, httpOptions);
  }
  addNFT(user : any , userId : any ): Observable<any> {
    return this.http.post(SERVER_API + 'addnft', {
    name: user.name,
    price: user.price,
    iconUrl:user.icon,
    userId: userId
    }, httpOptions);
  }
  getNFT(user : any ): Observable<any> {
    return this.http.post(SERVER_API + 'getnft', {
    userId: user.userId,
    }, httpOptions);
  }
  delNFT(user : any ): Observable<any> {
    return this.http.post(SERVER_API + 'delnft', {
    userId: user.userId,
    name:user.name
    }, httpOptions);
  }
  updateCred(user : any ): Observable<any> {
    console.log(user.data);
    return this.http.post(SERVER_API + 'update', {
    email:user.email,
    name:user.name, 
    photo:user.photo
    }, httpOptions);
  }
}
