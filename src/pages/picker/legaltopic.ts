import { ITaxonomy } from './taxonomy';
import { ITag } from './tag';

export interface ILegalTopic{
    Item: ITaxonomy;
    Tags: ITag[];
}
