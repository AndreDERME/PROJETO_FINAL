import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';

import { Carros } from './pages/carros/carros';
import { Contato } from './pages/contato/contato';
import { Servicos } from './pages/servicos/servicos';
import { ModelFocus } from './pages/model-focus/model-focus';
import { ModelEco } from './pages/model-eco/model-eco';
import { ModelFeista } from './pages/model-feista/model-feista';
import { ModelFordKa } from './pages/model-ford-ka/model-ford-ka';
import { ModelFusion } from './pages/model-fusion/model-fusion';
import { ModelGt } from './pages/model-gt/model-gt';
import { ModelTaunus } from './pages/model-taunus/model-taunus';
import { ModelMustang } from './pages/model-mustang/model-mustang';
import { Ford150XL } from './pages/ford150-xl/ford150-xl';
import { Ford150 } from './pages/ford150/ford150';
import { ModelEdge } from './pages/model-edge/model-edge';
import { Fordcourier } from './pages/fordcourier/fordcourier';
import { Financiamento } from './pages/servicos/financiamento/financiamento';
import { Consorcio } from './pages/servicos/consorcio/consorcio';
import { Privacidade } from './pages/privacidade/privacidade';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,

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
    
    {
        path: "model-taunus",
        component:ModelTaunus,
    },

    {
        path: "model-mustang",
        component:ModelMustang,
    },

    {
        path: "ford150-xl",
        component: Ford150XL,
    },

    {
        path: "ford150",
        component: Ford150,
    },

    {
        path: "model-edge",
        component:ModelEdge,
    },

    {
        path: "fordcourier",
        component: Fordcourier,
    },

    {
        path:"financiamento",
        component:Financiamento,

    },

    {
        path:"consorcio",
        component:Consorcio,
    },
    {
        path:"privacidade",
        component:Privacidade,
    },
    
    

    
]
