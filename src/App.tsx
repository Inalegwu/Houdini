import { graphql } from "gql.tada";
import { useQuery } from "urql";

const todosQuery=graphql(`
  query{
    getTodos{
      id
      content
      isDone
    }
  }
`)

function App() {
  
  const [result,rexecuteQuery]=useQuery({
    query:todosQuery
  })

  const {data,fetching}=result

  return (
    <>
    {fetching && <p>loading...</p>}
     {data?.getTodos.map((v)=>(<p key={v.id}>{v.content}</p>))}
    </>
  )
}

export default App
