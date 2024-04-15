import { Routes } from '@angular/router';
import {WeatherComponent} from "./weather/weather.component";
import {FedoraComponent} from "./linux/fedora/fedora.component";
import {GrowComponent} from "./grow/grow.component";
import {PrivacyComponent} from "./privacy/privacy.component";
import {LinuxComponent} from "./linux/linux.component";
import {IonosComponent} from "./linux/ionos/ionos.component";
import {CssGridComponent} from "./software-development/css-grid/css-grid.component";
import {NginxComponent} from "./linux/nginx/nginx.component";
import {TorComponent} from "./tor/tor.component";
import {UsefulSitesComponent} from "./useful-sites/useful-sites.component";
import {SoftwareDevelopmentComponent} from "./software-development/software-development.component";
import {WhereIsTruthComponent} from "./where-is-truth/where-is-truth.component";


export const routes: Routes = [{ path: 'weather', component: WeatherComponent },
  {path: 'fedora', component: FedoraComponent},
  {path: 'grow', component: GrowComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'useful-sites', component: UsefulSitesComponent},
  {path: 'software-development', component: SoftwareDevelopmentComponent},
  {path: 'where-is-truth', component: WhereIsTruthComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'linux', component: LinuxComponent,
    children: [
      {
        path: 'ionos',
        component: IonosComponent
      },
      {
        path: 'css-grid',
        component: CssGridComponent},
      {
        path: 'nginx',
        component: NginxComponent
      },
      {
        path: 'fedora',
        component: FedoraComponent
      }

      ]
  },

  {path: 'tor', component: TorComponent}];

