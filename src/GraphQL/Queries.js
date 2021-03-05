import {gql} from '@apollo/client';

export const LOAD_JOKES =gql `
query{
    joke
}
`;