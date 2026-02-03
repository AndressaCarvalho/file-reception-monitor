import { bootstrapApplication } from '@angular/platform-browser';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { App } from './app/app';

bootstrapApplication(App, {
  providers: [
    provideCharts(withDefaultRegisterables())
  ]
});
