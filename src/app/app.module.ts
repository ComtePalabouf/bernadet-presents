import { GiftService } from "./services/gift.service";
import { NamesService } from "src/app/services/names.service";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule, NgbRadioGroup } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NameListComponent } from "./components/name-list/name-list.component";
import { FormsModule } from "@angular/forms";
import { GiftListComponent } from "./components/gift-list/gift-list.component";

@NgModule({
  declarations: [AppComponent, NameListComponent, GiftListComponent],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [NgbRadioGroup, NamesService, GiftService],
  bootstrap: [AppComponent]
})
export class AppModule {}
