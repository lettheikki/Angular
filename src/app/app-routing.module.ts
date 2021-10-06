import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // URL path brauseris: "localhost:4200", HomeComponent sisu koos HTML-ga,
                          // mida n2idatakse kasutajale CSS-ga kujundatakse
                          // .ts failidega lisatakse dynaamilisust
  { path: "", component: HomeComponent },
  // kui on brauseris "localhost:4200/ostukorv", siis n2itab cart.compnonent.html-i ja lisasid
  { path: "ostukorv", component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
