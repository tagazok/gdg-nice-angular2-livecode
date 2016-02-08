import { AboutComponent } from "../modules/AboutComponent";
import { Component } from "angular2/core";
import { bootstrap } from "angular2/bootstrap";
import { ContactAppComponent } from "../modules/contacts/ContactAppComponent";

import { Router, RouteConfig, ROUTER_PROVIDERS, RouterOutlet, RouterLink } from "angular2/router";

@RouteConfig([
  { path: "/", name:"Home", component: ContactAppComponent},
  { path: "/about", name:"About", component: AboutComponent }
])

@Component({
  selector: "app",
  template: `
  <nav class="navbar navbar-default navbar-fixed-top">
    <div id="container">
      <div class="navbar-header">
        <a class="navbar-brand text-uppercase" [routerLink]="['Home']">
          My contacts
        </a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav navbar-right">
          <li><a [routerLink]="['About']">About</a></li>
        </ul>
      </div>
    </div>
  </nav>
  <router-outlet></router-outlet>
  `,
  directives: [ContactAppComponent, RouterOutlet, RouterLink],
  providers: [ROUTER_PROVIDERS]
})
export class App {
}

bootstrap(App, []);
