import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { IDocument } from './document';
import { DocumentDetailsComponent } from './documentdetails.page';
import { KnowhowTypesComponent } from './knowhowtypes.page';

import { PrecedentPickerApi } from '../../shared/shared'

@Component({
    templateUrl: 'documents.page.html'
})
export class DocumentsComponent{

    listDocuments:IDocument[];
    constructor(private nav: NavController,private ppApi: PrecedentPickerApi) {

     }

     ionViewDidEnter():void{
         this.ppApi.getSearchResults().subscribe(data=>{
            this.listDocuments = data;
         });
     }

    goToDocumentDetails(selectedDocument):void{
        this.nav.push(DocumentDetailsComponent,selectedDocument);
    }
 
    goToHome():void{
         this.nav.popToRoot();
    }
}