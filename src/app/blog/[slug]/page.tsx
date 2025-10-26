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

  const readingTime = 5 // Simple estimate for now

  return (
    <div className="min-h-screen bg-white">
      {/* Back to Blog - positioned absolutely in left corner */}
      <div className="absolute top-6 left-6">
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-navy-600 hover:text-navy-900 font-medium transition-colors duration-300"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <article className="container mx-auto px-6 py-12 pt-8">
        <div className="max-w-4xl mx-auto">

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight mt-8">
            {post.title}
          </h1>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex gap-2 mb-6">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-navy-600 mb-8 pb-8 border-b border-navy-100">
            <div className="flex items-center gap-2">
              <span>by <strong>{post.author}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{formatDate(post.publishDate)}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{readingTime} min read</span>
            </div>
          </div>

          {/* Featured Image */}
          {post.featuredImage && (
            <div className="aspect-video relative mb-12 rounded-xl overflow-hidden">
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
          <div className="prose prose-lg prose-navy max-w-none">
            <MDXRenderer content={post.content} />
          </div>

          {/* Author Bio */}
          <div className="mt-12 pt-8 border-t border-navy-100">
            <div className="bg-navy-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-navy-900 mb-4">
                About the Author
              </h3>
              <div className="flex items-start gap-4">
                <Image
                  src="/rishab-headshot.jpg"
                  alt="Rishab Motgi"
                  width={80}
                  height={80}
                  className="rounded-full w-20 h-20 object-cover flex-shrink-0"
                />
                <div>
                  <p className="text-navy-600 leading-relaxed">
                    <strong>Rishab Motgi</strong> is the founder and CEO of Ryft. He started building Ryft after seeing how much time companies waste trying to make sense of commissions and broken incentive systems. His goal is simple — remove setup from software completely.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trademark */}
          <div className="mt-8 pt-6 border-t border-navy-100">
            <p className="text-sm text-navy-400 text-center">
              © 2024 Ryft. All rights reserved. RYFT is a trademark of Ryft, Inc.
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}