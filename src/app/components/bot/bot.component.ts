import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css'],
})
export class BotComponent implements OnInit {
  container: HTMLElement;

  constructor(private Apimessage: DataService) { }
  public MessageData = [];
  public OptionData = [];
  public OrderData: any = {
    Username: '',
    PhoneNumber: '',
    Email: '',
    Quantity: '',
    Address: '',
    OrderId: '',
    OrderName: '',
    OrderDescription: '',
    Price: '',
    OrderStatus: '',
  };

  public ResponceData = [];

  // Scroll to Bottom Message's
  ngAfterViewInit() {
    this.container = document.getElementById('chatcontainer');
    this.container.scrollTop = this.container.scrollHeight;
  }
  ngOnInit(): void {
    var x = <HTMLInputElement>document.getElementById('click');

    x.checked = true;
    this.OptionsApi();
    this.DataApi();
  }

  sleep = function (ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  // Get Message Data from DB
  DataApi() {
    this.Apimessage.getData().subscribe((data) => {
      this.MessageData = data;
      console.log(data);

      this.BotMessage(1);
    });
  }
  //Get Options Data From DB
  OptionsApi() {
    this.Apimessage.getOptions().subscribe((option) => {
      this.OptionData = option;
      console.log(this.OptionData);
    });
  }

  // Display Bot Message in view
  async BotMessage(id: number) {
    if (id == 1) {
      this.ResponceData = [];
    }
    var msg = this.MessageData[id - 1].text;
    var chatask = document.createElement('div');
    chatask.classList.add('chat-response');
    chatask.classList.add('activated');
    chatask.innerHTML = msg;
    document.getElementById('chatcontainer').appendChild(chatask);

    // Wait to display Options
    this.ngAfterViewInit();
    // await this.sleep(1500);
    this.ngAfterViewInit();
    this.BotOptions(id);
    this.ngAfterViewInit();
  }
  // Display Bot Text In Chat UI
  async BotMsgText(data: any) {
    var chatask = document.createElement('div');
    chatask.classList.add('chat-response');
    chatask.classList.add('activated');
    chatask.innerHTML = data;
    await this.sleep(1500);
    document.getElementById('chatcontainer').appendChild(chatask);
    this.GetDate('datebot');
    this.ngAfterViewInit();
  }
  // Remove Input Field Data
  removetext() {
    (<HTMLInputElement>document.getElementById('message')).value = '';
  }
  // Display Usr Message in Chat UI
  async UserMessage(data: any) {
    var chatres = document.createElement('div');
    chatres.classList.add('chat-ask');
    chatres.classList.add('activated');
    if (data == '') {
      chatres.innerHTML = 'please enter your responce';
    } else chatres.innerHTML = data;

    document.getElementById('chatcontainer').appendChild(chatres);
    this.GetDate('dateuser');
    this.ngAfterViewInit();
  }
  // Display Bot Options Related To Message
  BotOptions(id: number) {
    const choices = document.createElement('div');
    choices.classList.add('choices');
    this.OptionData.forEach(async (options) => {
      if (options.mid == id) {
        // If Bot Message Have No Options
        if (options.choice == 'NO') {
          console.log(options.next);
          await this.sleep(1500);
          this.ngAfterViewInit();
          this.BotMessage(options.next);
        } 
        // if Bot message require User Input
        else if (options.choice == 'INFO') {
         
          var disptype = document.getElementsByClassName('chat-type')[0];
          disptype.classList.remove('show-type');
          // checking Order Status
          if (options.id == 2) 
          {
            let HandleEvent = 0;
            var Aoption = <HTMLInputElement>document.getElementById('message');
            Aoption.addEventListener(
              'change',
              async (e) => {
                e.stopPropagation();
                if (HandleEvent == 0) {
                  var id: number = parseInt(Aoption.value);
                  // Geting Order Status Based On ID
                  this.Apimessage.getOrderStatus(id).subscribe(async (data) => {
                    console.log(data);
                    let size = data.length;
                    // display order status in chat window
                    if (data.length != 0) {  
                      this.hideinput();
                      this.ngAfterViewInit();
                      this.BotMsgText(data[0].OrderStatus);

                      this.ngAfterViewInit();
                      await this.sleep(5000);
                      this.BotMessage(1);
                    } 
                    // if User Enter Wrong Order ID
                    else 
                    {
                      this.BotMsgText(`There is No Order Placed With This --> ${id} ID`);
                      this.ngAfterViewInit();
                      await this.sleep(1500);
                      this.BotMessage(2);
                    }
                  });

                  HandleEvent++;
                }
              },
              false
            );
            await this.sleep(1500);
          }
          // Taking ordr Quantity From user
           else if (options.id == 12) {
            let HandleEvent = 0;
            var Aoption = <HTMLInputElement>document.getElementById('message');
            Aoption.addEventListener('change', async (e) => {
              e.stopPropagation();
              if (HandleEvent == 0) {
                let regexpNumber = new RegExp(/^([1-5])$/);
                if (regexpNumber.test(Aoption.value)) {
                  this.OrderData.Quantity = Aoption.value;
                  await this.sleep(1500);
                  this.hideinput();
                  this.BotMessage(options.next);
                } 
                // If User Enter Wrong Quantity
                else
                 {
                  await this.sleep(1500);
                  this.UserMessage('Invalid Quantity');
                  await this.sleep(1500);
                  this.BotMessage(6);
                 
                }
              }
              HandleEvent++;
            });
          } 
          // Taking User UserName
          else if (options.id == 14) {
            let HandleEvent = 0;
            var Aoption = <HTMLInputElement>document.getElementById('message');
            Aoption.addEventListener('change', async (e) => {
              e.stopPropagation();
               if (HandleEvent == 0) {
                let regexpNumber = new RegExp(/[a-zA-Z_ ]/);
                if (regexpNumber.test(Aoption.value)) {
                  this.OrderData.Username = Aoption.value;
                  await this.sleep(1500);
                  this.BotMessage(options.next);
                } 
                // If User Enter Wrong Username
                else
                {
                  await this.sleep(1500);
                  this.UserMessage('Invalid Name');
                  await this.sleep(1500);
                  this.BotMessage(8);
                }
              }
              HandleEvent++;
            });
          } 
          // Geting  Phone Number From User
          else if (options.id == 15) {
            let HandleEvent = 0;
            var Aoption = <HTMLInputElement>document.getElementById('message');
            Aoption.addEventListener('change', async (e) => {
              e.stopPropagation();
              if (HandleEvent == 0) {
                let regexpNumber = new RegExp(/^\d{10}$/);
                if (regexpNumber.test(Aoption.value)) {
                  this.OrderData.PhoneNumber = Aoption.value;
                  await this.sleep(1500);
                  this.BotMessage(options.next);
                } 
                // If User Enter Wrong Phone Number
                else {
                  await this.sleep(1500);
                  this.UserMessage('Invalid Phone Number');
                  await this.sleep(1500);
                  this.BotMessage(9);
                }
              }
              HandleEvent++;
            });
          } 
          // Taking Email 
          else if (options.id == 16) {
            let HandleEvent = 0;
            var Aoption = <HTMLInputElement>document.getElementById('message');
            Aoption.addEventListener('change', async (e) => {
              e.stopPropagation();
              if (HandleEvent == 0) {
                let regexpNumber = new RegExp(
                  /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/
                );
                if (regexpNumber.test(Aoption.value)) {
                  this.OrderData.Email = Aoption.value;
                  await this.sleep(1500);
                  this.BotMessage(options.next);
                }
                // If User Enter Wrong Email Address
                 else {
                  await this.sleep(1500);
                  this.UserMessage('Invalid Email ID');
                  await this.sleep(1500);
                  this.BotMessage(10);
                }
              }
              HandleEvent++;
            });
          }
          // Taking User Address 
          else if (options.id == 17) {
            let HandleEvent = 0;
            var Aoption = <HTMLInputElement>document.getElementById('message');

            Aoption.addEventListener('change', async (e) => {
              e.stopPropagation();
              // console.log(Aoption);
              if (HandleEvent == 0) {
                // console.log(Aoption.value);
                this.OrderData.Address = Aoption.value;
                this.InsertUser();
                // Store Order Data in DataBase
                this.PlaceOrder();
                await this.sleep(1500);

                this.BotMessage(options.next);
              }
              HandleEvent++;
            });
          } else {
            this.BotMessage(options.next);
          }
        } 
        // Display Options 
        else {
          
          var option = document.createElement('button');
          option.classList.add('choice');
          option.classList.add('activated');
          option.innerHTML = options.choice;
          option.dataset.next = options.next;

          // If Usr Click On Option
          option.addEventListener('click', async () => {
            // console.log("data",option.dataset.next);
            let OD = option.innerText;
            if (OD != 'OrderPizza' && OD != 'Track Order') {
              this.ResponceData.push(option.innerText);
              
            }

            var val = parseInt(option.dataset.next);
            var a = document.getElementsByClassName('choices');
            choices.classList.add('hideoption');
            // await this.sleep(1500);
            this.UserMessage(option.innerHTML);
            await this.sleep(1500);
            this.BotMessage(val);
          });
          // this.sleep(1500);
          choices.appendChild(option);
        }

        document.getElementById('chatcontainer').appendChild(choices);
      }
    });
    this.GetDate('datebot');
  }
  // Clear Input Field Data and Hide input Field
  hideinput() {
    var disptype = document.getElementsByClassName('chat-type')[0];
    disptype.classList.add('show-type');
  }
  // post User Data to DataBase
  InsertUser() {
    this.Apimessage.postuser(
      this.OrderData.Username,
      this.OrderData.Email,
      this.OrderData.PhoneNumber
    ).subscribe((data) => {
      console.log(data);
    });
  }
  // Place Order and Insert Data to DB
  PlaceOrder() {
    this.OrderData.OrderId =
      Math.floor(Math.random() * (9 * Math.pow(10, 5))) + Math.pow(10, 5);
    this.OrderData.OrderName = this.ResponceData[0];
    this.OrderData.OrderDescription = `your ${this.ResponceData[1]} ${this.ResponceData[0]} with ${this.ResponceData[2]} is Orderd Successfully \nwith OrderID ${this.OrderData.OrderId}`;
    this.BotMsgText(this.OrderData.OrderDescription);
    this.OrderData.OrderStatus = 'Order Placed soon you will get your pizza';
    this.OrderData.Price =
      this.ResponceData[0] == 'Veg Pizza'
        ? 150 * this.OrderData.Quantity
        : 200 * this.OrderData.Quantity;
    this.Apimessage.postOrder(
      this.OrderData.OrderId,
      this.OrderData.OrderName,
      this.OrderData.OrderDescription,
      this.OrderData.Price,
      this.OrderData.Email,
      this.OrderData.OrderStatus
    ).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => console.log(error)
    );
  }
  //Insert Date
  GetDate(className: string) {
    let date = new Date();
    let Hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    let AP = date.getHours() >= 12 ? 'PM' : 'AM';
    let min =
      date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
    let day = ['sun', 'mon', 'tue', 'Wed', 'thu', 'Fri', 'Sat'];
    let Time = day[date.getDay()] + ' ' + Hour + ':' + min + ' ' + AP;
    var InsertDate = document.createElement('div');
    InsertDate.classList.add(className);
    InsertDate.classList.add('activated');
    InsertDate.innerHTML = Time;
    document.getElementById('chatcontainer').appendChild(InsertDate);
  }
}
