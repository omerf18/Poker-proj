import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableCmp } from './pages/table/table.cmp';

const appRoutes: Routes = [
  { path: '', redirectTo: '/table', pathMatch: 'full' },
  {
    path: 'table', component: TableCmp, children: [
      //     { path: '', component: StartDetailsComponent },
      //     { path: 'new', component: RecipeEditComponent },
      //     { path: ':id', component: RecipeDetailsComponent, resolve: [RecipeResolverService] },
      //     {
      //       path: ':id/edit', component: RecipeEditComponent,
      //       resolve: [RecipeResolverService]
      //     }
    ]
  },
  // { path: 'shopping-list', component: ShoppingListComponent },
  // { path: 'auth', component: AuthCmp }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
