import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  imports: [CommonModule,MDBBootstrapModule.forRoot(), RouterModule],
  exports: [RouterModule, MDBBootstrapModule, CommonModule],
})
export class SharedModule {}
