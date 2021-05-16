import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

const config: ExtraOptions = {
  useHash: false,
  enableTracing: false,
  scrollPositionRestoration: 'enabled',
};

const routes: Routes = [
  {
    path: '',
    redirectTo: 'air/authentication/sign-in',
    pathMatch: 'full'
  },
  {
    path: 'air',
    children: [
      {
        path: 'authentication',
        loadChildren: () => import('./authentication/authentication.module')
          .then(m => m.AuthenticationModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
