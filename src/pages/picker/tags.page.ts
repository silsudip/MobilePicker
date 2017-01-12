import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

import { ITag } from './tag';
import { DocumentsComponent } from './documents.page';
import { KnowhowTypesComponent } from './knowhowtypes.page';

import { PrecedentPickerApi } from '../../shared/shared'


@Component({
    templateUrl: 'tags.page.html'
})
export class TagsComponent{

    listTags:ITag[];
    constructor(private nav: NavController,private navParams: NavParams,private ppApi: PrecedentPickerApi) {
       this.listTags=<ITag[]>navParams.data;
     }

    goToCurrentDocuments(selectedTag:ITag):void{
        this.ppApi.SelectedTag = selectedTag; 
        this.nav.push(DocumentsComponent);
    }
    
    goToHome():void{
         this.nav.popToRoot();
    }
}