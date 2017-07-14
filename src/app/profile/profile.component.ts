import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { DbService } from 'app/db.service'

@Component({
  selector: 'app-profile',
  template: `
    <p>
      id : {{student.id}} <br>
      name : {{student.name}} <br>
      stuID : {{student.stuID}} <br>
      email : {{student.email}}
    </p>
  `,
  styles: []
})
export class ProfileComponent implements OnInit {
  id: number;
  student
  constructor(private route: ActivatedRoute, private db: DbService) { 
    route.params.subscribe(x=>this.id = x['id'])
    let students = this.db.getData();
    if (students){
      students.forEach((data) => 
      {console.log(data)
        if (data.id == this.id){console.log(data.id)
          this.student = data;
        }
      })
    }
  }

  ngOnInit() {
  }

}
