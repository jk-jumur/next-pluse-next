import Marquee from "react-fast-marquee";


const BreakingNews = () => {
    return (
        <div className="flex justify-between gap-4 items-center bg-gray-200 py-4 px-2 container mx-auto">
            <button className="btn bg-red-500 text-white">Latest News</button>
            <Marquee pauseOnHover={true} speed={100}>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, expedita ut! Aspernatur repellat voluptas laudantium, obcaecati tenetur nobis doloremque fugit delectus quam, amet incidunt deleniti ea tempora possimus esse, qui expedita reiciendis. Quam alias rerum autem, excepturi non eaque? Enim quas sit voluptate delectus molestiae.</p>
            </Marquee>
        </div>
    );
};

export default BreakingNews;