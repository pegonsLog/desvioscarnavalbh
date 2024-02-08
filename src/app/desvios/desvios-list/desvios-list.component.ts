import { Component, OnInit } from '@angular/core';
import { DesviosService } from '../desvios.service';
import { MatDialog } from '@angular/material/dialog';
import { Observable, map } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-desvios-list',
  templateUrl: './desvios-list.component.html',
  styleUrls: ['./desvios-list.component.scss'],
})
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
    throw new Error('Method not implemented.');
  }
  onSearch() {
    throw new Error('Method not implemented.');
  }
}
