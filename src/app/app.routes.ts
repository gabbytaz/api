import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { ContactComponent } from './contact-component/contact-component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        title: 'Home Component'
    },
    {
        path: "contact",
        loadComponent() {
            return import('./contact-component/contact-component')
                .then(m => m.ContactComponent);
        },
        
        title:'Formulario Contacto Componente'
    },

];
