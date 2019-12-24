import { Component, OnInit , Input} from '@angular/core';

import { freeApiService } from '../services/freeapi.service'
import { Comments } from '../classes/comments';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  @Input() public parentData;
  constructor(private _freeapiservice: freeApiService) {
    
  }

  lstComments: Comments[];
  
  ngOnInit() {
    this._freeapiservice.getComments().subscribe(
      data => {
        this.lstComments = data;
      }
    )
  }

  clickfunciton(postID) {
    console.log("clicked : " + postID)
  }

}
