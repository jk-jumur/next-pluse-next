async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );

  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const categories = await getCategories();

  console.log(categories.news_category);

  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-[60px]">
      <div className="col-span-3  ">
         <h2 className="font-bold text-lg"> All Categories</h2>
       

       <ul className="flex flex-col gap-4">
           {
           categories.news_category.map(category => {
            return <li key={category.category_id} className="text-center font-bold   rounded-md bg-slate-100 p-2 text-[#9F9F9F]">{category.category_name}</li>
           })
        }
       </ul>
      </div>

      <div className="col-span-6 bg-pink-600 font-bold">
        Dragon News Home
      </div>

      <div className="col-span-3 bg-amber-400 font-bold">
        Login With
      </div>
    </div>
  );
}