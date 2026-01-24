import { MDXRemote } from 'next-mdx-remote/rsc'

const components = {
  h1: (props: any) => <h1 className="text-3xl font-bold text-white mt-12 mb-6" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-bold text-white mt-10 mb-4" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-bold text-white mt-8 mb-3" {...props} />,
  p: (props: any) => <p className="mb-6 text-white/90 leading-relaxed" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 mb-6 space-y-2 text-white/90" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-white/90" {...props} />,
  li: (props: any) => <li className="text-white/90" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-primary/50 pl-6 py-4 my-6 bg-white/5 rounded-r-lg" {...props}>
      <div className="text-white/80 text-lg italic">{props.children}</div>
    </blockquote>
  ),
  strong: (props: any) => <strong className="font-semibold text-white" {...props} />,
  em: (props: any) => <em className="italic text-white/90" {...props} />,
  a: (props: any) => (
    <a 
      className="text-primary hover:text-primary/80 underline" 
      target="_blank" 
      rel="noopener noreferrer" 
      {...props} 
    />
  ),
  code: (props: any) => (
    <code className="bg-white/10 text-primary px-2 py-1 rounded text-sm" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-black/40 text-white p-6 rounded-lg overflow-x-auto my-6 border border-white/10" {...props} />
  ),
}

interface MDXRendererProps {
  content: string
}

export function MDXRenderer({ content }: MDXRendererProps) {
  return (
    <div className="prose prose-lg max-w-none prose-invert">
      <MDXRemote source={content} components={components} />
    </div>
  )
}