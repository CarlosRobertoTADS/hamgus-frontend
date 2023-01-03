import { Component, OnInit } from '@angular/core';
import { FirebaseEstablishmentService } from 'src/app/services/firebase-service-establishment/firebase-establishment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuModel } from 'src/app/models/menuModel';
import { EstablishmentModel } from 'src/app/models/establishment';

@Component({
  selector: 'app-detail-establishment',
  templateUrl: './detail-establishment.component.html',
  styleUrls: ['./detail-establishment.component.scss']
})
export class DetailEstablishmentComponent implements OnInit {
  public loading: any;
  public idEstablishment: any;
  public establishment: any;
  public menuListPrincipal: MenuModel[] | undefined;
  public menuListCombo: MenuModel[] | undefined;
  public menuListPromocao: MenuModel[] | undefined;
  public menuListMaisPedidos: MenuModel[] | undefined;
  public menuListGerais: MenuModel[] | undefined;

  constructor(private firebaseEstablishmentService: FirebaseEstablishmentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idEstablishment = this.route.snapshot.paramMap.get('id');
    this.firebaseEstablishmentService.getId(this.idEstablishment).subscribe(resp => {
      this.establishment = resp;
    });
    this.loading = true;
    this.firebaseEstablishmentService.getMenu(this.idEstablishment).subscribe(resp => {
      console.log(resp);
      this.menuListPrincipal = resp.filter(f => f.categoryMenu === 'Principal' && f.statusActive === true);
      this.menuListCombo = resp.filter(f => f.categoryMenu === 'Combo' && f.statusActive === true);
      this.menuListPromocao = resp.filter(f => f.categoryMenu === 'Promoção' && f.statusActive === true);
      this.menuListMaisPedidos = resp.filter(f => f.categoryMenu === 'Mais Pedidos' && f.statusActive === true);
      this.menuListGerais = resp.filter(f => f.categoryMenu === 'Gerais' && f.statusActive === true);
      this.loading = false;
    });
  }

}
