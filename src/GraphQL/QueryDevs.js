import {gql} from '@apollo/client';

export const LOAD_DEVS =gql `
query{
    devs
}
`;