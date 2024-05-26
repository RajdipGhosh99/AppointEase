import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./general/general.module').then(m => m.GeneralModule)
    }
];
