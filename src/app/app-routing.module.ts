import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    loadComponent: () => import('./pages/about-me/about-me.component').then(c => c.AboutMeComponent),
    title: 'About'
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog.component').then(c => c.BlogComponent),
    title: 'Blog'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(c => c.ContactComponent),
    title: 'Contact'
  },
  {
    path: '**',
    redirectTo: 'about'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
