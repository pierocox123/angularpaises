import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorpaisComponent } from './pages/porpais/porpais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';




@NgModule({
  declarations: [
    PorCapitalComponent,
    PorpaisComponent,
    PorRegionComponent,
    VerPaisComponent,
    PaisTablaComponent
  ],
  exports: [
    PorCapitalComponent,
    PorpaisComponent,
    PorRegionComponent,
    VerPaisComponent],

  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ]
})
export class PaisModule { }
