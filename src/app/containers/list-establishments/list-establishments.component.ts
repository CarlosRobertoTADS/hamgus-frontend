import { Component, OnInit } from '@angular/core';
import { EstablishmentModel } from 'src/app/models/establishment';
import { FirebaseEstablishmentService } from 'src/app/services/firebase-service-establishment/firebase-establishment.service';

@Component({
  selector: 'app-list-establishments',
  templateUrl: './list-establishments.component.html',
  styleUrls: ['./list-establishments.component.scss']
})
export class ListEstablishmentsComponent implements OnInit {
  public loading: any;
  public establishmentListRestaurant: EstablishmentModel[] | undefined;
  public establishmentListCafeteria: EstablishmentModel[] | undefined;
  public establishmentListBakery: EstablishmentModel[] | undefined;
  public establishmentListJapanese: EstablishmentModel[] | undefined;

  constructor(private firebaseEstablishmentService: FirebaseEstablishmentService) {

  }

  title = 'hamgus-frontend';

  ngOnInit(): void {
    this.loading = true;
    this.firebaseEstablishmentService.getAllEstablishments().subscribe(resp => {
      console.log(resp);
      this.establishmentListRestaurant = resp.filter(f => f.idTypeRestaurant === 3 && f.statusActive === true);
      this.establishmentListCafeteria = resp.filter(f => f.idTypeRestaurant === 1 && f.statusActive === true);
      this.establishmentListBakery = resp.filter(f => f.idTypeRestaurant === 4 && f.statusActive === true);
      this.establishmentListJapanese = resp.filter(f => f.idTypeRestaurant === 2 && f.statusActive === true);
      this.loading = false;
    });
  }
}
