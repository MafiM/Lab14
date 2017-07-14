import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { StudentsComponent } from './students/students.component';
import { DbService } from 'app/db.service';
import { ProfileComponent } from './profile/profile.component'
import { AuthorizeGuard } from './authorize.guard'

const MY_ROUTES: Routes = [
  { path:'', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponentComponent},
  { path: 'students', component: StudentsComponent},
  { 
    path: 'profile/:id', 
    component: ProfileComponent,
    canActivate: [AuthorizeGuard]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    StudentsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(MY_ROUTES)
  ],
  providers: [
    DbService,
    AuthorizeGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
