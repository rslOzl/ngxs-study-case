import {Component, OnInit} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {Store} from "@ngxs/store";
import {DenemeAction, DenemeAction1} from "./shared/actions/deneme.action";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private tas:ToastrService,private store:Store) {
  }
  title = 'untitled2';

  ngOnInit() {
    this.tas.success('Haha','Nelson');
  }

  Onclick():void{
    this.tas.error('Haha','Nelson');
    this.store.dispatch(new DenemeAction1('aslan'));

  }
  Onclick1():void{
    this.tas.info('başaralı','Deneme1');
    this.store.dispatch(new DenemeAction('koc'));

  }
}
