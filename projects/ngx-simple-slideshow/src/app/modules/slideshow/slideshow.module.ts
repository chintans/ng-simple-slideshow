import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SlideshowComponent } from "./slideshow.component";
import { BrowserTransferStateModule } from "@angular/platform-browser";

@NgModule({
  imports: [CommonModule, BrowserTransferStateModule],
  declarations: [SlideshowComponent],
  exports: [SlideshowComponent],
})
export class SlideshowModule {}
