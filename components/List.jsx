'use client'

import { useRouter } from "next/navigation";

const List = ({ href, title }) => {
    const router = useRouter()
    return (
        <div className="h-10 w-full flex justify-between px-10 items-center border hover:bg-cyan-800 transition-all cursor-pointer" onClick={() => router.push(href)}>
            <h1 className="mb-2 text-md text-cyan-100"> {title}</h1>
        </div>
    )
}

export default List;