import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-display-order',
  templateUrl: './display-order.component.html',
  styleUrls: ['./display-order.component.css']
})
export class DisplayOrderComponent implements OnInit {

  constructor(private Apimessage: DataService) { }
  public OrderDetails=[];

  ngOnInit(): void {
    this.GetOrderApi();
  }

  GetOrderApi(){
    this.Apimessage.getOrders().subscribe((data)=>{
      this.OrderDetails=data;
      // console.log(data);
      
    })
  }

  Update(id:number,name:string,status:string){
    var table=<HTMLInputElement>document.getElementsByClassName('details')[0];
    var form=<HTMLInputElement>document.getElementsByClassName('form')[0];
    let oid=<HTMLInputElement>document.getElementById('orderid');
    let oname=<HTMLInputElement>document.getElementById('itemname');
    let ostatus=<HTMLInputElement>document.getElementById('OrderStatus');
    
    oid.value=String(id);
    oname.value=name;
    ostatus.value=status;
    // console.log("id=",id);
    // console.log("name",name);
    // console.log("status ",status);
    
    table.classList.add('tablehide');
    form.classList.remove('formhide');
    
  }
  Submit(){
    var table=<HTMLInputElement>document.getElementsByClassName('details')[0];
    var form=<HTMLInputElement>document.getElementsByClassName('form')[0];
    table.classList.remove('tablehide');
    form.classList.add('formhide');
    // console.log("submited");
    

  }

  UpdateStatus(id:number,data:string){
    this.Apimessage.putOrderStatus(id,data).subscribe((ele)=>{
      this.GetOrderApi();
      console.log(data);
      
    })
    console.log(id," ",data);

    
  }

}
