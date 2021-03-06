import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppareilComponent } from "./appareil/appareil.component";
import { AppareilService } from "./service/appareil.service";
import { AuthComponent } from "./auth/auth.component";
import { AppareilViewComponent } from "./appareil-view/appareil-view.component";
import { AuthService } from "./service/auth.service";
import { SingleAppareilComponent } from "./single-appareil/single-appareil.component";

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [AppareilService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
