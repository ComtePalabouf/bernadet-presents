import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule, NgbRadioGroup } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NameListComponent } from "./components/name-list/name-list.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, NameListComponent],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [NgbRadioGroup],
  bootstrap: [AppComponent]
})
export class AppModule {}
