import { ITaxonomy } from './taxonomy'

export interface IDocument{
    Id:string;
    Title:string;
    DocumentUrl:string;
    Description:string;
    DateOfTraining:string;
    DraftingNotes:string;
    RelatedDocuments:string;
    Categories:ITaxonomy[];
    KnowhowTypes:ITaxonomy[];
    LegalTopics:ITaxonomy[];
    Offices:ITaxonomy[];
    Practices:ITaxonomy[];
    Sectors:ITaxonomy[];
    Tags:ITaxonomy[];
}