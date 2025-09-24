import { Contact } from '../components/contact/contact';
import { Portfolio } from '../components/portfolio/portfolio';
import { About } from '../components/about/about';
import { Routes } from '@angular/router';
import { Notfound } from '../components/notfound/notfound';
export const routes: Routes = [
  { path: "", redirectTo: "about", pathMatch: "full" },
  { path: "about", component: About, title: 'About' }
  , { path: "portfolio", component: Portfolio, title: "Portfolio" },
  { path: "contact", component: Contact, title: "contact" },
  { path: "**", component: Notfound, title: "notfound" }
];
