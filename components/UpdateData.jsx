'use client'
import { handleUpdatePath } from "@/actions/users";

const UpdateData = ({ path }) => {
    return (
        <button
            onClick={()=>handleUpdatePath(path)}
            className="px-4 py-1 bg-cyan-500 hover:bg-cyan-400 transition-all rounded-lg cursor-pointer"
        >
            update : ({path})
        </button>
    )
}

export default UpdateData;