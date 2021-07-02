import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FicheBonEntreeComponent } from './fiche-bon-entree/fiche-bon-entree.component';
import { FicheReceptionComponent } from './fiche-reception/fiche-reception.component';
import { FichierCondComponent } from './fichier-cond/fichier-cond.component';
import { GestEmballageComponent } from './gest-emballage/gest-emballage.component';
import { GestFournisseurComponent } from './gest-fournisseur/gest-fournisseur.component';
import { GestionFermeComponent } from './gestion-ferme/gestion-ferme.component';
import { GestionOperateursComponent } from './gestion-operateurs/gestion-operateurs.component';
import { GestionResponsableComponent } from './gestion-responsable/gestion-responsable.component';
import { LoginComponent } from './login/login.component';
import { MaterielEmballageComponent } from './materiel-emballage/materiel-emballage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UnitesComponent } from './unites/unites.component';

const routes: Routes = [
  { path: 'responsables', component: GestionResponsableComponent },
  { path: 'fichereception', component: FicheReceptionComponent },
  { path: 'fournisseurs', component: GestFournisseurComponent },
  { path: 'addFerme/:id', component: GestionFermeComponent },
  { path: 'bonEntrees', component: FicheBonEntreeComponent },
  { path: 'gestEmballages/:id', component: GestEmballageComponent },
  { path: 'unites/:id', component: UnitesComponent },
  { path: 'fichesConditionnement', component: FichierCondComponent },
  { path: 'matsemb', component: MaterielEmballageComponent },
  { path: 'operateurs', component: GestionOperateursComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
