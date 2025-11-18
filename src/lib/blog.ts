import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const blogDirectory = path.join(process.cwd(), 'src/content/blog')

export interface BlogPost {
  slug: string
  title: string
  publishDate: string
  author: string
  seoDescription: string
  tags: string[]
  featuredImage?: string
  content: string
  published: boolean
}

export function getAllBlogPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(blogDirectory)
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(blogDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        publishDate: data.publishDate,
        author: data.author,
        seoDescription: data.seoDescription,
        tags: data.tags || [],
        featuredImage: data.featuredImage,
        content,
        published: data.published
      }
    })
    .filter(post => post.published)
    .sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1))

  return allPostsData
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    if (!data.published) {
      return null
    }

    return {
      slug,
      title: data.title,
      publishDate: data.publishDate,
      author: data.author,
      seoDescription: data.seoDescription,
      tags: data.tags || [],
      featuredImage: data.featuredImage,
      content,
      published: data.published
    }
  } catch {
    return null
  }
}