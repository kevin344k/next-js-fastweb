import PostCrad from "@/components/PostCrad";

async function loadPosts(){
    const res=await fetch("https://jsonplaceholder.typicode.com/posts")
    const data=await res.json()
  await new Promise((resolve)=>setTimeout(resolve,8000))
    return data
}

async  function PostPage() {
  const posts= await  loadPosts()
  console.log(posts);
  
  return (
    <div>{
    
    posts.map(post=>(
    <PostCrad key={post.id} post={post}></PostCrad>
    ))}</div>
  )
}

export default PostPage