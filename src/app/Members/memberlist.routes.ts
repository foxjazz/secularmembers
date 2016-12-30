import { Routes } from '@angular/router';

import { MemberlistComponent } from './memberlist.component';
import {MaintenanceComponent} from "./maintenance.component";
import {ExtendedMembersComponent} from "./ExtendedMembers.component";

export const MemberlistRoutes: Routes = [
  { path: 'memberlist', component: MemberlistComponent },
  {path: 'maintenance', component: MaintenanceComponent},
  {path: 'extendedMembers', component: ExtendedMembersComponent}
];
