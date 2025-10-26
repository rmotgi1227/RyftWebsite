# Notion Blog Setup Guide

## Step 1: Create Notion Integration

1. Go to [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Click "New integration"
3. Name it "RYFT Blog"
4. Select your workspace
5. Click "Submit"
6. Copy the "Integration Token" (starts with `secret_`)

## Step 2: Create Blog Database

1. Create a new Notion page called "RYFT Blog Database"
2. Add a database with these properties:

### Required Properties:
- **Title** (Title) - The blog post title
- **Slug** (Rich text) - URL-friendly version (e.g., "my-first-post")
- **Published** (Checkbox) - Whether the post is live
- **Publish Date** (Date) - When to publish
- **Author** (Rich text) - Post author name
- **SEO Description** (Rich text) - Meta description for SEO
- **Tags** (Multi-select) - Categories/tags
- **Featured Image** (Files & media) - Header image

### Optional Properties:
- **Status** (Select) - Draft, Review, Published
- **Reading Time** (Number) - Auto-calculated
- **Views** (Number) - Analytics

## Step 3: Share Database with Integration

1. Click "Share" on your database page
2. Search for "RYFT Blog" (your integration)
3. Click "Invite"

## Step 4: Get Database ID

1. Copy the database URL
2. Extract the ID from the URL (32-character string after the last slash and before the `?`)
   - URL: `https://notion.so/workspace/DATABASE_ID?v=...`
   - ID: The 32-character string

## Step 5: Add Environment Variables

Add these to your `.env.local` file:

```env
NOTION_TOKEN=secret_your_integration_token_here
NOTION_BLOG_DATABASE_ID=your_32_character_database_id
```

## Step 6: Create Your First Post

1. Add a new row to your database
2. Fill in all required fields:
   - **Title**: "Welcome to the RYFT Blog"
   - **Slug**: "welcome-to-ryft-blog"
   - **Published**: ✅ (checked)
   - **Publish Date**: Today's date
   - **Author**: "RYFT Team"
   - **SEO Description**: "Introducing the RYFT blog with insights on commission management and sales automation."
   - **Tags**: Add "Announcement"

3. Click into the page and write your content using Notion's rich text editor
4. Check the "Published" box when ready to go live

## Writing Workflow

Every Sunday night:
1. Create new database entry
2. Write your post in Notion (rich text, images, etc.)
3. Fill in all metadata (title, slug, description, tags)
4. Set "Published" to ✅
5. Your post automatically appears on ryft.cloud/blog!

## Supported Content Types

- Headings (H1, H2, H3)
- Paragraphs with rich text (bold, italic, links)
- Bulleted and numbered lists
- Images with captions
- Code blocks
- Quotes/callouts
- Dividers

## Tips for Great Blog Posts

1. **SEO-friendly slugs**: Use lowercase, hyphens, no spaces
2. **Compelling titles**: Focus on reader benefits
3. **Good descriptions**: 150-160 characters for SEO
4. **Use tags**: Help organize content
5. **Featured images**: Make posts visually appealing
6. **Clear structure**: Use headings to break up content

Your blog is now ready! 🎉