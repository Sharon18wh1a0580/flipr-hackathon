import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphComponent } from './graph/graph.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsenseComponent } from './bsense/bsense.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { NsebseComponent } from './nsebse/nsebse.component';

const appRoot: Routes = [
                         {path: 'login', component: LoginComponent},
                        {path: 'register', component: RegisterComponent},
                        {path: 'graph',component: GraphComponent},
                        {path: 'nsebse',component: NsebseComponent}

];



@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    BsenseComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    NsebseComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    FormsModule, HttpClientModule, RouterModule.forRoot(appRoot)
    
    
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
