import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, CollectionReference, deleteDoc, doc, docData, DocumentData, Firestore, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { EstablishmentModel } from 'src/app/models/establishment';
import { MenuModel } from 'src/app/models/menuModel';

@Injectable({
  providedIn: 'root'
})
export class FirebaseEstablishmentService {
  private establishmentCollection: CollectionReference<DocumentData>;
  private menuEstablishment: CollectionReference<DocumentData> | undefined;

  constructor(private firestore: Firestore) {
    this.establishmentCollection = collection(this.firestore, 'headquarters/1/establishments'); //retornar estabelecimentos da matriz
  }

    //Listar todos estabelecimentos
    getAllEstablishments() {
      return collectionData(this.establishmentCollection, {
        idField: 'id',
      }) as Observable<EstablishmentModel[]>;
    }

    getId(id: string) {
      const establishmentDocumentReference = doc(this.firestore, `headquarters/1/establishments/${id}`);
      return docData(establishmentDocumentReference, { idField: 'id' });
    }

    getMenu(id: string) {
      this.menuEstablishment = collection(this.firestore, `headquarters/1/establishments/${id}/menu`);
      return collectionData(this.menuEstablishment, {
        idField: 'id',
      }) as Observable<MenuModel[]>;
    }

    getIdMenu(id: string, idEstablishment:string) {
      const establishmentDocumentReference = doc(this.firestore, `headquarters/1/establishments/${idEstablishment}/menu/${id}`);
      return docData(establishmentDocumentReference, { idField: 'id' });
    }
}
