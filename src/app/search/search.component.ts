import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchStr:string;
  minLength:number=3;
  isLoaded:boolean=false;
  user:any;
  constructor(private userservice:UsersService) { }

  ngOnInit() {

  }
  handleChange(){
   if(this.minLength <= this.searchStr.length){
        this.userservice.getUser(this.searchStr).subscribe(user=>{
           this.user=user
           this.isLoaded=true;
        })

  }
}}
