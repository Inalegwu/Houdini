/* eslint-disable */
/* prettier-ignore */

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
  name: never;
  query: 'Query';
  mutation: 'Mutation';
  subscription: never;
  types: {
    'Boolean': unknown;
    'CreateTodo': { kind: 'INPUT_OBJECT'; name: 'CreateTodo'; inputFields: [{ name: 'content'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'isDone'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; }; defaultValue: "false" }]; };
    'Mutation': { kind: 'OBJECT'; name: 'Mutation'; fields: { 'deleteTodo': { name: 'deleteTodo'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Todo'; ofType: null; }; } }; 'saveTodo': { name: 'saveTodo'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Todo'; ofType: null; }; } }; 'updateTodo': { name: 'updateTodo'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Todo'; ofType: null; }; } }; }; };
    'Query': { kind: 'OBJECT'; name: 'Query'; fields: { 'getTodos': { name: 'getTodos'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Todo'; ofType: null; }; }; }; } }; }; };
    'String': unknown;
    'Todo': { kind: 'OBJECT'; name: 'Todo'; fields: { 'content': { name: 'content'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'id': { name: 'id'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'isDone': { name: 'isDone'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; } }; }; };
  };
};

import * as gqlTada from 'gql.tada';

declare module 'gql.tada' {
  interface setupSchema {
    introspection: introspection
  }
}