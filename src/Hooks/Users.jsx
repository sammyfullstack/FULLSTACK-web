import useFetch from "./UseFetch";

function Users(){
  const { data, loading, error} = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
  )

  if (error) return <p>{error}</p>
  if (loading) return <p>Loading...</p>

  return(
    <ul>
    {data.slice(0, 5).map((post) => (
      <li key={post.id}>{post.title}</li>
    ))}
    </ul>
  )
}

export default Users  