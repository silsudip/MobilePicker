import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

import { IDocument } from './document';
import { KnowhowTypesComponent } from './knowhowtypes.page';

@Component({
    templateUrl: 'documentdetails.page.html'
})
export class DocumentDetailsComponent{

    document:IDocument;
    
    constructor(private nav: NavController,private navParams: NavParams) {
        this.document = <IDocument>navParams.data;
        console.log(this.document);
     }

    goToHome():void{
         this.nav.popToRoot();
    }
}