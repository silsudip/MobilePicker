import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

import { ILegalTopic } from './legaltopic'
import { TagsComponent } from './tags.page';
import { KnowhowTypesComponent } from './knowhowtypes.page';

import { PrecedentPickerApi } from '../../shared/shared'

@Component({
    templateUrl: 'legaltopics.page.html'
})
export class LegalTopicsComponent{

    listLegalTopics:ILegalTopic[] ;
    constructor(private nav: NavController,private navParams: NavParams,private ppApi: PrecedentPickerApi) { 
        this.listLegalTopics = <ILegalTopic[]>navParams.data;
    }

    goToCurrentDocumentTypes(selectedLegalTopic:ILegalTopic):void{
        this.ppApi.SelectedLegalTopic = selectedLegalTopic; 
        this.nav.push(TagsComponent,selectedLegalTopic.Tags);
    }

    goToHome():void{
         this.nav.popToRoot();
    }
     doRefresh(refresher) {
         this.nav.push(KnowhowTypesComponent);
     }
}