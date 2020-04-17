import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: 'home', loadChildren: './views/home/home.module#HomeModule' },
  // { path: 'infinitescroll', loadChildren: './views/about/about.module#AboutModule' },
  // { path: 'virtualscroll', loadChildren: './views/virtualscroll/virtualscroll.module#VirtualScrollModule' },
  // { path: 'cdkscroll', loadChildren: './views/cdkscroll/cdkscroll.module#CdkScrollModule' },
  { path: 'home', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'infinitescroll', loadChildren: () => import('./views/about/about.module').then(m => m.AboutModule) },
  { path: 'virtualscroll', loadChildren: () => import('./views/virtualscroll/virtualscroll.module').then(m => m.VirtualScrollModule) },
  { path: 'cdkscroll', loadChildren: () => import('./views/cdkscroll/cdkscroll.module').then(m => m.CdkScrollModule) },
  { path: 'notfound', loadChildren: () => import('./views/not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: '**', redirectTo: '/notfound', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
