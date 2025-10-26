import Link from 'next/link'
import Image from 'next/image'
import { getAllBlogPosts } from '@/lib/blog'
import { formatDate } from '@/lib/utils'

export const metadata = {
  title: 'Blog - RYFT',
  description: 'Insights and updates on commission management, sales operations, and automation from the RYFT team.',
}

export default async function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white py-16">
        {/* Back to Home - positioned absolutely in left corner */}
        <div className="absolute top-6 left-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-navy-600 hover:text-navy-900 font-medium transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
        
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center">
              <Link href="/" className="inline-block">
                <Image
                  src="/ryftlogo.png"
                  alt="RYFT Logo"
                  width={2400}
                  height={800}
                  className="h-96 w-auto max-w-5xl"
                />
              </Link>
              <p className="text-xl text-navy-600 max-w-2xl mx-auto -mt-32">
                Insights on commission management, sales operations, and the future of automated compensation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold text-navy-900 mb-4">
                Coming Soon
              </h2>
              <p className="text-navy-600">
                We're working on exciting content about commission management and sales automation. 
                Check back soon for our latest insights!
              </p>
              <Link 
                href="/"
                className="inline-block mt-6 bg-navy-900 hover:bg-navy-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Back to Home
              </Link>
            </div>
          ) : (
            <div className="space-y-12">
              {posts.map((post) => (
                <article key={post.slug} className="group">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="bg-white rounded-xl border border-navy-100 hover:border-navy-200 transition-all duration-300 overflow-hidden hover:shadow-lg">
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
                      
                      <div className="p-8">
                        <div className="flex items-center gap-4 text-sm text-navy-500 mb-4">
                          <span>{formatDate(post.publishDate)}</span>
                          <span>•</span>
                          <span>by {post.author}</span>
                          {post.tags.length > 0 && (
                            <>
                              <span>•</span>
                              <div className="flex gap-2">
                                {post.tags.slice(0, 2).map((tag) => (
                                  <span 
                                    key={tag}
                                    className="bg-navy-100 text-navy-700 px-2 py-1 rounded text-xs font-medium"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                        
                        <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4 group-hover:text-accent-600 transition-colors duration-300">
                          {post.title}
                        </h2>
                        
                        {post.seoDescription && (
                          <p className="text-navy-600 text-lg leading-relaxed mb-6">
                            {post.seoDescription}
                          </p>
                        )}
                        
                        <div className="flex items-center text-accent-600 font-semibold group-hover:text-accent-700 transition-colors duration-300">
                          Read more
                          <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>

    </div>
  )
}