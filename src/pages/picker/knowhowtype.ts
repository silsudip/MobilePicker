import { ITaxonomy } from './taxonomy';
import { ILegalTopic } from './legaltopic';

export interface IKnowhowType{
    Item: ITaxonomy;
    LegalTopics: ILegalTopic[];
}