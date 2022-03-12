import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BodyComponent } from './componets/body/body.component';
import { DetailComponent } from './componets/detail/detail.component';
import { ListaPrducComponent } from './componets/lista-prduc/lista-prduc.component';

const routes: Routes = [
  {path: '', redirectTo: 'lista', pathMatch: 'full'},
  {path:'lista', component: ListaPrducComponent},
  {path:'body', component: BodyComponent},
  {path:':id', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
