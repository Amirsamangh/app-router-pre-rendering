
import BackButton from "@/components/BackButton";
import List from "@/components/List";
import { revalidatePath } from "next/cache";

export const getUsersService = async () => {
    // const res = await fetch('http://localhost:4000/users?_sort=id&_order=desc' , {cache: 'no-store'})
    const res = await fetch('http://localhost:4000/users?_sort=id&_order=desc')
    const users = await res.json()
    return users;
}

export const dynamic = 'force-dynamic' // use for opting out of data caching
// export const fetchcache = 'force-no-store' // use for opting out of data caching.. not working

const users = async () => {
    const users = await getUsersService()

    return (
        <div className='mt-4 px-4'>
            <h1 className="text-cyan-100">کاربر ها</h1>
            <BackButton />
            <br />
            <br />
            <form className="my-4 text-cyan-300">
                <h3 className="">Create User</h3>
                <input type="text" name="name" placeholder="name" className="mt-2 mr-3 px-2 py-1 w-50 bg-cyan-800 focus:bg-cyan-950 rounded" />
                <input type="text" name="email" placeholder="email" className="mt-2 mr-3 px-2 py-1 w-50 bg-cyan-800 focus:bg-cyan-950 rounded" />
                <button type="submit" className="mt-2 mr-3 px-4 py-1 text-cyan-950 bg-cyan-500 hover:bg-cyan-400 transition-all rounded-lg cursor-pointer">Confirm</button>
            </form>
            <ul className="w-full text-sm font-medium border border-gray-200 rounded-lg shadow-lg bg-cyan-950 text-cyan-300">
                {users.map(u => (
                    <List key={u.id} href={`/users/${u.id}`} title={`${u.id}. ${u.name}`} />
                ))}
            </ul>

        </div>
    )
}

export default users;