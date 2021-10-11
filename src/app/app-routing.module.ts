import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogModule } from 'projects/blog/src/app/app.module';
import { PortfolioModule } from 'projects/portfolio/src/app/app.module';

const routes: Routes = [
  {path: 'blog', loadChildren: '../../projects/blog/src/app/app.module#BlogModule'},
  {path: 'portfolio', loadChildren: '../../projects/portfolio/src/app/app.module#PortfolioModule'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BlogModule.forRoot(),
    PortfolioModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
