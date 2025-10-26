import React from 'react'
import Image from 'next/image'

interface NotionRendererProps {
  blocks: any[]
}

export function NotionRenderer({ blocks }: NotionRendererProps) {
  const renderBlock = (block: any) => {
    const { type, id } = block

    switch (type) {
      case 'paragraph':
        return (
          <p key={id} className="mb-6">
            {renderRichText(block.paragraph.rich_text)}
          </p>
        )

      case 'heading_1':
        return (
          <h1 key={id} className="text-3xl font-bold text-navy-900 mt-12 mb-6">
            {renderRichText(block.heading_1.rich_text)}
          </h1>
        )

      case 'heading_2':
        return (
          <h2 key={id} className="text-2xl font-bold text-navy-900 mt-10 mb-4">
            {renderRichText(block.heading_2.rich_text)}
          </h2>
        )

      case 'heading_3':
        return (
          <h3 key={id} className="text-xl font-bold text-navy-900 mt-8 mb-3">
            {renderRichText(block.heading_3.rich_text)}
          </h3>
        )

      case 'bulleted_list_item':
        return (
          <li key={id} className="mb-2">
            {renderRichText(block.bulleted_list_item.rich_text)}
          </li>
        )

      case 'numbered_list_item':
        return (
          <li key={id} className="mb-2">
            {renderRichText(block.numbered_list_item.rich_text)}
          </li>
        )

      case 'quote':
        return (
          <blockquote key={id} className="border-l-4 border-accent-500 pl-6 py-4 my-6 bg-navy-50 rounded-r-lg">
            <div className="text-navy-700 text-lg italic">
              {renderRichText(block.quote.rich_text)}
            </div>
          </blockquote>
        )

      case 'code':
        return (
          <pre key={id} className="bg-navy-900 text-white p-6 rounded-lg overflow-x-auto my-6">
            <code className="text-sm">
              {block.code.rich_text.map((text: any) => text.plain_text).join('')}
            </code>
          </pre>
        )

      case 'image':
        const src = block.image.type === 'external' 
          ? block.image.external.url 
          : block.image.file.url
        const caption = block.image.caption.length > 0 
          ? block.image.caption[0].plain_text 
          : ''

        return (
          <figure key={id} className="my-8">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={src}
                alt={caption || 'Blog image'}
                fill
                className="object-cover"
              />
            </div>
            {caption && (
              <figcaption className="text-center text-navy-500 text-sm mt-2 italic">
                {caption}
              </figcaption>
            )}
          </figure>
        )

      case 'divider':
        return (
          <hr key={id} className="border-navy-200 my-8" />
        )

      case 'callout':
        return (
          <div key={id} className="bg-accent-50 border border-accent-200 rounded-lg p-6 my-6">
            <div className="flex items-start gap-3">
              {block.callout.icon && (
                <span className="text-2xl">{block.callout.icon.emoji}</span>
              )}
              <div className="text-accent-900">
                {renderRichText(block.callout.rich_text)}
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  const renderRichText = (richText: any[]) => {
    return richText.map((text: any, index: number) => {
      let element = text.plain_text

      if (text.annotations.bold) {
        element = <strong key={index}>{element}</strong>
      }
      if (text.annotations.italic) {
        element = <em key={index}>{element}</em>
      }
      if (text.annotations.strikethrough) {
        element = <del key={index}>{element}</del>
      }
      if (text.annotations.underline) {
        element = <u key={index}>{element}</u>
      }
      if (text.annotations.code) {
        element = (
          <code key={index} className="bg-navy-100 text-navy-800 px-2 py-1 rounded text-sm">
            {element}
          </code>
        )
      }
      if (text.href) {
        element = (
          <a 
            key={index}
            href={text.href}
            className="text-accent-600 hover:text-accent-700 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {element}
          </a>
        )
      }

      return element
    })
  }

  // Group consecutive list items
  const groupedBlocks = []
  let currentList = []
  let currentListType = null

  for (const block of blocks) {
    if (block.type === 'bulleted_list_item' || block.type === 'numbered_list_item') {
      if (currentListType !== block.type) {
        if (currentList.length > 0) {
          groupedBlocks.push({
            type: currentListType,
            items: currentList,
          })
        }
        currentList = [block]
        currentListType = block.type
      } else {
        currentList.push(block)
      }
    } else {
      if (currentList.length > 0) {
        groupedBlocks.push({
          type: currentListType,
          items: currentList,
        })
        currentList = []
        currentListType = null
      }
      groupedBlocks.push(block)
    }
  }

  if (currentList.length > 0) {
    groupedBlocks.push({
      type: currentListType,
      items: currentList,
    })
  }

  return (
    <div className="notion-content">
      {groupedBlocks.map((item, index) => {
        if (item.type === 'bulleted_list_item') {
          return (
            <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
              {item.items.map(renderBlock)}
            </ul>
          )
        } else if (item.type === 'numbered_list_item') {
          return (
            <ol key={index} className="list-decimal pl-6 mb-6 space-y-2">
              {item.items.map(renderBlock)}
            </ol>
          )
        } else {
          return renderBlock(item)
        }
      })}
    </div>
  )
}