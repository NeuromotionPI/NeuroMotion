import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = []; // Aquí puedes definir tus rutas

@NgModule({
    imports: [RouterModule.forRoot(routes)], // Cambia las llaves por paréntesis
    exports: [RouterModule]
})
export class AppRoutingModule { }
