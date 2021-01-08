import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RxjsComponent } from "./containers/rxjs/rxjs.component";

const routes: Routes = [{ path: "rx", component: RxjsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RxjsRoutingModule {}
