import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'console',
        },
        {
          path: 'console',
          loadChildren: () =>
            import('./console/console.module').then(m => m.ConsoleModule),
        },
        {
          path: 'landing',
          loadChildren: () =>
            import('./landing/landing.module').then(m => m.LandingModule),
        },
        {
          path: '**',
          redirectTo: 'console',
        },
      ],
      { relativeLinkResolution: 'legacy' },
    ),
  ],
})
export class AppRoutingModule {}
