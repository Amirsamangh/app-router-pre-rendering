'use client'

import { handleUpdateTag } from "@/actions/posts";

const UpdatePostsButton = ({ tag }) => {
    return (
        <button
            onClick={() => handleUpdateTag(tag)}
            className="px-4 py-1 mb-4 bg-cyan-500 hover:bg-cyan-400 transition-all rounded-lg cursor-pointer"
        >
            update : ({tag})
        </button>
    )
}

export default UpdatePostsButton;