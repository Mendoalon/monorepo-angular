import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoutRouteComponent } from './not-fout-route/not-fout-route.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([
    {
      path: '',
      component: NotFoutRouteComponent
    }
  ])],
  declarations: [NotFoutRouteComponent],
})
export class NotFoutModule {}
