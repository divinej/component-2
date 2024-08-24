import Image from "next/image";
import img from "../../public/img.jpg";



export default function Home() {
  console.log(img);

  return (
    <main className="min-h-screen bg-dark-blue px-4 py-7 grid md:justify-center md:items-center font-body">
      <div className="max-w-xl grid md:grid-cols-2 font-normal">
        <Image className="h-full w-full rounded-t-xl md:rounded-t-none md:rounded-l-xl md:rounded-tl-xl" src={img}
          alt=""
          sizes="(max-width: 760px) 100vw, 50vw)"
        />
        <div className="grid md:items-center justify-center px-8 py-10 lg:p-20 bg-blue rounded-b-xl md:rounded-b-none md:rounded-r-xl text-white text-base text-center md:text-left">
          <h1 className="text-3xl font-bold leading-none mb-4">Get <span className="text-purple">insights</span> that help your business grow.</h1>
          <p className="mb-10 text-gray">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>

          <div className="grid md:grid-cols-3 gap-6 justify-center">
            <div>
              <p className="text-2xl font-bold">10k+</p>
              <p className="text-gray text-xs font-sub-heading tracking-widest">COMPANIES</p>
            </div>
            <div>
              <p className="text-2xl font-bold">314</p>
              <p className="text-gray text-xs font-sub-heading tracking-widest">TEMPLATES</p>
            </div>
            <div>
              <p className="text-2xl font-bold">12M+</p>
              <p className="text-gray text-xs font-sub-heading tracking-widest">QUERIES</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
