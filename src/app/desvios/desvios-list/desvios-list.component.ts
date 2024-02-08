import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { initializeApp } from "firebase/app";
import { collection, getFirestore, query } from "firebase/firestore";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-desvios-list',
  templateUrl: './desvios-list.component.html',
  styleUrls: ['./desvios-list.component.scss'],
})
export class DesviosListComponent implements OnInit {
  desviosFire$!: Observable<any>;
  queryField = new FormControl();

  firebaseConfig = {
    projectId: 'desvioscarnavalbh-cd8d4',
    appId: '1:1031196169704:web:d57ba330b8f0e91bc0405d',
    storageBucket: 'desvioscarnavalbh-cd8d4.appspot.com',
    apiKey: 'AIzaSyDsnYAZ9Xm7lMDiBP_RltO13Waa3mnkNNs',
    authDomain: 'desvioscarnavalbh-cd8d4.firebaseapp.com',
    messagingSenderId: '1031196169704',
    measurementId: 'G-KBPVEN6MVF',
};


app = initializeApp(this.firebaseConfig);

db = getFirestore(this.app);

  constructor() {
    const q = query(collection(this.db, "desvios"))

    console.log(q)
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
