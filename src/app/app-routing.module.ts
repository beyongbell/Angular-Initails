import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Import Component
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'index',    redirectTo: '', pathMatch: 'full' },
  { path: '',          component: HomeComponent  },
  { path: 'about',     component: AboutComponent },
  { path: 'blog',      component: BlogComponent  },
  { path: '**',        component: PageNotFoundComponent }
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
