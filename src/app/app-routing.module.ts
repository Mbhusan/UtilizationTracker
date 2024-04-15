import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  // {path: "login", component: LoginComponent},
  { path: "dashboard", component: DashboardComponent },
  { path: "layout", component: LayoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
