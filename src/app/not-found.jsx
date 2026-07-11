import Link from "next/link";


const NotFoundPage = () => {
    return (
        <div className="h-[80vh] flex justify-center items-center flex-col gap-3">

            <h1 className="font-bold text-5xl text-purple-500">This page is not found</h1>

            <Link href="/"><button className="btn btn-primary text-white">back to home</button></Link>
            
            
        </div>
    );
};

export default NotFoundPage;