export interface CaseStudy {
  slug: string;
  title: string;
  company: string;
  category: string;
  timeFrame: string;
  tags: string[];
  preview: string;
  metrics: {
    metric1: string;
    metric2: string;
    timeFrame: string;
    metric1Label: string;
    metric2Label: string;
    timeFrameLabel: string;
  };
  fullContent: {
    overview: string;
    challenges: string[];
    solution: string;
    results: string;
    keyLearnings: string[];
    conclusion: {
      summary: string;
      strategicTakeaway: string;
    };
  };
  metaDescription: string;
  pdfUrl: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'emc-customer-centricity',
    title: "EMC² – Customer Centricity in a Digital Era",
    company: "EMC Corporation",
    category: "B2B Strategy",
    timeFrame: "1990s-2010",
    preview: "How EMC transformed from a hardware startup into a global leader through customer-centric digital transformation.",
    tags: ["B2B Strategy", "VOC", "Digital Transformation", "Product Segmentation"],
    metrics: {
      metric1: "99% Retention Rate",
      metric2: "80% Repeat Customer Sales",
      timeFrame: "1990s-2010",
      metric1Label: "",
      metric2Label: "",
      timeFrameLabel: ""
    },
    fullContent: {
      overview: "As EMC scaled from a hardware startup into a global leader in information infrastructure, its core differentiator remained clear: obsessive customer focus. But with a growing product portfolio, new customer segments, and digital disruption transforming how people buy, EMC faced a crucial question: How can high-touch customer centricity scale in a digital-first world?",
      challenges: [
        "Outdated Sales Model: Prospective customers were gathering product info online, reducing the influence of EMC's traditional in-person salesforce",
        "Overextended Service Model: EMC offered premium support to all customers—unsustainable as the company expanded into mid-market and consumer segments",
        "Third-Party Resellers (VARs): Delegating sales to VARs created disconnects with end users, threatening EMC's brand promise and service standards",
        "Operational Complexity at Scale: With 4,000+ products, even seasoned account teams struggled to deliver consultative, integrated solutions"
      ],
      solution: "EMC implemented a multi-faceted approach: Tiered Product Segmentation (Symmetrix, CLARiiON, Centera), Lifecycle-Centric Bundling through ILM, Voice of the Customer Systems (Executive Summits, Customer Councils, Loyalty tracking), and Digital + Human Hybrid Engagement (social media, community forums, online briefings, free trials).",
      results: "Achieved 99% retention rate (2001), 80% of sales from repeat customers, successful post-dotcom crash rebound through software/services diversification, and 80,000+ active members on EMC Community Network by 2010.",
      keyLearnings: [
        "Customer-Centric ≠ One-Size-Fits-All: Premium service must scale intelligently with differentiated models across segments",
        "Loyalty > Satisfaction: Despite 97% satisfaction rates, retention was only predicted through advanced loyalty KPIs",
        "Digital Behavior is the New Feedback Loop: Reading 'digital body language' in forums and social platforms became crucial",
        "VAR Partnerships Need Guardrails: While VARs boosted reach, they required stricter standards and integration"
      ],
      conclusion: {
        summary: "EMC's journey shows that true customer centricity isn't static—it must evolve with scale, segmentation, and digital transformation. EMC successfully transitioned from a product-led to a relationship-driven organization by embedding VOC systems, adapting its sales model, and balancing high-tech and high-touch.",
        strategicTakeaway: "In an age of digital disruption, customer-centricity isn't about doing more—it's about doing smarter, scaled, insight-driven service."
      }
    },
    pdfUrl: "/case-studies/emc-full.pdf",
    metaDescription: "Explore how EMC Corporation transformed its customer strategy through digital transformation, achieving 99% retention rate and scaling customer-centricity in a digital-first world."
  },
  {
    slug: 'starbucks-scaling-service',
    title: "Starbucks – Scaling Service Without Losing Soul",
    company: "Starbucks",
    category: "CX Strategy",
    timeFrame: "2002",
    preview: "How Starbucks balanced rapid growth with maintaining its premium customer experience and brand values.",
    tags: ["CX Strategy", "Service Design", "Operational Tradeoffs", "Customer Loyalty"],
    metrics: {
      metric1: "25% YoY Revenue",
      metric2: "20M+ Customers",
      timeFrame: "2002",
      metric1Label: "",
      metric2Label: "",
      timeFrameLabel: ""
    },
    fullContent: {
      overview: "Can Starbucks preserve its premium customer experience as it scales rapidly — and what level of service investment truly drives loyalty, satisfaction, and revenue?",
      challenges: [
        "Brand Perception Drift: Despite strong growth, 61% of surveyed customers believed Starbucks cared more about money than experience. Only 25% had a strongly favorable opinion overall",
        "Service Expectation Gap: Starbucks scored well on internal metrics, yet customer satisfaction scores lagged. Slow service times (3.8 minutes avg) clashed with the brand's 'legendary service' promise",
        "Data-Rich, Insight-Poor: Despite collecting robust data, Starbucks lacked a centralized strategic marketing team to interpret customer insights holistically",
        "Operational Strain: Baristas faced hundreds of drink combinations, growing customer volume, and limited support. Customization and service quality often conflicted"
      ],
      solution: "Starbucks implemented a comprehensive strategy: $40M investment for 20 labor hours/week/store to reduce wait times, VOC + Market Segmentation to understand customer behavior, shift to customer-centric metrics focusing on CLV, and brand clarity reset examining positioning between convenience and community.",
      results: "Achieved $3.29B revenue (↑25% YoY), $310M operating profit, 20M+ unique customers across 5,886 global stores. Launched successful Starbucks card with 6M cards issued in 1st year, with cardholders visiting 2x more often. Planned 525 new company-operated stores in North America with 20%+ CAGR projected.",
      keyLearnings: [
        "Speed Drives Loyalty: A 1-minute delay compounds—eroding loyalty, increasing churn, and reducing CLV",
        "More Stores ≠ More Love: Brand dilution risked turning Starbucks into a fast-coffee chain in perception",
        "Employee-Centric Culture = CX Advantage: 60,000+ 'partners' with generous benefits tied partner satisfaction to customer satisfaction",
        "Marketing Strategy Isn't Just Messaging: Lack of centralized marketing meant missed opportunities to anticipate shifting customer profiles"
      ],
      conclusion: {
        summary: "Starbucks' challenge wasn't about brewing better coffee—it was about scaling intimacy in a brand built on human connection. By treating labor not as cost but as investment, Starbucks aimed to reconnect with its most valuable asset: loyal customers.",
        strategicTakeaway: "True brand value isn't built on ubiquity—it's built on every interaction feeling intentional, human, and worth coming back for."
      }
    },
    pdfUrl: "/case-studies/starbucks-full.pdf",
    metaDescription: "Explore how Starbucks balanced rapid expansion with maintaining its premium customer experience, achieving 25% YoY revenue growth while reinvesting in service quality."
  },
  {
    slug: 'virgin-mobile-pricing-disruption',
    title: "Virgin Mobile USA – Pricing Disruption for a Generation Ignored",
    company: "Virgin Mobile USA",
    category: "Pricing Strategy",
    timeFrame: "2002",
    preview: "How Virgin Mobile USA disrupted the mobile market by targeting underserved youth with transparent pricing and cultural relevance.",
    tags: ["Pricing Strategy", "Youth Market", "MVNO", "Brand Positioning"],
    metrics: {
      metric1: "3,000 Stores",
      metric2: "1M Target Users",
      timeFrame: "2002",
      metric1Label: "",
      metric2Label: "",
      timeFrameLabel: ""
    },
    fullContent: {
      overview: "In a saturated U.S. mobile market dominated by contract-driven carriers, how can a new entrant profitably acquire and retain 15–29-year-old users—without relying on traditional credit checks or postpaid plans?",
      challenges: [
        "Underserved Youth Segment: The 15–29 age group had lower credit scores, inconsistent usage, and was largely ignored by national carriers who focused on high-value, business-centric users",
        "Complex, Distrusted Pricing Norms: Industry pricing was opaque: hidden fees, unpredictable bills, and punitive overage charges alienated users. Most youth didn't trust cell carriers' advertised deals",
        "High Churn Risk: Eliminating contracts or using prepaid models increased risk of churn (up to 6% monthly), threatening profitability",
        "Brand New in the U.S.: Virgin lacked U.S. telecom presence. Its challenge: break through with limited marketing spend while establishing credibility in a trust-deficient industry"
      ],
      solution: "Virgin Mobile implemented a youth-focused strategy: radical prepaid model with transparent pricing, content partnerships with MTV (VirginXtras), distribution through youth-aligned retailers, and targeted $60M marketing budget in youth media. Phones were positioned as cultural accessories with $60-$100 price points and stylish branding.",
      results: "Launched in 3,000 retail locations with a target of 1 million subscribers in year one and 3 million by year four. Balanced higher prepaid churn (6%) against lower acquisition costs and simplified pricing model to ensure profitability across variable usage patterns.",
      keyLearnings: [
        "Pricing Simplicity = Trust + Differentiation: Youth cited pricing confusion as top frustration; transparent pricing built brand authenticity",
        "Phones as Identity, Not Utility: Mobile devices served as fashion statements and social currency, driving MTV partnership success",
        "Profit ≠ Volume Alone: Success required focus on positive-LTV customers in high-churn market",
        "Disruption Needs Guardrails: Innovation in pricing/packaging balanced against profitability and competitive response"
      ],
      conclusion: {
        summary: "Virgin Mobile USA carved a space in one of the toughest markets by thinking like the user, not the industry. With strategic restraint, clever positioning, and culturally attuned offerings, the brand disrupted not just how phones were priced—but what phones meant.",
        strategicTakeaway: "When every competitor chases volume, real opportunity lies in crafting trust and value for the ignored."
      }
    },
    pdfUrl: "/case-studies/virgin-mobile-full.pdf",
    metaDescription: "Discover how Virgin Mobile USA disrupted the mobile market by targeting underserved youth with transparent pricing and cultural relevance, aiming for 1M subscribers in year one."
  },
  {
    slug: 'dolby-laboratories-broadcast',
    title: 'Dolby Laboratories – Entering Broadcast with Precision',
    company: 'Dolby Laboratories',
    category: 'Product Strategy / Market Entry',
    timeFrame: '2002',
    tags: ['Pricing Strategy', 'B2B Marketing', 'Broadcast Technology', 'Product Launch'],
    preview: 'How Dolby Laboratories strategically positioned and priced its LM100 Broadcast Loudness Meter to solve widespread audio issues while building a scalable foothold in the fragmented broadcast market.',
    metrics: {
      metric1: '80% Market Control',
      metric2: '11,000 Cable Head Ends',
      timeFrame: '2002',
      metric1Label: 'Market Control',
      metric2Label: 'Cable Head Ends',
      timeFrameLabel: 'Year'
    },
    fullContent: {
      overview: 'Dolby Laboratories faced the challenge of introducing its new LM100 Broadcast Loudness Meter to a market it didn\'t yet fully serve. The product was technically strong but entering a space where purchasing behavior, distribution access, and value perception were uncertain.',
      challenges: [
        'Segment prioritization across production houses, post-production facilities, networks, local TV stations, and cable providers',
        'Varying price sensitivity across different market segments',
        'Limited distribution reach into critical cable MSO and local broadcast station segments',
        'Uncertainty in pricing strategy between cost-plus and value-based approaches'
      ],
      solution: 'Dolby focused on a well-known user pain point: inconsistent volume across broadcasts. The LM100 implemented the open-standard Equivalent Loudness Method in a real-time, easy-to-use format, capable of detecting silence, alerting operators to errors, and providing actionable loudness measurements.',
      results: 'Dolby identified cable MSOs as the highest-potential segment, with six providers controlling 80% of the 11,000 cable head ends in the U.S. This presented an opportunity for high-impact, scalable deployment while addressing operational challenges and customer retention issues.',
      keyLearnings: [
        'The LM100 represented a platform play, not just a niche tool',
        'Cable MSOs, while cost-conscious, stood to gain the most from the solution',
        'Dolby\'s brand provided an edge, but success depended on execution',
        'The launch was a test of Dolby\'s ability to scale into a broader, less premium market'
      ],
      conclusion: {
        summary: 'The LM100 gave Dolby a rare opportunity to lead a new category, but success required more than just technical excellence. By pricing smart, targeting cable MSOs first, and investing in distribution reach, Dolby could build a real broadcast presence while reinforcing its reputation as the gold standard in sound.',
        strategicTakeaway: 'Solving technical problems is only half the battle. Dolby\'s success with the LM100 depended on turning a clear user pain into a scalable market opportunity.'
      }
    },
    metaDescription: 'Case study of how Dolby Laboratories strategically positioned and priced its LM100 Broadcast Loudness Meter to solve widespread audio issues while building a scalable foothold in the fragmented broadcast market.',
    pdfUrl: '/case-studies/dolby-laboratories-broadcast.pdf'
  },
  {
    slug: 'efi-sales-strategy',
    title: 'EFI, Inc. – Redesigning Sales Strategy Without Losing Momentum',
    company: 'Electronics for Imaging (EFI)',
    category: 'Sales Strategy / Channel Management',
    timeFrame: '2005',
    tags: ['OEM Partnerships', 'Compensation Design', 'Channel Sales', 'GTM Alignment'],
    preview: 'How EFI evolved its sales compensation and organizational model to increase performance, gain customer visibility, and reduce dependency on OEMs—without destabilizing its high-performing team culture.',
    metrics: {
      metric1: '$395M 2004 Revenue',
      metric2: '30,000 Global Reps',
      timeFrame: '2005',
      metric1Label: '2004 Revenue',
      metric2Label: 'Global Reps',
      timeFrameLabel: 'Year'
    },
    fullContent: {
      overview: 'EFI was a market leader in digital print controllers, with $395M in 2004 revenue and a dominant position through its Fiery product line. But its go-to-market model leaned heavily on OEM partnerships, which limited EFI\'s access to customer data, control over messaging, and ability to recognize its own salesforce\'s contributions.',
      challenges: [
        'Lack of end-user visibility due to selling through OEMs like Canon, Xerox, and Ricoh',
        'Geographically fragmented sales structure that didn\'t align with OEM purchasing decisions',
        'Misaligned compensation model that rewarded team performance equally regardless of individual contribution',
        'Shifting OEM dynamics with in-house controller production eroding EFI\'s technical advantage'
      ],
      solution: 'EFI implemented a comprehensive strategy: rethinking compensation to reward individual performance, gaining visibility into end-user activity through software products, realigning sales structure with centralized planning, and intensifying support and marketing to OEM sales teams.',
      results: 'EFI successfully evolved its sales approach while maintaining momentum, gaining better control over customer relationships and performance measurement through software channels, and strengthening OEM partnerships through targeted marketing and support.',
      keyLearnings: [
        'Control vs. Reach: OEM model provided access to 30,000 reps but limited customer insight',
        'Data Drives Accountability: Performance metrics are essential for identifying and rewarding top talent',
        'Structure Must Match Strategy: Sales organization needs to align with where influence is exercised',
        'High Performance Needs Recognition: Incentive programs are strategic tools for talent retention and sales behavior'
      ],
      conclusion: {
        summary: 'EFI stood at a critical inflection point where its sales model needed to evolve to match its growth ambitions. By modernizing compensation, centralizing sales influence, and investing in channel intelligence, EFI could shift from a product-led to a performance-led organization while maintaining its collaborative culture.',
        strategicTakeaway: 'To compete in a faster, more data-driven world, EFI needed more than great products—it needed visibility, agility, and a sales model built for ownership.'
      }
    },
    metaDescription: 'Case study of how EFI evolved its sales compensation and organizational model to increase performance and reduce OEM dependency while maintaining its high-performing team culture.',
    pdfUrl: '/case-studies/efi-sales-strategy.pdf'
  },
  {
    slug: 'cyworld-social-network',
    title: 'Cyworld – Redefining Value in a Saturated Social Network',
    company: 'Cyworld (SK Communications)',
    category: 'Platform Strategy / Revenue Model Transformation',
    timeFrame: '2003–2008',
    tags: ['Social Networking', 'Virtual Goods', 'Mobile Integration', 'User Engagement'],
    preview: 'How Cyworld navigated the challenges of sustaining revenue growth and user engagement after reaching near-total market penetration in Korea, while evolving its business model in a rapidly shifting digital landscape.',
    metrics: {
      metric1: '21M Total Users',
      metric2: '90% 20s Demographic Penetration',
      timeFrame: '2003–2008',
      metric1Label: 'Total Users',
      metric2Label: '20s Penetration',
      timeFrameLabel: 'Period'
    },
    fullContent: {
      overview: 'By 2007, Cyworld had achieved remarkable success with 21 million users and over 90% penetration among Koreans in their 20s. However, this growth masked deeper risks as users spent less time on the site, virtual items lost appeal, and overseas expansions struggled.',
      challenges: [
        'Declining user engagement despite high penetration',
        'Virtual items losing appeal (70% of revenue)',
        'Limited success in overseas expansion',
        'Shifting user behavior toward blogs and mobile platforms'
      ],
      solution: 'Cyworld explored three core pivots: reinvigorating virtual items with 3D features and gifting, shifting to an ad-based model through programs like "Happy Click," and expanding into mobile through Mobile Cyworld. They also launched Home2, a next-gen platform blending blog functionality with social networking.',
      results: 'Mobile Cyworld gained 1.3 million users and generated $14M in revenue by 2006. However, the Home2 platform saw limited adoption, and the company faced ongoing challenges in balancing monetization with user experience.',
      keyLearnings: [
        'Engagement doesn\'t always equal monetization - top 15% of spenders drove 35% of sales',
        'Network saturation limits growth potential and shifts focus to retention',
        'Global expansion requires strong cultural alignment and differentiated value',
        'Monetization model choices significantly impact user experience'
      ],
      conclusion: {
        summary: 'Cyworld wasn\'t broken—it was outgrown. The platform that once defined Korean digital culture needed to evolve beyond feature additions to fundamentally rethink user value, value capture, and its place in an ecosystem dominated by mobile, media, and global players.',
        strategicTakeaway: 'When your platform matures before your business model, evolution isn\'t optional—it\'s survival.'
      }
    },
    metaDescription: 'Case study examining how Cyworld navigated the challenges of sustaining growth and engagement in a saturated market while transforming its business model to compete in an evolving digital landscape.',
    pdfUrl: '/case-studies/cyworld-social-network.pdf'
  },
  // Add more case studies...
];

export function getNextAndPreviousCases(currentSlug: string) {
  const currentIndex = caseStudies.findIndex(cs => cs.slug === currentSlug);
  return {
    previous: currentIndex > 0 ? caseStudies[currentIndex - 1] : null,
    next: currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null
  };
} 