import Link from 'next/link'
import { getAllBlogPosts } from '@/lib/blog'
import { formatDate } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar } from 'lucide-react'

export default function BlogPreviewSection() {
  const allPosts = getAllBlogPosts()
  const recentPosts = allPosts.slice(0, 3)

  if (recentPosts.length === 0) {
    return null
  }

  return (
    <section id="blog" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 relative overflow-hidden">
      {/* Dark to light gradient - Step 3: Medium */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#151528] to-[#1e1e38]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div>
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              Latest
              <span className="text-muted-foreground font-light italic"> insights</span>
            </h2>
          </div>
          
          <Button variant="outline" asChild className="w-full sm:w-fit touch-manipulation">
            <Link href="/blog" className="gap-2 justify-center sm:justify-start">
              View all posts
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {recentPosts.map((post, index) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group h-full touch-manipulation">
              <Card 
                className={`h-full bg-card/30 backdrop-blur-md border-border/30 hover:border-primary/40 hover:bg-card/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 overflow-hidden ${
                  index === 0 ? 'md:col-span-1' : ''
                }`}
              >
                {/* Colored accent bar */}
                <div className={`h-1 w-full ${
                  index === 0 ? 'bg-primary' : 
                  index === 1 ? 'bg-chart-2' : 
                  'bg-chart-3'
                }`} />
                
                <CardHeader className="pb-2 sm:pb-3 p-4 sm:p-6">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground text-xs sm:text-sm mb-1.5 sm:mb-2">
                    <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
                    <span>{formatDate(post.publishDate)}</span>
                  </div>
                  
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-1.5 sm:mb-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                  
                  <CardTitle className="text-base sm:text-lg group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-4 sm:p-6 pt-0">
                  {post.seoDescription && (
                    <CardDescription className="line-clamp-3 mb-3 sm:mb-4 text-xs sm:text-sm">
                      {post.seoDescription}
                    </CardDescription>
                  )}
                  
                  <div className="flex items-center text-primary text-xs sm:text-sm font-medium group-hover:gap-2 gap-1 transition-all duration-300">
                    Read more
                    <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 group-hover:translate-x-1 transition-transform duration-300 shrink-0" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
