import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './app/home/home.component';
import { provideRouter, RouterModule } from '@angular/router';
import routeConfig from './app/route';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="./assets/logo.svg" alt="logo" />
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  imports: [HomeComponent, RouterModule],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideRouter(routeConfig)],
}).catch((err) => console.error(err));
