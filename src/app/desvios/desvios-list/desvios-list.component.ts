<<<<<<< HEAD
import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Desvios } from 'src/app/model/desvio';
=======
import { Component, OnInit } from '@angular/core';
import { DesviosService } from '../desvios.service';
import { MatDialog } from '@angular/material/dialog';
import { Observable, map } from 'rxjs';
import { FormControl } from '@angular/forms';
>>>>>>> e6e9712b7d3ac68db7933ab6e7c5c8b136c3f532

@Component({
  selector: 'app-desvios-list',
  templateUrl: './desvios-list.component.html',
  styleUrls: ['./desvios-list.component.scss'],
})
<<<<<<< HEAD
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
=======
export class DesviosListComponent {
  public desviosFire$: Observable<any>;
  queryField!: FormControl<any>
  value: string = '';

  constructor(
    private desviosService: DesviosService,
    public dialog: MatDialog
  ) {
    this.desviosFire$ = desviosService
      .list()
      .pipe(
        map((result) => result.sort((a, b) => a.linha!.localeCompare(b.linha!)))
      );
  }

  blocos() {
    throw new Error('Method not implemented.');
  }
  load() {
>>>>>>> e6e9712b7d3ac68db7933ab6e7c5c8b136c3f532
    throw new Error('Method not implemented.');
  }
  onSearch() {
    throw new Error('Method not implemented.');
  }
}
