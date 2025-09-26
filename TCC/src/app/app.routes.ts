import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        loadComponent:() => {
            return import ("./pages/home/home")
            .then (c => c.HomeComponent)
            
        }
    },

       {
        path: "login",
        pathMatch: "full",
        loadComponent:() => {
            return import ("./pages/login/login")
            .then (c => c.Login)
            
        }
    },

     {
        path: "carros",
        pathMatch: "full",
        loadComponent:() => {
            return import ("./pages/carros/carros")
            .then (c => c.Carros)
            
        }
    },

     {
        path: "contato",
        pathMatch: "full",
        loadComponent:() => {
            return import ("./pages/contato/contato")
            .then (c => c.Contato)
            
        }
    },
      {
        path: "servicos",
        pathMatch: "full",
        loadComponent:() => {
            return import ("./pages/servicos/servicos")
            .then (c => c.Servicos)
            
        }
    },

    {

        path: "model-focus",
        pathMatch: "full",
        loadComponent:() => {
            return import ("./pages/model-focus/model-focus")
            .then (c => c.ModelFocus)           
        }
    },


      {

        path: "model-eco",
        pathMatch: "full",
        loadComponent:() => {
            return import ("./pages/model-eco/model-eco")
            .then (c => c.ModelEco)           
        }
    },
           


    

    
]
