import BackButton from "@/components/BackButton";
import List from "@/components/List";

const getPostsService = async () => {
    const res = await fetch('http://localhost:4000/posts')
    const posts = await res.json()
    return posts
}

const posts = async () => {
    const posts = await getPostsService()

    async function create() {
        'use server'

        //...
    }

    return (
        <div className='mt-4 px-4'>
            <h1 className="text-cyan-100">پست ها</h1>
            <BackButton />
            <br />
            <br />
            <ul className="w-full text-sm font-medium border border-gray-200 rounded-lg shadow-lg bg-cyan-950 text-cyan-300">
                {posts.map(p => (
                    <List key={p.id} href={`/posts/${p.id}`} title={`${p.id} ${p.title}`} />
                    // <li
                    //     key={p.id}
                    //     onClick={() => route.push(`/posts/${p.id}`)}
                    //     className='w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 last:border-b-0 hover:bg-cyan-800 cursor-pointer'
                    // >
                    //     <span className='mr-2'>{p.id}.</span> <span>{p.title}</span>
                    // </li>
                ))}
            </ul>

        </div>
    )
}

export default posts;