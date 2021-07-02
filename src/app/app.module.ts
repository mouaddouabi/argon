import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxPrintModule} from 'ngx-print';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { GestionResponsableComponent } from './gestion-responsable/gestion-responsable.component';
import { FicheReceptionComponent } from './fiche-reception/fiche-reception.component';
import { GestFournisseurComponent } from './gest-fournisseur/gest-fournisseur.component';
import { GestionFermeComponent } from './gestion-ferme/gestion-ferme.component';
import { FicheBonEntreeComponent } from './fiche-bon-entree/fiche-bon-entree.component';
import { GestionOperateursComponent } from './gestion-operateurs/gestion-operateurs.component';
import { MaterielEmballageComponent } from './materiel-emballage/materiel-emballage.component';
import { GestEmballageComponent } from './gest-emballage/gest-emballage.component';
import { FichierCondComponent } from './fichier-cond/fichier-cond.component';
import { UnitesComponent } from './unites/unites.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GestionResponsableComponent,
    FicheReceptionComponent,
    GestFournisseurComponent,
    GestionFermeComponent,
    FicheBonEntreeComponent,
    GestionOperateursComponent,
    MaterielEmballageComponent,
    GestEmballageComponent,
    FichierCondComponent,
    UnitesComponent,
    LoginComponent
  ],
  entryComponents:[
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPrintModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
