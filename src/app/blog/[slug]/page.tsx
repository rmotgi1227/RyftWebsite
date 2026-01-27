import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Calendar, Clock, User } from 'lucide-react'
import { getBlogPost, getAllBlogPosts } from '@/lib/blog'
import { formatDate, calculateReadingTime } from '@/lib/utils'
import { MDXRenderer } from '@/components/MDXRenderer'
import Navbar from '@/components/Navbar'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

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
    <div className="min-h-screen relative">
      {/* Full page gradient background */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-[#0d0d18] via-30% via-[#151528] via-60% to-[#1e1e38] -z-10" />
      
      {/* Navigation Bar */}
      <Navbar />

      {/* Article Header */}
      <article className="container mx-auto px-4 sm:px-6 py-4 sm:py-8 md:py-12 pt-24 sm:pt-28 md:pt-12">
        <div className="h-[72px] md:hidden"></div>
        <div className="max-w-4xl mx-auto">

          {/* Title */}
          <h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-6 leading-tight"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            {post.title}
          </h1>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-6">
              {post.tags.map((tag) => (
                <Badge 
                  key={tag}
                  variant="outline"
                  className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 text-xs sm:text-sm px-2 sm:px-3 py-0.5 sm:py-1"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 md:gap-6 text-white/70 mb-4 sm:mb-8 text-xs sm:text-sm md:text-base">
            <div className="flex items-center gap-1 sm:gap-2">
              <User className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
              <span>by <strong className="text-white">{post.author}</strong></span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
              <span>{formatDate(post.publishDate)}</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
              <span>{readingTime} min read</span>
            </div>
          </div>
          
          <Separator className="mb-4 sm:mb-8 bg-white/20" />

          {/* Featured Image */}
          {post.featuredImage && (
            <div className="aspect-video relative mb-4 sm:mb-8 md:mb-12 rounded-lg sm:rounded-xl overflow-hidden -mx-4 sm:mx-0">
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
          <div className="prose prose-sm sm:prose-base lg:prose-lg prose-invert max-w-none prose-headings:text-white prose-p:text-white/90 prose-li:text-white/90 prose-a:text-primary prose-strong:text-white prose-code:text-primary prose-pre:bg-black/30 prose-pre:border prose-pre:border-border/30 prose-blockquote:text-white/80 prose-blockquote:border-primary/50 prose-headings:font-bold prose-p:leading-relaxed prose-ul:my-3 sm:prose-ul:my-4 prose-ol:my-3 sm:prose-ol:my-4 prose-p:my-3 sm:prose-p:my-4 prose-headings:my-3 sm:prose-headings:my-4 prose-h2:mt-6 sm:prose-h2:mt-8 prose-h3:mt-4 sm:prose-h3:mt-6">
            <MDXRenderer content={post.content} />
          </div>

          {/* Trademark */}
          <div className="mt-4 sm:mt-8 pt-3 sm:pt-6">
            <Separator className="mb-3 sm:mb-6 bg-white/20" />
            <p className="text-xs sm:text-sm text-white/50 text-center">
              © 2024 Ryft. All rights reserved. RYFT is a trademark of Ryft, Inc.
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}