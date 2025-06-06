import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="header flex flex-col items-center justify-top p-4">
        <div className="logo flex flex-row items-center justify-center text-center">
          <Image
            className="duck-logo "
            src="/rubber-duck.png"
            alt="duck"
            width={33}
            height={33}
            priority
          />
          <h1 className="text-4xl font-extrabold m-2">Duck List</h1>
        </div>
        <p className="text-lg font-serif italic">&quot;A simple list for ducks&quot;</p>
      </div>
      <div className="flex flex-col items-center justify-center mt-4 mb-4">
        <button
          className="bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-opacity-50"
          type="button">
          <a href="#"
            target="">Criar anotação</a>
        </button>
      </div>
      <div className="list-container flex flex-col mx-10 sm:mx-40 md:mx-50 lg:mx-60 p-4 h-[65vh]  mb-4bg-blend-overlay  rounded-lg shadow-lg bg-gradient-to-br from-yellow-600 to-orange-950">

        <div className="list flex flex-col justify-start w-full h-[33%] bg-neutral-800 rounded-lg mb-2">
          <h2 className="texth2 font-bold  rounded-t-lg bg-gradient-to-r from-amber-900 to-yellow-400 from-10%  text-neutral-300 p-1">
            To do
          </h2>
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-neutral-400 font-thin text-sm">
              Nenhuma anotação criada ainda.
            </p>
          </div>

        </div>

        <div className="list flex flex-col justify-start w-full h-[33%] bg-neutral-800 rounded-lg mb-2">
          <h2 className="texth2 font-bold  rounded-t-lg bg-gradient-to-r from-amber-900 to-yellow-400 from-10% text-neutral-300 p-1">
            Doing
          </h2>
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-neutral-400 font-thin text-sm">
              arraste uma anotação.
            </p>
          </div>
        </div>

        <div className="list flex flex-col justify-start w-full h-[33%] bg-neutral-800 rounded-lg mb-2">
          <h2 className="texth2 font-bold  rounded-t-lg bg-gradient-to-r from-amber-900 to-yellow-400 from-10% text-neutral-300 p-1">
            Done
          </h2>
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-neutral-400 font-thin text-sm">
              Nenhuma anotação criada ainda.
            </p>
          </div>
        </div>

      </div>


    </>
  );
}
