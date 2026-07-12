import Link from "next/link";


const LeftSidebar = ({categories, activeId}) => {
    return (
        <div>
               <h2 className="font-bold text-lg"> All Categories</h2>
       

       <ul className="flex flex-col gap-4">
           {
           categories.news_category.map(category => {
            return <li key={category.category_id} className={` ${activeId === category.category_id && "bg-slate-100"}  rounded-md font-bold text-center text-md`}><Link href={`/category/`} className="p-2 block">{category.category_name}</Link></li>
           })
        }
       </ul>
        </div>
    );
};

export default LeftSidebar;