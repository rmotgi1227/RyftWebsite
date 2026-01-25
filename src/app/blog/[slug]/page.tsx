import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Calendar, Clock, User } from 'lucide-react'
import { getBlogPost, getAllBlogPosts } from '@/lib/blog'
import { formatDate, calculateReadingTime } from '@/lib/utils'
import { MDXRenderer } from '@/components/MDXRenderer'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
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

          {/* Author Bio */}
          <div className="mt-4 sm:mt-8 md:mt-12">
            <Separator className="mb-4 sm:mb-8 bg-white/20" />
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader className="pb-3 sm:pb-6 px-4 sm:px-6 pt-4 sm:pt-6">
                <CardTitle className="text-base sm:text-xl text-white">
                  About the Author
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-6 px-4 sm:px-6 pb-4 sm:pb-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-6">
                  <Avatar className="w-16 h-16 sm:w-24 sm:h-24 border-2 border-white/30 shrink-0">
                    <AvatarImage src="/rishab-headshot.jpg" alt="Rishab Motgi" />
                    <AvatarFallback className="bg-primary/20 text-primary text-base sm:text-xl">
                      RM
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 text-center sm:text-left space-y-2 sm:space-y-3">
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-0.5 sm:mb-1">Rishab Motgi</h4>
                      <p className="text-primary font-medium text-xs sm:text-base">Founder & CEO of Ryft</p>
                    </div>
                    <p className="text-white/80 leading-relaxed text-xs sm:text-base">
                      Rishab Motgi is the founder and CEO of Ryft, a company rethinking how sales commissions are automated and managed. He's a student at Indiana University studying Economics and Quantitative Methods & Accounting, but his real education comes from building, from late nights spent learning, failing, and rebuilding. Through Ryft and his writing, Rishab explores the intersection of purpose, conviction, and creation. His work reflects a simple belief: you don't find meaning, you build it.
                    </p>
                    
                    {/* Social Links */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 pt-1 sm:pt-2">
                      <span className="text-xs sm:text-sm text-white/60 font-medium">Connect with Rishab:</span>
                      <div className="flex gap-2 sm:gap-3">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 sm:h-9 sm:w-9 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white"
                          asChild
                        >
                          <a
                            href="https://x.com/rishabmotgi"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Follow Rishab on Twitter"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                          </a>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 sm:h-9 sm:w-9 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white"
                          asChild
                        >
                          <a
                            href="https://www.linkedin.com/in/rishab-motgi/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Connect with Rishab on LinkedIn"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 sm:h-9 sm:w-9 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white"
                          asChild
                        >
                          <a
                            href="mailto:rishab@ryft.com"
                            aria-label="Email Rishab"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
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