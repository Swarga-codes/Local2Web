import { Airplay } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <section className="overflow-hidden bg-white py-8 w-full">
      <div className="container relative z-10 mx-auto px-4">
        <div className="-m-8 flex flex-wrap items-center justify-between">
          <div className="w-auto p-8 m-auto">
          
              <div className="inline-flex items-center">
                <Airplay/>
                <span className="ml-4 text-lg font-bold">Made with ❤️ by <a className='underline' href='https://www.github.com/Swarga-codes' target='_blank'>Swarga Codes</a></span>
              </div>
          
          </div>
         
            </div>
          </div>
      
    </section>
  )
}
