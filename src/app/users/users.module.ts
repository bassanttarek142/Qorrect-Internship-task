import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserHeaderComponent } from './user-header/user-header.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ActivateComponent } from './activate/activate.component';
import { DeactivatedComponent } from './deactivated/deactivated.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: UserHeaderComponent },
      { path: 'create-user', component: CreateUserComponent },
      { path: 'activate', component: ActivateComponent },
      { path: 'deactivated', component: DeactivatedComponent }
    ])
  ],
  exports: [RouterModule]
})
export class UsersModule {}
