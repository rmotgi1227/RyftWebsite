import Link from 'next/link'
import { getAllBlogPosts } from '@/lib/blog'
import { formatDate } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, User } from 'lucide-react'

export const metadata = {
  title: 'Blog - RYFT',
  description: 'Insights and updates on commission management, sales operations, and automation from the RYFT team.',
}

export default async function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <div className="min-h-screen relative">
      {/* Full page gradient background */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-[#0d0d18] via-30% via-[#151528] via-60% to-[#1e1e38] -z-10" />
      
      {/* Header */}
      <header className="border-b border-border/20 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="px-4 sm:px-6 md:px-10 lg:px-16 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-1.5 sm:gap-2">
              {/* Logo */}
              <svg viewBox="0 0 32 32" className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 shrink-0">
                <defs>
                  <clipPath id="blog-swoosh-clip">
                    <path d="M0 0 H32 V32 H0 Z M6 30 Q18 16 8 2 L4 2 Q12 18 4 30 Z" />
                  </clipPath>
                </defs>
                <path
                  d="M16 2 L30 30 L2 30 Z"
                  fill="currentColor"
                  className="text-foreground"
                  clipPath="url(#blog-swoosh-clip)"
                />
              </svg>
              <span 
                className="text-foreground font-medium tracking-[0.15em] text-base sm:text-lg"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                RYFT
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Insights & 
            <span className="text-muted-foreground font-light italic"> Ideas</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2">
            Thoughts on building, commission management, sales operations, and the future of automation.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 pb-16 sm:pb-20 md:pb-24 relative">
        <div className="max-w-4xl mx-auto">
          {posts.length === 0 ? (
            <Card className="text-center py-16 bg-black/30 border-border/30 backdrop-blur-sm">
              <CardContent>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Coming Soon
                </h2>
                <p className="text-muted-foreground mb-6">
                  We're working on exciting content about commission management and sales automation. 
                  Check back soon for our latest insights!
                </p>
                <Button asChild>
                  <Link href="/">
                    Back to Home
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="block group touch-manipulation">
                  <Card className="bg-black/30 border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-lg overflow-hidden backdrop-blur-sm">
                    <CardHeader className="p-4 sm:p-6">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <div className="flex items-center gap-1.5 text-muted-foreground text-xs sm:text-sm">
                          <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                          <span>{formatDate(post.publishDate)}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-muted-foreground text-xs sm:text-sm">
                          <User className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                          <span>{post.author}</span>
                        </div>
                        {post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {post.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="outline" className="text-[10px] sm:text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                      
                      <CardTitle className="text-lg sm:text-xl md:text-2xl group-hover:text-primary transition-colors duration-300">
                        {post.title}
                      </CardTitle>
                      
                      {post.seoDescription && (
                        <CardDescription className="text-sm sm:text-base mt-2 line-clamp-2">
                          {post.seoDescription}
                        </CardDescription>
                      )}
                    </CardHeader>
                    
                    <CardContent className="p-4 sm:p-6 pt-0">
                      <div className="flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all duration-300 text-sm sm:text-base">
                        Read article
                        <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-300 shrink-0" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
