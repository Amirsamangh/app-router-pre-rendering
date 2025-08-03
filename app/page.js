import List from "@/components/List";

export default function Home() {
  return (
    <div className="flex flex-col my-10 mx-20 text-sm font-medium border border-gray-200 rounded-lg shadow-lg bg-cyan-950 text-cyan-300">
      <List href={'/posts'} title={'پست ها'} />
      <List href={'/fposts'} title={'پست های فیلتر شده'} />
      <List href={'/users'} title={'کاربر ها'} />
      <List href={'/usersNoStore'} title={'کاربر ها 2'} />
      <List href={'/admin'} title={'پنل ادمین'} />
    </div>
  );
}
