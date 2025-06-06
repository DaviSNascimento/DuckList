import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [nota, setNota] = useState<string[]>([]);
    const [error, setError] = useState('');

    const handleSubmit = () => {
        if (inputValue.trim() === '') {
            setError('Por favor, digite uma anotação.');
            return;
        }
        setNota([...nota, inputValue]);
        setInputValue('');
        setIsOpen(false);
        setError('');
    };
    



    return (
        <>
            <div className="header-container flex flex-col items-center justify-top p-4">
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
            <div className="Button-container flex flex-col items-center justify-center mt-4 mb-4">
                <button
                    className="bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-opacity-50"
                    type="button"
                    onClick={() => setIsOpen(true)}>
                    Criar anotação
                </button> {/* 🚨 Botão para modal de formulario*/}
                {isOpen && (<>
                    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                        <div className="flex flex-col justify-center bg-gradient-to-br from-neutral-700 to-neutral-900 rounded-lg shadow-lg p-6 w-11/12 sm:w-96">
                            <h2 className="text-md font-normal  text-center text-white mb-2">
                                O que tem em mente hoje?</h2>
                            <input
                                type="text"
                                className="w-full p-2 mb-20  text-black bg-neutral-500 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
                                placeholder="Digite sua anotação aqui."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            {error && <p className="text-red-500">{error}</p>}

                            <div className='buttonsBox flex flex-row justify-end items-center'>
                                <button
                                    onClick={() => { handleSubmit() }}
                                    className='font-bold text-lg bg-green-700 rounded-lg py-1 px-3 mr-2'
                                >
                                    Salvar
                                </button>
                                <button
                                    className=" self-end font-bold text-lg  bg-red-700 rounded-lg py-1 px-3"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Voltar
                                </button>
                            </div>
                        </div>
                    </div>
                </>)}
            </div>
            <div className="list-container flex flex-col mx-10 sm:mx-40 md:mx-50 lg:mx-60 p-4 h-[65vh]  mb-4bg-blend-overlay  rounded-lg shadow-lg bg-gradient-to-br from-yellow-600 to-orange-950">

                <div className="list flex flex-col justify-start w-full h-[33%] bg-neutral-800 rounded-lg mb-2">
                    <h2 className="texth2 font-bold  rounded-t-lg bg-gradient-to-r from-amber-900 to-yellow-400 from-10%  text-neutral-300 p-1">
                        To do
                    </h2>
                    <div className="flex flex-col items-center justify-center h-full">
                        {nota ? (<span>{nota}</span>
                        ) : (
                            <span className="text-neutral-400 font-thin text-sm">
                                Nenhuma anotação criada ainda.
                            </span>)}
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
                            arraste uma anotação.
                        </p>
                    </div>
                </div>

            </div>


        </>
    );
}