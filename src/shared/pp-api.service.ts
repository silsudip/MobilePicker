import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { IKnowhowType } from '../pages/picker/knowhowtype';
import { ILegalTopic } from '../pages/picker/legaltopic';
import { ITag } from '../pages/picker/tag';
import { IDocument } from '../pages/picker/document'

@Injectable()

export class PrecedentPickerApi{
    private categoryUrl = 'https://precedent-picker.firebaseio.com/Category.json';
    private category2Url = 'https://precedent-picker.firebaseio.com/Category2.json';
    private linksUrl = 'https://precedent-picker.firebaseio.com/Links.json';
    private searchResultsUrl = 'https://precedent-picker.firebaseio.com/SearchResults/Links.json';
    
    public CurrentKnowhowTypes: IKnowhowType[];
    public CurrentLegalTopics: ILegalTopic[];
    public CurrentTags: ITag[];
    
    public SelectedKnowhowType: IKnowhowType;
    public SelectedLegalTopic: ILegalTopic;
    public SelectedTag: ITag;
    

    constructor(private http: Http){}

    getCategories(): Observable<IKnowhowType[]>{
         return this.http.get(this.category2Url)
            .map((response:Response)=>{
                this.CurrentKnowhowTypes = <IKnowhowType[]>response.json(); 
                 return this.CurrentKnowhowTypes;
                })
    }
    getCategories2(): Observable<IKnowhowType[]>{
         return this.http.get(this.category2Url)
            .map((response:Response)=> {
                 this.CurrentKnowhowTypes = <IKnowhowType[]>response.json(); 
                 return this.CurrentKnowhowTypes;
        })
    }
     getLinks():any{
        return new Promise(resolve=>{
            this.http.get(this.linksUrl)
                    .subscribe(res=>resolve(res.json()));
        })
    }
     getSearchResults():Observable<IDocument[]>{
         return this.http.get(this.searchResultsUrl)
            .map((response:Response)=>{
                 return <IDocument[]>response.json();
                })
    }
}