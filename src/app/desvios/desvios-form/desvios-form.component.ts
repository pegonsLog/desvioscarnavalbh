import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-desvios-form',
  templateUrl: './desvios-form.component.html',
  styleUrls: ['./desvios-form.component.scss']
})
export class DesviosFormComponent implements OnInit {

nomeFormulario: any;
form!: FormGroup;

onCancel() {
throw new Error('Method not implemented.');
}
onSubmit() {
throw new Error('Method not implemented.');
}

  constructor() { }

  ngOnInit(): void {
  }

}
