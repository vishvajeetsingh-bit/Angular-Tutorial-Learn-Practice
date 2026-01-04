import { Routes } from '@angular/router';
import { Login } from './login/login';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { Profile } from './profile/profile';
import { User } from './user/user';
import { Admin } from './admin/admin';

export const routes: Routes = [
  {path: 'login',loadComponent:()=>import('./login/login').then(m=>m.Login)},
  {path:'about',loadComponent:()=>import('./about/about').then(m=>m.About)},
  {path:'contact',loadComponent:()=>import('./contact/contact').then(m=>m.Contact)},
  {path:'',loadComponent:()=>import('./home/home').then(m=>m.Home)},
  {path:'profile',loadComponent:()=>import('./profile/profile').then(m=>m.Profile),data:{name:'Vishvajeet Singh'}},
  {path:'user/:id/:name',loadComponent:()=>import('./user/user').then(m=>m.User)},
  {path:'admin',loadComponent:()=>import('./admin/admin').then(m=>m.Admin)},
  {path:'**',loadComponent:()=>import('./page-not-found/page-not-found').then(m=>m.PageNotFound)}
];
 