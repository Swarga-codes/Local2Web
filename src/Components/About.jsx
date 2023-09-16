import React from 'react'
import { Github,Star } from 'lucide-react'
export default function About() {
  return (
    <section>
      <div className="px-4 py-8 m-auto">
        <h2 className="text-2xl font-bold tracking-tight text-gray-800 xl:text-4xl text-center">
          Watch & Stream videos in your local device in the web.
        </h2>
        <p className="mt-10 block max-w-4xl text-gray-500 mx-auto">
         Many a times we want to stream videos in our local machine in some video calling platforms such as google meet.
         But google meet can share any screen on your local machine but it only allows share audio in that screen when we share
         any particular tab in the browser. So using Local2Web we can upload the video and display it in web and you can stream the video
         with audio and can watch it along with your friends in platforms like google meet. Don't worry your data is safe with you since the site
         doesn't hold or store any data, your data gets deleted as soon as you close the tab. This is a problem I had with sharing video with audio in 
        video call plaforms,etc. In case if you feel the same or need it, feel free to use the web app. If you like the app follow me in github & star the repo
        using the below links. Thank you! 
        </p>
        <div className="mt-6 m-auto text-center">
          <a
            href="https://www.github.com/Swarga-codes"
            className="inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-gray-900 px-4 py-2.5 text-sm text-white shadow transition-colors duration-300 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80 sm:mx-2 sm:w-auto"
          target='_blank'
            >
          <Github />
            <span className="mx-2">Follow me on GitHub</span>
          </a>
          <a
            href="https://github.com/Swarga-codes/Local2Web"
            className="mt-4 inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-amber-500 px-4 py-2.5 text-sm text-white shadow transition-colors duration-300 hover:bg-amber-600 focus:ring focus:ring-amber-300 focus:ring-opacity-80 sm:mx-2 sm:mt-0 sm:w-auto"
            target='_blank'
            >
            <Star />
            <span className="mx-2">Star the Repo on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}
