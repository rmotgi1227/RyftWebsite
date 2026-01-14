import Link from 'next/link';
import Image from 'next/image';
import { getAllBlogPosts } from '@/lib/blog';
import { formatDate } from '@/lib/utils';

export default function BlogSection() {
  const posts = getAllBlogPosts().slice(0, 3); // Show only the latest 3 posts

  if (posts.length === 0) {
    return null; // Don't show section if no posts
  }

  return (
    <section className="py-16 sm:py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-4 sm:mb-6 leading-tight font-display px-4">
              Latest from our blog
            </h2>
            <p className="text-lg sm:text-xl text-navy-600 max-w-3xl mx-auto px-4">
              Insights on commission management, sales operations, and building better revenue systems.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {posts.map((post, index) => (
              <article 
                key={post.slug}
                className="group"
              >
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <div className="bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden hover:shadow-lg h-full flex flex-col">
                    {post.featuredImage && (
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span>{formatDate(post.publishDate)}</span>
                        <span>•</span>
                        <span>by {post.author}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-accent-600 transition-colors duration-300 leading-tight">
                        {post.title}
                      </h3>
                      
                      {post.seoDescription && (
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                          {post.seoDescription.length > 120 ? `${post.seoDescription.substring(0, 120)}...` : post.seoDescription}
                        </p>
                      )}
                      
                      <div className="flex items-center text-accent-600 font-medium group-hover:text-accent-700 transition-colors duration-300 mt-auto">
                        Read more
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* View All Posts CTA */}
          <div className="text-center">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white px-6 py-3 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105"
            >
              View All Posts
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}