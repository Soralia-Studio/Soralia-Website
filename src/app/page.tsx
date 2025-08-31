import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full flex flex-col items-center justify-center text-center py-16 bg-blue-900 text-white rounded-lg shadow-xl mb-12">
        <div className="relative w-48 h-48 mb-6">
          <Image
            src="/globe.svg"
            alt="Soralia Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <h1 className="text-4xl font-bold mb-6">Random Text Here</h1>
        <div className="mt-8 animate-bounce">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </section>
      
      <section className="w-full max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <p className="text-lg text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur euismod, nisi nisl
          consectetur nisi, euismod nisi vel consectetur euismod. Nullam euismod, nisi vel consectetur euismod, nisi nisl
          consectetur nisi, euismod nisi vel consectetur euismod. Nullam euismod, nisi vel consectetur euismod, nisi nisl
          consectetur nisi, euismod nisi vel consectetur euismod.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
          eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam 
          voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
          voluptatem sequi nesciunt.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam 
          eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis 
          nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem 
          vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
        </p>
      </section>
    </div>
  );
}
