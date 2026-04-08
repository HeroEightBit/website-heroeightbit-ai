'use client';

import { ChangeEvent, FormEvent, useState } from "react";
import Tiles from "./components/Tiles";

export default function Home() {
  const [text, setText] = useState('')
  const [company, setCompany] = useState('')
  const [comment, setComment] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('Submitted:', { name: text, company, comment })
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-5xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="">
          <h1 className="text-4xl font-bold">Welcome to My Website</h1>
          <p className="mt-4 text-md">
            This website has a few objectives.</p>
          <ol className="flex-1   list-decimal list-inside mt-4">
            <li>A fun project for learning and growth</li>
            <li>To store my resume and experience</li>
            <li>To showcase my projects </li>
            <li>To share recipes and cooking tips</li>
            <li>To share fun open source software!</li>
            <li>To provide a way for people to learn more about me</li>
          </ol>
        </div>
        <div className="mt-8 w-full">
          <Tiles />
        </div>
        <div className="mt-8 w-full">
          <h2 className="text-2xl font-bold">You're being tacked! </h2>
          <p className="mt-4 text-md">Please leave some information so I know who dropped by!</p>
          <p className="text-sm font-extralight italic  ">PS: Only I will be able to see this, so do not worry!</p>
        </div>
        <div className="mt-8 w-full">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input
                id="name"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Please enter name..."
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium">Company</label>
              <input
                id="company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Please enter company..."
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div>
              <label htmlFor="comment" className="block text-sm font-medium">Comment</label>
              <textarea
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Leave a comment..."
                rows={4}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-900 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
