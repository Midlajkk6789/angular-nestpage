import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { DepartmentComponent } from './page/department/department.component';
import { ContactComponent } from './page/contact/contact.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:"About",component:AboutComponent},
    {path:'Department',component:DepartmentComponent},
    {path:'Contact',component:ContactComponent}
];
