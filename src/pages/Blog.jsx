import React from 'react'
import Post from '../components/Post'
import POSTS from '../data/posts'
import Header from '../components/Header'

const Blog = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="text-4xl font-extrabold leading-tight tracking-tighter">
                  Blog
                </h1>
              </div>

              {/* Posts */}
              {POSTS.map(post => (
                <Post
                  key={post.title}
                  title={post.title}
                  category={post.category}
                  date={post.date}
                  description={post.description}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Blog
