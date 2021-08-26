import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoaderComponent } from "./components/loader/loader.component";
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [LoaderComponent, ErrorComponent],
  entryComponents: [LoaderComponent],
  imports: [CommonModule],
  exports: [LoaderComponent]
})
export class SharedModule {}
