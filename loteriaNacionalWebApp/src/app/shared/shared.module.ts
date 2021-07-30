import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoaderComponent } from "./components/loader/loader.component";

@NgModule({
  declarations: [LoaderComponent],
  entryComponents: [LoaderComponent],
  imports: [CommonModule],
  exports: [LoaderComponent]
})
export class SharedModule {}
