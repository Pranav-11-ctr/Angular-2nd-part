import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo List';
  list:any[]=[]
  addTask(data:string)
  {
    
    this.list.push({id:this.list.length,name:data})
    console.warn(this.list)
  }
  removeTask(id:number)
  {
    console.warn(id)
    this.list=this.list.filter(data=>data.id!==id)
    
  }
}
