import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { Login } from './pages/login/login';
import { Carros } from './pages/carros/carros';
import { Contato } from './pages/contato/contato';
import { Servicos } from './pages/servicos/servicos';
import { ModelFocus } from './pages/model-focus/model-focus';
import { ModelEco } from './pages/model-eco/model-eco';
import { ModelFeista } from './pages/model-feista/model-feista';
import { ModelFordKa } from './pages/model-ford-ka/model-ford-ka';
import { ModelFusion } from './pages/model-fusion/model-fusion';
import { ModelGt } from './pages/model-gt/model-gt';

export const routes: Routes = [
    {
        path: "home",
       component: HomeComponent,

    },

       {
        path: "login",
        component: Login,
    },

     {
        path: "carros",
        component:Carros,
    },

     {
        path: "contato",
        component:Contato,
    },
      {
        path: "servicos",
        component: Servicos,
    },

    {

        path: "model-focus",
        component:ModelFocus,
    },


      {

        path: "model-eco",
        component: ModelEco,
    },
        
     {

        path: "model-feista",
        component:ModelFeista,
    },

    {

        path: "model-ford-ka",
        component:ModelFordKa,
    },
    {

        path: "model-fusion",
        component:ModelFusion,
    },

    {
        path: "model-gt",
        component:ModelGt,
    },



    

    
]
