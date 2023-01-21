import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { LayoutComponent } from './layout/layout.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { RootGuard } from './root.guard';
import { UserService } from './user.service';
import { DetailUserComponent } from './user/detail-user/detail-user.component';


@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule,AppRoutingModule],
  declarations: [AppComponent, LoginComponent, LayoutComponent, AddUserComponent,ListUserComponent,EditUserComponent,DetailUserComponent],
  bootstrap: [AppComponent, LoginComponent],
  providers: [RootGuard, UserService]
})
export class AppModule {}
