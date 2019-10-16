import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { LogComponent } from "../log/log.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, LogComponent],
  bootstrap: [AppComponent, LogComponent]
})
export class AppModule {}
