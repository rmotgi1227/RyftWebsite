import { Client } from '@notionhq/client'

// Initialize Notion client
export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export const BLOG_DATABASE_ID = process.env.NOTION_BLOG_DATABASE_ID!

// Types for blog posts
export interface BlogPost {
  id: string
  title: string
  slug: string
  published: boolean
  publishDate: string
  author: string
  tags: string[]
  seoDescription: string
  featuredImage?: string
  content: any[]
  createdAt: string
  updatedAt: string
}

// Convert Notion page to BlogPost
export function notionPageToBlogPost(page: any): BlogPost {
  const properties = page.properties

  return {
    id: page.id,
    title: properties.Title?.title?.[0]?.plain_text || '',
    slug: properties.Slug?.rich_text?.[0]?.plain_text || '',
    published: properties.Published?.checkbox || false,
    publishDate: properties['Publish Date']?.date?.start || page.created_time,
    author: properties.Author?.rich_text?.[0]?.plain_text || 'RYFT Team',
    tags: properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
    seoDescription: properties['SEO Description']?.rich_text?.[0]?.plain_text || '',
    featuredImage: properties['Featured Image']?.files?.[0]?.file?.url || properties['Featured Image']?.files?.[0]?.external?.url,
    content: [],
    createdAt: page.created_time,
    updatedAt: page.last_edited_time,
  }
}

// Fetch all published blog posts
export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await notion.databases.query({
      database_id: BLOG_DATABASE_ID,
      filter: {
        property: 'Published',
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: 'Publish Date',
          direction: 'descending',
        },
      ],
    })

    return response.results.map(notionPageToBlogPost)
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

// Fetch a single blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await notion.databases.query({
      database_id: BLOG_DATABASE_ID,
      filter: {
        and: [
          {
            property: 'Published',
            checkbox: {
              equals: true,
            },
          },
          {
            property: 'Slug',
            rich_text: {
              equals: slug,
            },
          },
        ],
      },
    })

    if (response.results.length === 0) {
      return null
    }

    const page = response.results[0]
    const blogPost = notionPageToBlogPost(page)

    // Fetch page content
    const blocks = await notion.blocks.children.list({
      block_id: page.id,
    })

    blogPost.content = blocks.results

    return blogPost
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}