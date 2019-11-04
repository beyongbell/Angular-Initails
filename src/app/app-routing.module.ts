import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Import Component
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '',         component: HomeComponent},
  { path: 'about',    component: AboutComponent    },
  { path: 'services', component: ServicesComponent },
  { path: 'blog',     component: BlogComponent     },
  { path: '**',       component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const RouterComponents = [
//   HomeComponent,
//   AboutComponent,
//   ServicesComponent,
//   BlogComponent
// ];
