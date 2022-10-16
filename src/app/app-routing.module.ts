import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HomeComponent } from './home/home.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { RtguardGuard } from './rtguard.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', canActivate: [RtguardGuard], component: HomeComponent },
  { path: 'pipedemo', component: PipedemoComponent },
  { path: 'pipedemo/:id', component: PipedemoComponent },
  { path: '**', component: ErrorpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }