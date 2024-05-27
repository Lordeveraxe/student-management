import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { AppRoutingModule } from './app-routing.module';

// PrimeNG modules
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentAddComponent,
    StudentEditComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MenubarModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    FloatLabelModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
