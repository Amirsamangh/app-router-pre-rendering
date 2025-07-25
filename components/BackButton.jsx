'use client'

import { useRouter } from "next/navigation";

const BackButton = () => {
const router = useRouter()
    return (
        <button onClick={() => router.back()} className="px-4 py-1 my-3 me-4 bg-cyan-500 hover:bg-cyan-400 transition-all rounded-lg cursor-pointer">back</button>
    )
}

export default BackButton;