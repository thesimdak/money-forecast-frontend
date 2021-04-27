import { EntityMetadataMap } from '@ngrx/data';
 
const entityMetadata: EntityMetadataMap = {
  Account: {}
};
 
// because the plural of "hero" is not "heros"
const pluralNames = { Account: 'Accounts' };
 
export const entityConfig = {
  entityMetadata
};