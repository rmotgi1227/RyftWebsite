import { MDXRemote } from 'next-mdx-remote/rsc'

const components = {
  h1: (props: any) => <h1 className="text-3xl font-bold text-navy-900 mt-12 mb-6" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-bold text-navy-900 mt-8 mb-3" {...props} />,
  p: (props: any) => <p className="mb-6 text-navy-700 leading-relaxed" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 mb-6 space-y-2" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 mb-6 space-y-2" {...props} />,
  li: (props: any) => <li className="text-navy-700" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-accent-500 pl-6 py-4 my-6 bg-navy-50 rounded-r-lg" {...props}>
      <div className="text-navy-700 text-lg italic">{props.children}</div>
    </blockquote>
  ),
  strong: (props: any) => <strong className="font-semibold text-navy-900" {...props} />,
  em: (props: any) => <em className="italic" {...props} />,
  a: (props: any) => (
    <a 
      className="text-accent-600 hover:text-accent-700 underline" 
      target="_blank" 
      rel="noopener noreferrer" 
      {...props} 
    />
  ),
  code: (props: any) => (
    <code className="bg-navy-100 text-navy-800 px-2 py-1 rounded text-sm" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-navy-900 text-white p-6 rounded-lg overflow-x-auto my-6" {...props} />
  ),
}

interface MDXRendererProps {
  content: string
}

export function MDXRenderer({ content }: MDXRendererProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <MDXRemote source={content} components={components} />
    </div>
  )
}