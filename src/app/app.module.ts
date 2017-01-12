import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http'


import { KnowhowTypesComponent } from '../pages/picker/knowhowtypes.page';
import { LegalTopicsComponent } from '../pages/picker/legaltopics.page';
import { TagsComponent } from '../pages/picker/tags.page';
import { DocumentsComponent } from '../pages/picker/documents.page';
import { DocumentDetailsComponent } from '../pages/picker/documentdetails.page';
import { SearchPageComponent } from '../pages/search/search.page';

@NgModule({
  declarations: [
    MyApp,
    KnowhowTypesComponent,
    LegalTopicsComponent,
    TagsComponent,
    DocumentsComponent,
    DocumentDetailsComponent,
    SearchPageComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    KnowhowTypesComponent,
    LegalTopicsComponent,
    TagsComponent,
    DocumentsComponent,
    DocumentDetailsComponent,
    SearchPageComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
