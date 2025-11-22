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
    return "Ryft uses AI to automatically read and understand commission plans from any format - PDFs, Word docs, Excel files. It handles complex rules, accelerators, and clawbacks without manual configuration. This eliminates the typical 3-6 month setup time other platforms require. The AI can even understand nuanced language like 'if performance exceeds 120% of quota, apply 1.5x multiplier' and configure it correctly.";
  }
  
  // Zero setup
  if (message.includes('setup') || message.includes('implementation') || message.includes('install')) {
    return "Ryft is designed for zero-setup deployment. You can connect your CRM and HRIS in minutes, upload your commission plan, and our AI automatically configures everything. Most customers are processing commissions within 5 minutes of signing up. No consultants, no technical teams, no months-long implementations - just upload and go.";
  }
  
  // Real-time and dashboards
  if (message.includes('dashboard') || message.includes('real-time') || message.includes('live') || message.includes('tracking')) {
    return "Ryft provides real-time commission tracking with live dashboards. As soon as deals close in your CRM, commissions are calculated instantly and your team can see their earnings update in real-time. Sales reps can track their progress toward quotas, see upcoming accelerators, and understand exactly how each deal impacts their pay. Everything is completely transparent with detailed calculation breakdowns.";
  }
  
  // Audit and compliance
  if (message.includes('audit') || message.includes('compliance') || message.includes('dispute') || message.includes('transparency')) {
    return "Every commission calculation in Ryft includes complete audit trails. You can see exactly how each number was calculated, when it was processed, and what data was used. This eliminates commission disputes and ensures full compliance with your compensation plans. If a rep questions their commission, you can show them the exact calculation path in seconds.";
  }
  
  // Security questions
  if (message.includes('security') || message.includes('safe') || message.includes('data protection') || 
      message.includes('encryption') || message.includes('compliance')) {
    return "Ryft maintains enterprise-grade security with SOC 2 compliance, AES-256 encryption, and strict access controls. All data is encrypted in transit and at rest. We follow industry best practices to keep your commission data completely secure. Your sensitive commission data never leaves our secure infrastructure.";
  }
  
  // Integration questions
  if (message.includes('integrate') || message.includes('crm') || message.includes('salesforce') || 
      message.includes('hubspot') || message.includes('api')) {
    return "Ryft integrates with all major CRMs (Salesforce, HubSpot, Pipedrive), HRIS systems (BambooHR, ADP, Workday), and accounting platforms. Our API-first approach makes connecting your existing systems quick and seamless.";
  }
  
  // What does Ryft do - high level explanation
  if (message.includes('what does ryft do') || message.includes('what is ryft') || 
      message.includes('what does ryft') || message.includes('tell me about ryft')) {
    return "Ryft is a commission management platform that eliminates the complexity of tracking sales commissions. Instead of spending hours in spreadsheets with manual calculations and errors, Ryft automates everything. You upload your commission plan, connect your CRM, and our AI handles all the calculations in real-time. Your sales team gets transparent dashboards showing exactly how much they've earned and why. Think of it as replacing your commission spreadsheet chaos with an intelligent, automated system that just works.";
  }
  
  // General features
  if (message.includes('feature') || message.includes('capability') || message.includes('what can')) {
    return "Ryft offers five core capabilities: Zero Setup (5-minute deployment), AI Plan Parsing (reads any commission structure), Real-time Dashboards (live commission tracking), Complete Auditability (full transparency), and Enterprise Security (SOC 2 compliant). What specific area interests you most?";
  }
  
  // How does it work
  if (message.includes('how does') || message.includes('how it works') || message.includes('process')) {
    return "Here's how Ryft works: 1) Connect your CRM and HRIS (takes 2 minutes), 2) Upload your commission plan as a PDF or document, 3) Our AI reads and configures all the rules automatically, 4) As deals close in your CRM, commissions calculate instantly, 5) Your team sees real-time earnings in their dashboard. No manual work, no spreadsheets, no errors. It's that simple.";
  }
  
  // Commission/sales context
  if (message.includes('commission') && !message.includes('feature')) {
    return "Ryft transforms how companies handle commission management. Most businesses struggle with complex spreadsheets, manual calculations, and constant disputes about commission accuracy. Ryft automates this entire process - from reading your commission plans to calculating payments in real-time as deals close. Sales teams get complete transparency into their earnings, and finance teams eliminate hours of manual work every month.";
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
  
  // Benefits and ROI questions
  if (message.includes('benefit') || message.includes('roi') || message.includes('save time') || 
      message.includes('why ryft') || message.includes('advantage')) {
    return "Ryft delivers three main benefits: Time Savings (eliminates hours of manual commission work each month), Accuracy (no more spreadsheet errors or disputes), and Transparency (sales teams see exactly what they're earning in real-time). Most customers see 80% reduction in commission-related support tickets and eliminate end-of-month commission calculation stress entirely.";
  }
  
  // Problems Ryft solves
  if (message.includes('problem') || message.includes('challenge') || message.includes('pain') || 
      message.includes('struggle') || message.includes('difficult')) {
    return "Ryft solves the biggest commission management headaches: endless spreadsheet maintenance, manual calculation errors, commission disputes from unclear calculations, delayed payments due to processing time, and lack of visibility for sales teams. If you're spending hours each month on commission calculations or dealing with 'why is my commission wrong?' questions, Ryft eliminates all of that.";
  }
  
  // Comparison questions
  if (message.includes('compare') || message.includes('versus') || message.includes('vs') || 
      message.includes('different') || message.includes('alternative')) {
    return "Unlike traditional commission tools that require months of setup and technical expertise, Ryft works immediately with your existing plans. While competitors force you to rebuild your commission structure in their system, Ryft's AI reads your current plans and configures everything automatically. You keep your existing commission logic - Ryft just automates the calculations.";
  }
  
  // Industry/company size questions
  if (message.includes('company size') || message.includes('industry') || message.includes('team size') || 
      message.includes('small business') || message.includes('enterprise')) {
    return "Ryft works for any company with sales commissions - from 5-person startups to enterprise teams with 500+ sales reps. We support all industries: SaaS, manufacturing, real estate, insurance, retail, etc. The AI adapts to your specific commission structure regardless of complexity. Whether you have simple percentage-based plans or complex multi-tier accelerators, Ryft handles it.";
  }
  
  // Default response
  return "Thanks for your question! I'm here to help you learn about Ryft's commission management platform. Feel free to ask about our features, pricing, security, or anything else you'd like to know!";
}

export async function GET() {
  return NextResponse.json({ status: 'Nexus API is running' });
}