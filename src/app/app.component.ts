import { Component } from '@angular/core';
import { Customer } from './models/customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Customer Handler Application';
  
  customersArray: Customer[] = [
  	{id:1, name:"Josele", email:"jose@josele.com", address:"Amacuzac"},
  	{id:2, name:"Karla", email:"karla@matin.com", address:"Aguascalientes"},
  	{id:3, name:"Anaid", email:"Anaid@sanchez.com", address:"Monterrey"}
  ];
  
  selectedCustomer: Customer = new Customer();
  
  addOrEdit(){
  	if(this.selectedCustomer.id === 0){
  		this.selectedCustomer.id = this.customersArray.length + 1;
  		this.customersArray.push(this.selectedCustomer);
  	}	
  	this.selectedCustomer = new Customer();
  }
  
  openEdit(customer: Customer){
  	this.selectedCustomer = customer;	
  }
  
  delete(){
  	if(confirm('Are you sure you want to delete it?')){
  		this.customersArray = this.customersArray.filter(x => x != this.selectedCustomer);
  		this.selectedCustomer = new Customer();
  	}
  	
  }
}
