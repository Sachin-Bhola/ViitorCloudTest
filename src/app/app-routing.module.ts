import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './services/authguard/authguard.guard';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    canActivate: [AuthguardGuard]
  },
  {
    path: "dashboard",
    loadChildren: () => import('./dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule),
    canActivate: [AuthguardGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
