import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  getFirestore,
  setDoc,
} from '@angular/fire/firestore';
import { initializeApp } from 'firebase/app';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Desvios } from '../model/desvio';

@Injectable({
  providedIn: 'root',
})
export class DesviosService {
  app = initializeApp(environment.firebase);
  db = getFirestore(this.app);

  constructor(private firestore: Firestore) {}
  list() {
    let $desviosRef = collection(this.firestore, 'desvios');
    return collectionData($desviosRef, {
      idField: 'id',
    }) as Observable<Desvios>;
  }

  findOne(id: string) {
    let $desviosRef = doc(this.db, 'desvios/' + id);
    return docData($desviosRef, {
      // idField: 'id',
    }) as Observable<Desvios>;
  }
  delete(id: string) {
    let $desviosRef = doc(this.db, 'desvios/' + id);
    return deleteDoc($desviosRef);
  }
  add(desvios: Desvios) {
    let $desviosRef = collection(this.db, 'desvios');
    return addDoc($desviosRef, desvios);
  }
  update(desvios: Desvios, id: string) {
    let $desviosRef = doc(this.db, 'desvios/' + id);
    return setDoc($desviosRef, desvios);
  }
}
