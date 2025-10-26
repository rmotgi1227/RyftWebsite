// Format date for blog posts
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// Calculate reading time
export function calculateReadingTime(content: any[]): number {
  const wordsPerMinute = 200
  let wordCount = 0

  content.forEach((block: any) => {
    if (block.type === 'paragraph' && block.paragraph?.rich_text) {
      block.paragraph.rich_text.forEach((text: any) => {
        wordCount += text.plain_text.split(' ').length
      })
    }
    // Add more block types as needed
  })

  return Math.ceil(wordCount / wordsPerMinute)
}

// Convert Notion rich text to plain text
export function richTextToPlainText(richText: any[]): string {
  return richText.map((text) => text.plain_text).join('')
}

// Generate excerpt from content
export function generateExcerpt(content: any[], maxLength: number = 160): string {
  let excerpt = ''
  
  for (const block of content) {
    if (block.type === 'paragraph' && block.paragraph?.rich_text) {
      const text = richTextToPlainText(block.paragraph.rich_text)
      excerpt += text + ' '
      
      if (excerpt.length >= maxLength) {
        break
      }
    }
  }
  
  return excerpt.length > maxLength 
    ? excerpt.substring(0, maxLength).trim() + '...'
    : excerpt.trim()
}