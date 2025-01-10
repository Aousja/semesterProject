import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { StartersComponent } from './pages/menu/starters/starters.component';
import { MainCourseComponent } from './pages/menu/main-course/main-course.component';
import { DessertsComponent } from './pages/menu/desserts/desserts.component';






export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'menu', component: MenuComponent,
       children: [
        { path: 'starters', component: StartersComponent },
        { path: 'main-course', component: MainCourseComponent },
        { path: 'desserts', component: DessertsComponent },
      ],
    },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    
    
   
];


   