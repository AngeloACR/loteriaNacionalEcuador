import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "lottery",
    loadChildren: () => import("./lottery/lottery.module").then(m => m.LotteryModule)
  },
  {
    path: "user",
    loadChildren: () => import("./user/user.module").then(m => m.UserModule)
  },
  {
    path: "landing",
    loadChildren: () =>
      import("./landing/landing.module").then(m => m.LandingModule)
  },
  {
    path: "payment",
    loadChildren: () =>
      import("./payment/payment.module").then(m => m.PaymentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
