import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { IDocument } from '../picker/document';
import { DocumentDetailsComponent } from '../picker/documentdetails.page';

import { PrecedentPickerApi } from '../../shared/shared'

@Component({
    templateUrl: 'search.page.html'
})
export class SearchPageComponent {
    public searchText:string;
    listDocuments:IDocument[];

    constructor(private nav: NavController,private ppApi: PrecedentPickerApi) {
        this.searchText = "";
     }
    onInput(){
        console.log(this.searchText);
        this.ppApi.getSearchResults().subscribe(data=>{
            this.listDocuments = data;
         });
    }
    onCancel(){
        console.log(this.searchText);
    }
      goToDocumentDetails(selectedDocument):void{
        this.nav.push(DocumentDetailsComponent,selectedDocument);
    }
 
}