import BackButton from "@/components/BackButton"


export const generateStaticParams = async ()=>{
    return [
        {userId: '1'},
        {userId: '2'},
        {userId: '3'},
    ]
}

export const getUserService = async (userId)=>{
    const res = await fetch(`http://localhost:4000/posts/${userId}`)
    const user = await res.json()
    return user;
}

const page = async ({params})=>{
    const user = await getUserService(params.userId)
    
    return (
        <div className="relative overflow-x-auto mt-20 mx-5">
            <BackButton />
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            #
                        </th>
                        <th scope="col" className="px-6 py-3">
                            title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            body
                        </th>
                        <th scope="col" className="px-6 py-3">
                            userId
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                        <td className="px-6 py-4">
                            {user.id}
                        </td>
                        <td className="px-6 py-4">
                            {user.title}
                        </td>
                        <td className="px-6 py-4">
                            {user.body}
                        </td>
                        <td className="px-6 py-4">
                            {user.userId}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default page;