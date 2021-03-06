import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatCardModule } from '@angular/material/card';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';

import { VirtualScrollRoutingModule } from './virtualscroll-routing.module';
import { VirtualScrollComponent } from './virtualscroll.component';


@NgModule({
  declarations: [VirtualScrollComponent],
  imports: [
    CommonModule,
    MatCardModule,
    ScrollingModule,
    VirtualScrollerModule,
    VirtualScrollRoutingModule
  ]
})
export class VirtualScrollModule { }
