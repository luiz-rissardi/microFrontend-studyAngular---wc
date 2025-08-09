import { bootstrapApplication, createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { createCustomElement } from "@angular/elements"
import { App } from './app/app';
import { Home } from './app/components/home/home';

// bootstrapApplication(App, appConfig)
//   .then(appref => {
//     const injector = appref.injector;
//     const el = createCustomElement(Home,{injector})
//     customElements.define("wc-home",el);
//   })
//   .catch((err) => console.error(err));


createApplication(appConfig)
  .then(app => {
    const wc = createCustomElement(Home, { injector: app.injector });
    customElements.define('wc-home', wc);
  })
  .catch(err => console.error(err));