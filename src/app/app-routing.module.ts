import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Import Component
import { HomeComponent } from '@pages/home/home.component';
import { AboutComponent } from '@pages/about/about.component';
import { BlogComponent } from '@pages/blog/blog.component';
import { PageNotFoundComponent } from '@pages/page-not-found/page-not-found.component';

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
