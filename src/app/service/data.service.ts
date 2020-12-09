import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private DataUrl="https://backendchatbot.herokuapp.com/message";
  private UserUrl="https://backendchatbot.herokuapp.com/user";
  private OrderUrl="https://backendchatbot.herokuapp.com/order";
  private OptionUrl="https://backendchatbot.herokuapp.com/options";
  private Order="https://backendchatbot.herokuapp.com/order";
  

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    return this.http.get(this.DataUrl);
  }
  getOptions():Observable<any>{
    return this.http.get(this.OptionUrl);
  }

  getOrders():Observable<any>{
    return this.http.get(this.Order);
  }

  getOrderStatus(id:number):Observable<any>{
    return this.http.get(`${this.OrderUrl}/${id}`);
  }
  putOrderStatus(id:number,data:string):Observable<any>{
    const obj={OrderStatus:data}
    return this.http.put(`${this.OrderUrl}/${id}`,obj);
      
    
  }
  postOrder(OrderId:number,itemName:string,OrderDescription:string,Price:number,UserEmailId:string,OrderStatus:string){

    const obj={OrderId:OrderId,
               itemName:itemName,
               OrderDescription:OrderDescription,
               Price:Price,
               UserEmailId:UserEmailId,
               OrderStatus:OrderStatus
              }
              return this.http.post(`${this.OrderUrl}`,obj);

  }
  postuser(name:string,Email:string,PhoneNo:string){
    const obj={
          name:name,
          Email:Email,
          PhoneNo:PhoneNo
    }
    return this.http.post(`${this.UserUrl}`,obj);
  }

}
