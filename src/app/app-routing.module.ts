import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailEstablishmentComponent } from './containers/detail-establishment/detail-establishment.component';
import { ListEstablishmentsComponent } from './containers/list-establishments/list-establishments.component';

const routes: Routes = [
  { path: 'home', component: ListEstablishmentsComponent},
  { path: 'detail-establishment/:id', component: DetailEstablishmentComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
