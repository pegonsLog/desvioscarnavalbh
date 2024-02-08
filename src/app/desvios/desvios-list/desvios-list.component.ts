import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Desvios } from 'src/app/model/desvio';

@Component({
  selector: 'app-desvios-list',
  templateUrl: './desvios-list.component.html',
  styleUrls: ['./desvios-list.component.scss'],
})
export class DesviosListComponent implements OnInit {
  desviosFire$: Observable<any>;
  firestore: Firestore = inject(Firestore);
  queryField = new FormControl();

  constructor() {
    const itemCollection = collection(this.firestore, 'desvios');
    this.desviosFire$ = collectionData(itemCollection);
  }

  ngOnInit(): void {}
  blocos() {
    throw new Error('Method not implemented.');
  }
  clear() {
    throw new Error('Method not implemented.');
  }
  onSearch() {
    throw new Error('Method not implemented.');
  }
}
