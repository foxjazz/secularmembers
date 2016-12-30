import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';
import {MemberlistComponent} from "./Members";
import {ExtendedMembersComponent} from "./Members";
import {MaintenanceComponent} from "./Members";



export const ROUTES: Routes = [
  { path: '',      component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'memberlist', component: MemberlistComponent},
  { path: 'extendedmembers', component: ExtendedMembersComponent},
  { path: 'maintenance ', component: MaintenanceComponent},
  { path: '**',    component: NoContentComponent }
];
