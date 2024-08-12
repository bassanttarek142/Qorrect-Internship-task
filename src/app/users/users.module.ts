import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserHeaderComponent } from './user-header/user-header.component';
import { ActivateComponent } from './activate/activate.component';
import { DeactivatedComponent } from './deactivated/deactivated.component';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: UserHeaderComponent, children: [
          { path: 'activate', component: ActivateComponent },
          { path: 'deactivated', component: DeactivatedComponent },
          { path: '', redirectTo: 'activate', pathMatch: 'full' }
        ]
      },
      { path: 'create-user', component: CreateUserComponent }
    ])
  ],
  exports: [RouterModule]
})
export class UsersModule {}
