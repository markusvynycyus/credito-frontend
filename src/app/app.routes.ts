import { Routes } from '@angular/router';
import { CreditoComponent } from './components/credito/credito.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'credito',
        pathMatch: 'full'
      },
    {
        path: "credito",
        component: CreditoComponent
    }    
];