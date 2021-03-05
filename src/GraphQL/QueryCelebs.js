import {gql} from '@apollo/client';

export const LOAD_CELEBS =gql `
query{
    celebs
}
`;