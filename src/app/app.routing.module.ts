import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { RootGuard } from './root.guard';
import { DetailUserComponent } from './user/detail-user/detail-user.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      {
        path: 'listuser',
        component: ListUserComponent,
        canActivate: [RootGuard],
      },
      {
        path: 'adduser',
        component: AddUserComponent,
        canActivate: [RootGuard],
      },
      {
        path: 'edituser',
        component: EditUserComponent,
        canActivate: [RootGuard],
      },
      {
        path: 'detail-user',
        component: DetailUserComponent,
        canActivate: [RootGuard],
      },

      { path: '**', redirectTo: 'login' },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
