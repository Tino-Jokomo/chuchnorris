import {gql} from '@apollo/client';

export const LOAD_HISTORY =gql `
query{
    history
}
`;