import {gql} from '@apollo/client';

export const LOAD_ANIMALS =gql `
query{
    animals
}
`;