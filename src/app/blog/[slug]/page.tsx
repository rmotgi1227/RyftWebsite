import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getBlogPost, getAllBlogPosts } from '@/lib/blog'
import { formatDate, calculateReadingTime } from '@/lib/utils'
import { MDXRenderer } from '@/components/MDXRenderer'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found - RYFT',
    }
  }

  return {
    title: `${post.title} - RYFT Blog`,
    description: post.seoDescription,
    openGraph: {
      title: post.title,
      description: post.seoDescription,
      images: post.featuredImage ? [post.featuredImage] : [],
      type: 'article',
      publishedTime: post.publishDate,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.seoDescription,
      images: post.featuredImage ? [post.featuredImage] : [],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const readingTime = calculateReadingTime(post.content)

  return (
    <div className="min-h-screen bg-white">
      {/* Back to Blog - positioned absolutely in left corner */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-navy-600 hover:text-navy-900 font-medium transition-colors duration-300 text-sm sm:text-base"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <article className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 pt-12 sm:pt-8">
        <div className="max-w-4xl mx-auto">

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4 sm:mb-6 leading-tight mt-12 sm:mt-8">
            {post.title}
          </h1>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="bg-accent-100 text-accent-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-navy-600 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-navy-100 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <span>by <strong>{post.author}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{formatDate(post.publishDate)}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{readingTime} min read</span>
            </div>
          </div>

          {/* Featured Image */}
          {post.featuredImage && (
            <div className="aspect-video relative mb-8 sm:mb-12 rounded-xl overflow-hidden">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-sm sm:prose-base lg:prose-lg prose-navy max-w-none">
            <MDXRenderer content={post.content} />
          </div>

          {/* Author Bio */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-navy-100">
            <div className="bg-gradient-to-br from-navy-50 to-white rounded-xl p-6 sm:p-8 border border-navy-100 shadow-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-navy-900 mb-6">
                About the Author
              </h3>
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="relative group mx-auto sm:mx-0">
                  <Image
                    src="/rishab-headshot.jpg"
                    alt="Rishab Motgi"
                    width={96}
                    height={96}
                    className="rounded-full w-20 h-20 sm:w-24 sm:h-24 object-cover flex-shrink-0 border-3 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-400/20 to-navy-600/20 group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h4 className="text-lg font-semibold text-navy-900 mb-2">Rishab Motgi</h4>
                  <p className="text-accent-600 font-medium mb-3">Founder & CEO of Ryft</p>
                  <p className="text-navy-600 leading-relaxed text-sm sm:text-base mb-4">
                    Rishab Motgi is the founder and CEO of Ryft, a company rethinking how sales commissions are automated and managed. He's a student at Indiana University studying Economics and Quantitative Methods & Accounting, but his real education comes from building, from late nights spent learning, failing, and rebuilding. Through Ryft and his writing, Rishab explores the intersection of purpose, conviction, and creation. His work reflects a simple belief: you don't find meaning, you build it.
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex items-center justify-center sm:justify-start gap-4">
                    <span className="text-sm text-navy-500 font-medium">Connect with Rishab:</span>
                    <div className="flex gap-3">
                      <a
                        href="https://x.com/rishabmotgi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-navy-100 hover:bg-navy-200 text-navy-600 hover:text-navy-900 transition-all duration-300 hover:scale-110"
                        aria-label="Follow Rishab on Twitter"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/rishab-motgi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-navy-100 hover:bg-navy-200 text-navy-600 hover:text-navy-900 transition-all duration-300 hover:scale-110"
                        aria-label="Connect with Rishab on LinkedIn"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a
                        href="mailto:rishab@ryft.com"
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-navy-100 hover:bg-navy-200 text-navy-600 hover:text-navy-900 transition-all duration-300 hover:scale-110"
                        aria-label="Email Rishab"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trademark */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-navy-100">
            <p className="text-xs sm:text-sm text-navy-400 text-center">
              © 2024 Ryft. All rights reserved. RYFT is a trademark of Ryft, Inc.
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}