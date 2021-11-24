import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerCapitalComponent } from './pais/pages/per-capital/per-capital.component';
import { PerPaisComponent } from './pais/pages/per-pais/per-pais.component';
import { PerRegioComponent } from './pais/pages/per-regio/per-regio.component';
import { VeurePaisComponent } from './pais/pages/veure-pais/veure-pais.component';

const routes: Routes = [

    { path: '', component: PerPaisComponent, pathMatch: 'full'},
    { path: 'regio', component: PerRegioComponent },
    { path: 'capital', component: PerCapitalComponent },
    { path: 'pais/:id', component: VeurePaisComponent },
    { path: '**', redirectTo: '' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)

    ],
    exports: [
        RouterModule
    ]
})


export class AppRoutingModule {} 