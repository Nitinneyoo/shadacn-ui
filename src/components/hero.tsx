import React from 'react'
import { AlertDialogDemo } from './dialog'

export const Hero = () => {
    return (
        <section className="text-white-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white-900">
                        {`Hello EveryOne`}
                        <br className="hidden lg:inline-block" />
                        {`This is My First Work On TypeScript And Also The First Tailwind css Project.`}
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        {`I'm a frontend developer passionate about modern web technologies, specializing in React , Javascript and TypeScript. I enjoy exploring new frameworks and tools like Vite and Tailwind CSS. In my free time, I love coding, reading tech blogs, and contributing to open-source projects. Always eager to learn and innovate.`}
                    </p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Button
                        </button>
                        <div>
                            <AlertDialogDemo />
                        </div>


                    </div>
                </div>
            </div>
        </section>

    )
}
