import LeftSidebar from "@/components/shared/homepage/news/LeftSidebar";
import RightSidebar from "@/components/shared/homepage/news/RightSidebar";

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
          <LeftSidebar categories={categories} activeId={null}/>
      </div>

      <div className="col-span-6 bg-pink-500">
        Dragon News Home
      </div>

      <div className="col-span-3">
        <RightSidebar/>
      </div>
    </div>
  );
}