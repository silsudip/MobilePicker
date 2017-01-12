import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { IKnowhowType } from './knowhowtype';
import { LegalTopicsComponent } from './legaltopics.page';

import { PrecedentPickerApi } from '../../shared/shared'

@Component({
    templateUrl: 'knowhowtypes.page.html'
})
export class KnowhowTypesComponent{

    listKnowhowTypes:IKnowhowType[];

    constructor(private nav: NavController,private ppApi: PrecedentPickerApi) {
        
     }
    
    goToCurrentLegalTopics(selectedKnowhowType:IKnowhowType):void{
        this.ppApi.SelectedKnowhowType = selectedKnowhowType; 
        this.nav.push(LegalTopicsComponent,selectedKnowhowType.LegalTopics);
    }

    ionViewDidLoad(){
        this.ppApi.getCategories().subscribe(data=>{
            this.listKnowhowTypes = data;
        });
    }
    
    doRefresh(refresher) {
         this.ppApi.getCategories2().subscribe(data=>{
            this.listKnowhowTypes = data;
            refresher.complete();
        });
    }
}