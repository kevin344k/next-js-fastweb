import PostCrad from "@/components/PostCrad";
import "./posts.css"
async function loadPosts(){
    const res=await fetch("https://jsonplaceholder.typicode.com/posts")
    const data=await res.json()

    return data
}

async  function PostPage() {
  const posts= await  loadPosts()
  console.log(posts);
  
  return (
    <div className="grid">{
    
    posts.map(post=>(
    <PostCrad key={post.id} post={post}></PostCrad>
    ))}</div>
  )
}

export default PostPage