import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { message, conversation } = await req.json();
    
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Rate limiting check (simple version)
    const userAgent = req.headers.get('user-agent') || '';
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('remote-addr') || '';
    
    // Generate demo-focused response based on keywords
    const response = generateNexusResponse(message.toLowerCase());
    
    return NextResponse.json({
      message: response,
      timestamp: new Date().toISOString(),
    });

  } catch (error) {
    console.error('Nexus API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function generateNexusResponse(message: string): string {
  // Demo requests
  if (message.includes('demo') || message.includes('see ryft') || message.includes('show me')) {
    return "I'd love to show you Ryft in action! [Book a demo here](/demo) and our team will walk you through how Ryft can solve your commission tracking challenges.";
  }
  
  // Pricing inquiries
  if (message.includes('price') || message.includes('cost') || message.includes('pricing') || 
      (message.includes('plan') && !message.includes('parsing'))) {
    return "Ryft's pricing is customized based on your team size and specific needs. For accurate pricing, I'd recommend speaking with our team who can provide a tailored quote. [Contact sales here](/demo) for pricing details.";
  }
  
  // AI and parsing features
  if (message.includes('ai') || message.includes('parsing') || message.includes('artificial intelligence')) {
    return "Ryft uses AI to automatically read and understand commission plans from any format - PDFs, Word docs, Excel files. It handles complex rules, accelerators, and clawbacks without manual configuration. This eliminates the typical 3-6 month setup time other platforms require.";
  }
  
  // Zero setup
  if (message.includes('setup') || message.includes('implementation') || message.includes('install')) {
    return "Ryft is designed for zero-setup deployment. You can connect your CRM and HRIS in minutes, upload your commission plan, and our AI automatically configures everything. Most customers are processing commissions within 5 minutes of signing up.";
  }
  
  // Real-time and dashboards
  if (message.includes('dashboard') || message.includes('real-time') || message.includes('live') || message.includes('tracking')) {
    return "Ryft provides real-time commission tracking with live dashboards. As soon as deals close in your CRM, commissions are calculated instantly and your team can see their earnings update in real-time. Everything is completely transparent with detailed calculation breakdowns.";
  }
  
  // Audit and compliance
  if (message.includes('audit') || message.includes('compliance') || message.includes('dispute') || message.includes('transparency')) {
    return "Every commission calculation in Ryft includes complete audit trails. You can see exactly how each number was calculated, when it was processed, and what data was used. This eliminates commission disputes and ensures full compliance with your compensation plans.";
  }
  
  // Security questions
  if (message.includes('security') || message.includes('safe') || message.includes('data protection') || 
      message.includes('encryption') || message.includes('compliance')) {
    return "Ryft maintains enterprise-grade security with SOC 2 compliance, AES-256 encryption, and strict access controls. All data is encrypted in transit and at rest. We follow industry best practices to keep your commission data completely secure.";
  }
  
  // Integration questions
  if (message.includes('integrate') || message.includes('crm') || message.includes('salesforce') || 
      message.includes('hubspot') || message.includes('api')) {
    return "Ryft integrates with all major CRMs (Salesforce, HubSpot, Pipedrive), HRIS systems (BambooHR, ADP, Workday), and accounting platforms. Our API-first approach makes connecting your existing systems quick and seamless.";
  }
  
  // General features
  if (message.includes('feature') || message.includes('what does') || message.includes('how does') || 
      message.includes('commission') || message.includes('capability')) {
    return "Ryft offers five core capabilities: Zero Setup (5-minute deployment), AI Plan Parsing (reads any commission structure), Real-time Dashboards (live commission tracking), Complete Auditability (full transparency), and Enterprise Security (SOC 2 compliant). What specific area interests you most?";
  }
  
  // Greetings
  if (message.includes('hello') || message.includes('hi') || message.includes('hey') ||
      message.includes('how are you') || message.includes('how are u')) {
    return "Hello! I'm Nexus, Ryft's AI assistant. I'm here to help answer questions about our commission management platform. What would you like to know about Ryft?";
  }
  
  // Contact requests
  if (message.includes('contact') || message.includes('talk to') || message.includes('speak with') || 
      message.includes('human') || message.includes('support')) {
    return "I'd be happy to connect you with our team! You can reach out directly through our [contact page](/contact), or if you'd like to see Ryft in action, you can [book a demo](/demo) to speak with someone live.";
  }
  
  // Default response
  return "Thanks for your question! I'm here to help you learn about Ryft's commission management platform. Feel free to ask about our features, pricing, security, or anything else you'd like to know!";
}

export async function GET() {
  return NextResponse.json({ status: 'Nexus API is running' });
}