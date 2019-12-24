import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

    { path: 'first-component', component: FirstComponentComponent },
    { path: 'second-component', component: SecondComponentComponent },
    { path: '**', component: PageNotFoundComponent }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{ }
export const routingComponents = [FirstComponentComponent, SecondComponentComponent,PageNotFoundComponent]
