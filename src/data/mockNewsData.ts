import { TopicCluster, Article } from '../types';

export const INITIAL_TOPICS: TopicCluster[] = [
  {
    id: 'topic-ai-reasoning',
    label: 'Autonomous AI Reasoning & Extended Test-Time Compute Models',
    category: 'Technology & AI',
    region: 'Global',
    tagline: 'Multi-step deliberate reasoning architectures redefine algorithmic benchmark ceilings.',
    summary: 'A generational leap in artificial intelligence architectures is sweeping the tech sector as frontier labs shift from raw pre-training scale to extended test-time computation and reinforcement learning reasoning trees. Frontier models are demonstrating human-competitive abilities in competitive coding, multi-disciplinary mathematical proofs, and complex corporate due diligence. The transition has sparked a global race among cloud providers to optimize inference silicon for sustained tree-of-thought exploration rather than pure single-token latency.',
    purposeConclusion: 'The transition from intuitive next-token prediction to deliberate multi-step reasoning marks the maturation of generative AI into verifiable scientific and engineering workflows. In the next 6-12 months, enterprise adopters who integrate these reasoning engines will likely see drastic reductions in synthetic hallucinations, while semiconductor manufacturers will restructure datacenter capacity around high-bandwidth inference clusters.',
    whyTrending: {
      growthPct: 215,
      comparisonPeriod: 'Last 7 Days vs Prior 7 Days',
      articleCount: 1420,
      sourceCount: 38,
      drivers: [
        'OpenAI and frontier labs publish empirical evaluations on test-time compute scaling laws.',
        'Independent benchmark audits confirm 88%+ accuracy on complex competitive mathematics.',
        'Major chipmakers announce specialized inference accelerators tailored to tree search algorithms.'
      ],
      evidenceSummary: 'Observed coverage surged by 215% across 38 distinct media houses. Coverage shifted from speculative consumer demos to empirical benchmarks and silicon infrastructure demands.'
    },
    trendScore: 96,
    velocityStatus: 'surging',
    currentArticleCount: 1420,
    previousArticleCount: 450,
    growthRate: 215,
    sourceDiversityScore: 92,
    independentSourcesCount: 38,
    topEntities: {
      people: ['Sam Altman', 'Ilya Sutskever', 'Dario Amodei', 'Demis Hassabis'],
      orgs: ['OpenAI', 'Anthropic', 'Google DeepMind', 'NVIDIA', 'Microsoft'],
      locations: ['San Francisco', 'London', 'Tokyo', 'Taipei']
    },
    subtopics: [
      'Inference-Time Scaling Laws',
      'Benchmark Verification & Synthetic Data',
      'Datacenter Thermal Constraints',
      'Developer Tooling & Agentic IDEs'
    ],
    sentimentBreakdown: {
      positive: 58,
      neutral: 32,
      negative: 10
    },
    timeline: [
      {
        time: 'Today, 08:30 GMT',
        headline: 'Consensus grows around inference compute scaling as next frontier',
        source: 'Reuters Tech',
        snippet: 'Industry analysts declare test-time reasoning the primary driver of next-decade AI productivity.'
      },
      {
        time: 'Yesterday, 19:15 GMT',
        headline: 'Semiconductor manufacturers pivot roadmaps toward high-bandwidth inference',
        source: 'Bloomberg Technology',
        snippet: 'Chip foundries prioritize memory bandwidth architectures designed for multi-turn tree-search processing.'
      },
      {
        time: '2 days ago',
        headline: 'Academic consortium replicates reasoning milestones on open-weights baseline',
        source: 'Nature Machine Intelligence',
        snippet: 'Independent research teams validate that test-time search yields steep accuracy improvements.'
      },
      {
        time: '4 days ago',
        headline: 'Frontier AI lab unveils milestone technical paper on verification chains',
        source: 'TechCrunch',
        snippet: 'Paper details how self-correction feedback loops eliminate 85% of logic errors.'
      }
    ],
    perspectives: [
      {
        source: 'Reuters',
        focusAngle: 'Macroeconomic & Capital Expenditure Impact',
        stance: 'Pragmatic & Capital Focused',
        keyObservation: 'Highlighting massive multi-billion datacenter commitments and the shift in hardware capex from training to inference.'
      },
      {
        source: 'TechCrunch',
        focusAngle: 'Developer Ecosystem & Applied Startups',
        stance: 'Optimistic & Agile',
        keyObservation: 'Focusing on how independent developers can now build self-evaluating autonomous coding workflows.'
      },
      {
        source: 'Wired',
        focusAngle: 'Safety, Hallucination Audits & Labor Realities',
        stance: 'Critical & Watchful',
        keyObservation: 'Examining whether self-verifying systems can be manipulated and how corporate audit compliance must evolve.'
      }
    ],
    historicalVolume: [
      { timeLabel: 'Day 1', volume: 450, growthPct: 0, sentimentAverage: 0.35 },
      { timeLabel: 'Day 2', volume: 520, growthPct: 15, sentimentAverage: 0.40 },
      { timeLabel: 'Day 3', volume: 680, growthPct: 30, sentimentAverage: 0.45 },
      { timeLabel: 'Day 4', volume: 890, growthPct: 31, sentimentAverage: 0.48 },
      { timeLabel: 'Day 5', volume: 1100, growthPct: 24, sentimentAverage: 0.52 },
      { timeLabel: 'Day 6', volume: 1290, growthPct: 17, sentimentAverage: 0.55 },
      { timeLabel: 'Day 7 (Today)', volume: 1420, growthPct: 10, sentimentAverage: 0.56 }
    ],
    articles: [
      {
        id: 'art-ai-1',
        title: 'Frontier Labs Prove Extended Test-Time Reasoning Trumps Raw Model Weights',
        description: 'New empirical benchmarks demonstrate that providing models with recursive verification compute yields orders-of-magnitude improvements in STEM problem-solving.',
        source: 'Reuters Tech',
        publishedAt: '2 hours ago',
        url: 'https://www.reuters.com/technology/ai-reasoning-scaling-2026',
        category: 'Technology & AI',
        readingTimeMinutes: 5,
        sentiment: 'positive',
        sentimentScore: 0.65,
        entities: { orgs: ['OpenAI', 'Reuters'], locations: ['San Francisco'] },
        keywords: ['test-time compute', 'reasoning', 'scaling laws', 'benchmarks']
      },
      {
        id: 'art-ai-2',
        title: 'Silicon Foundries Shift Fab Priorities as AI Inference Demands Explode',
        description: 'With reasoning loops consuming 10x more inference tokens per user prompt, hardware architects are rethinking memory bandwidth and on-chip SRAM capacity.',
        source: 'Bloomberg Technology',
        publishedAt: '5 hours ago',
        url: 'https://www.bloomberg.com/tech/silicon-inference-fab-shift',
        category: 'Technology & AI',
        readingTimeMinutes: 6,
        sentiment: 'neutral',
        sentimentScore: 0.15,
        entities: { orgs: ['NVIDIA', 'TSMC', 'Bloomberg'], locations: ['Hsinchu', 'Santa Clara'] },
        keywords: ['semiconductors', 'inference tokens', 'SRAM', 'datacenter']
      },
      {
        id: 'art-ai-3',
        title: 'How Autonomous Verification Loops Are Eliminating Hallucinations in Legal Tech',
        description: 'Early corporate trials in contract verification show multi-step deliberation reduces factual citation errors to near zero.',
        source: 'TechCrunch',
        publishedAt: '8 hours ago',
        url: 'https://techcrunch.com/2026/legal-tech-reasoning-agents',
        category: 'Technology & AI',
        readingTimeMinutes: 4,
        sentiment: 'positive',
        sentimentScore: 0.72,
        entities: { orgs: ['TechCrunch', 'LexisNexis'] },
        keywords: ['legal tech', 'verification', 'hallucinations', 'enterprise']
      }
    ]
  },
  {
    id: 'topic-india-semiconductors',
    label: 'India Semiconductor Mission & Commercial Fab Groundbreakings',
    category: 'India & Regional',
    region: 'India / Asia-Pacific',
    tagline: 'Major assembly, testing, and 28nm wafer fabrication facilities enter equipment install phase.',
    summary: 'India’s national semiconductor ambition is crossing from policy announcement into active industrial commissioning. Commercial semiconductor packaging (OSAT) and 28-nanometer wafer fabrication units in Dholera (Gujarat), Sanand, and new microelectronics design clusters in Andhra Pradesh and Karnataka are entering advanced equipment procurement stages. Global chip design consortiums are setting up dedicated design centers in Bengaluru and Hyderabad, solidifying India’s position in the global electronics supply chain.',
    purposeConclusion: 'The establishment of domestic wafer fabrication and packaging capacity is aimed at reducing reliance on single-geography electronics supply chains and protecting critical national infrastructure. For domestic industries—from automotive ECUs to consumer IoT—local silicon production will insulate manufacturers against global geopolitical disruptions over the coming decade.',
    whyTrending: {
      growthPct: 184,
      comparisonPeriod: 'Last 7 Days vs Prior 7 Days',
      articleCount: 980,
      sourceCount: 31,
      drivers: [
        'Government approves supplementary incentive tranche under the India Semiconductor Mission (ISM).',
        'Global equipment supplier delivers first cleanroom lithography modules to Gujarat fab site.',
        'State governments of Gujarat and Andhra Pradesh ink skill development pacts with tech institutes.'
      ],
      evidenceSummary: 'Article coverage surged 184% with intensive reporting across national dailies (The Hindu, Economic Times) and international supply chain publications.'
    },
    trendScore: 89,
    velocityStatus: 'rising',
    currentArticleCount: 980,
    previousArticleCount: 345,
    growthRate: 184,
    sourceDiversityScore: 88,
    independentSourcesCount: 31,
    topEntities: {
      people: ['Ashwini Vaishnaw', 'N. Chandrasekaran', 'Young Liu'],
      orgs: ['Tata Electronics', 'India Semiconductor Mission', 'Foxconn', 'Micron', 'The Hindu'],
      locations: ['Dholera', 'Sanand', 'Gujarat', 'Andhra Pradesh', 'Bengaluru', 'New Delhi']
    },
    subtopics: [
      'Cleanroom Commissioning & Tool Installation',
      'Domestic Talent Pipeline & University Curriculums',
      'Automotive Chip Supply Security',
      'State Infrastructure & Power Subsidies'
    ],
    sentimentBreakdown: {
      positive: 74,
      neutral: 20,
      negative: 6
    },
    timeline: [
      {
        time: 'Today, 06:15 IST',
        headline: 'First heavy lithography tools arrive at Dholera Special Investment Region',
        source: 'The Hindu Business Line',
        snippet: 'Logistics convoys complete specialized high-precision transport of wafer processing tools.'
      },
      {
        time: 'Yesterday, 14:00 IST',
        headline: 'Cabinet committee expands fiscal support envelope for advanced packaging',
        source: 'Economic Times',
        snippet: 'Policy boost aims to attract 3 additional compound semiconductor and silicon carbide projects.'
      },
      {
        time: '3 days ago',
        headline: 'Andhra Pradesh unveils dedicated electronic components manufacturing policy',
        source: 'Deccan Chronicle',
        snippet: 'Initiative allocates industrial land parcels and uninterrupted green energy corridors for chip units.'
      }
    ],
    perspectives: [
      {
        source: 'The Hindu',
        focusAngle: 'Employment Generation & Engineering Skill Architecture',
        stance: 'Optimistic & Analytical',
        keyObservation: 'Analyzes the requirement for 50,000 specialized cleanroom technicians and university diploma partnerships.'
      },
      {
        source: 'Nikkei Asia',
        focusAngle: 'Geopolitical Supply Chain Diversification',
        stance: 'Strategic & Global',
        keyObservation: 'Evaluates India as an essential pillar in the "China+1" electronics manufacturing strategy.'
      },
      {
        source: 'Economic Times',
        focusAngle: 'Fiscal Subsidies & Return on Public Investment',
        stance: 'Fiscal & Commercial',
        keyObservation: 'Monitors milestone disbursement benchmarks linked directly to commercial wafer yields.'
      }
    ],
    historicalVolume: [
      { timeLabel: 'Day 1', volume: 345, growthPct: 0, sentimentAverage: 0.48 },
      { timeLabel: 'Day 2', volume: 410, growthPct: 18, sentimentAverage: 0.52 },
      { timeLabel: 'Day 3', volume: 550, growthPct: 34, sentimentAverage: 0.58 },
      { timeLabel: 'Day 4', volume: 720, growthPct: 31, sentimentAverage: 0.62 },
      { timeLabel: 'Day 5', volume: 830, growthPct: 15, sentimentAverage: 0.64 },
      { timeLabel: 'Day 6', volume: 920, growthPct: 11, sentimentAverage: 0.66 },
      { timeLabel: 'Day 7 (Today)', volume: 980, growthPct: 7, sentimentAverage: 0.68 }
    ],
    articles: [
      {
        id: 'art-in-1',
        title: 'India Semiconductor Mission Crosses Pivotal Milestone as First Fab Hardware Lands',
        description: 'Cleanroom fabrication equipment installed at Dholera plant heralds domestic 28nm production readiness within 18 months.',
        source: 'The Hindu',
        publishedAt: '3 hours ago',
        url: 'https://thehindu.com/business/india-semiconductor-milestone-dholera',
        category: 'India & Regional',
        readingTimeMinutes: 5,
        sentiment: 'positive',
        sentimentScore: 0.78,
        entities: { orgs: ['Tata Electronics', 'The Hindu'], locations: ['Dholera', 'Gujarat'] },
        keywords: ['semiconductor', 'Dholera', 'fab', 'electronics']
      },
      {
        id: 'art-in-2',
        title: 'Global Chip Design Firms Expand Engineering Campuses in Bengaluru and Hyderabad',
        description: 'Over 30% of global semiconductor designers now operate from Indian engineering centers as design complexity accelerates.',
        source: 'Economic Times',
        publishedAt: '7 hours ago',
        url: 'https://economictimes.indiatimes.com/tech/chip-design-india-boom',
        category: 'India & Regional',
        readingTimeMinutes: 4,
        sentiment: 'positive',
        sentimentScore: 0.70,
        entities: { locations: ['Bengaluru', 'Hyderabad'] },
        keywords: ['VLSI', 'chip design', 'engineering talent']
      }
    ]
  },
  {
    id: 'topic-central-banks',
    label: 'Global Central Bank Divergence & Liquidity Rebalancing',
    category: 'Business & Economy',
    region: 'Global / Multi-National',
    tagline: 'Federal Reserve, ECB, and Bank of Japan chart asynchronous interest rate trajectories.',
    summary: 'Global financial markets are reacting to a rare regime of monetary policy divergence. While Western central banks including the US Federal Reserve and European Central Bank fine-tune quantitative easing transitions to support industrial labor resilience, the Bank of Japan maintains gradual policy normalization, and developing market central banks like India’s RBI balance currency volatility against domestic growth momentum. The asynchronous environment has sparked significant reallocation of cross-border liquidity across sovereign bonds, gold, and tech equities.',
    purposeConclusion: 'The end of uniform global monetary policy means corporate treasuries and institutional investors must navigate heightened foreign-exchange volatility and regional yield differentials. Countries with strong domestic consumption and low external debt will maintain monetary sovereignty, while import-dependent emerging markets face tighter financing terms.',
    whyTrending: {
      growthPct: 142,
      comparisonPeriod: 'Last 7 Days vs Prior 7 Days',
      articleCount: 1150,
      sourceCount: 35,
      drivers: [
        'Federal Reserve signals patience on terminal benchmark rates amid sticky services inflation.',
        'RBI Monetary Policy Committee minutes highlight domestic capital investment strength.',
        'Global carry trades unwind as the Yen gains steady momentum against G7 currencies.'
      ],
      evidenceSummary: 'Over 1,150 articles recorded across Bloomberg, Financial Times, Wall Street Journal, and Mint, reflecting heightened macro sensitivity.'
    },
    trendScore: 84,
    velocityStatus: 'rising',
    currentArticleCount: 1150,
    previousArticleCount: 475,
    growthRate: 142,
    sourceDiversityScore: 89,
    independentSourcesCount: 35,
    topEntities: {
      people: ['Jerome Powell', 'Christine Lagarde', 'Shaktikanta Das', 'Kazuo Ueda'],
      orgs: ['Federal Reserve', 'European Central Bank', 'Reserve Bank of India', 'IMF', 'World Bank'],
      locations: ['Washington DC', 'Frankfurt', 'Mumbai', 'Tokyo']
    },
    subtopics: [
      'Sovereign Bond Yield Curves',
      'Yen Carry Trade Repatriation',
      'Corporate Debt Refinancing Spreads',
      'Gold Reserves at Record Highs'
    ],
    sentimentBreakdown: {
      positive: 35,
      neutral: 45,
      negative: 20
    },
    timeline: [
      {
        time: 'Today, 11:00 GMT',
        headline: 'Bond yields compress as treasury auction sees record international bid-to-cover',
        source: 'Financial Times',
        snippet: 'Institutional buyers lock in longer-dated yields amid cooling headline price indices.'
      },
      {
        time: 'Yesterday, 18:30 GMT',
        headline: 'RBI Governor emphasizes domestic resilience and foreign exchange buffer adequacy',
        source: 'Mint',
        snippet: 'India’s foreign exchange reserves provide sufficient cushion against external currency turbulence.'
      }
    ],
    perspectives: [
      {
        source: 'Financial Times',
        focusAngle: 'Global Sovereign Bond & Debt Market Dynamics',
        stance: 'Cautious & Analytical',
        keyObservation: 'Points out the vulnerability of highly leveraged corporate debt portfolios facing sustained 4%+ rates.'
      },
      {
        source: 'Bloomberg',
        focusAngle: 'Currency Volatility & FX Hedging Strategies',
        stance: 'Market Driven',
        keyObservation: 'Tracks foreign institutional investor flows shifting back to emerging Asia equity markets.'
      }
    ],
    historicalVolume: [
      { timeLabel: 'Day 1', volume: 475, growthPct: 0, sentimentAverage: 0.12 },
      { timeLabel: 'Day 2', volume: 560, growthPct: 18, sentimentAverage: 0.14 },
      { timeLabel: 'Day 3', volume: 690, growthPct: 23, sentimentAverage: 0.16 },
      { timeLabel: 'Day 4', volume: 810, growthPct: 17, sentimentAverage: 0.18 },
      { timeLabel: 'Day 5', volume: 940, growthPct: 16, sentimentAverage: 0.20 },
      { timeLabel: 'Day 6', volume: 1060, growthPct: 13, sentimentAverage: 0.22 },
      { timeLabel: 'Day 7 (Today)', volume: 1150, growthPct: 8, sentimentAverage: 0.23 }
    ],
    articles: [
      {
        id: 'art-cb-1',
        title: 'Central Banks Walk Asymmetric Tightropes as Global Inflation Decouples',
        description: 'Policy decisions in Washington, Tokyo, and Mumbai demonstrate divergent macroeconomic realities in post-pandemic trade.',
        source: 'Financial Times',
        publishedAt: '4 hours ago',
        url: 'https://ft.com/central-banks-divergence-2026',
        category: 'Business & Economy',
        readingTimeMinutes: 6,
        sentiment: 'neutral',
        sentimentScore: 0.10,
        entities: { orgs: ['Federal Reserve', 'Financial Times'], locations: ['Washington'] },
        keywords: ['monetary policy', 'interest rates', 'inflation', 'treasuries']
      }
    ]
  },
  {
    id: 'topic-solid-state-batteries',
    label: 'Solid-State Battery Pilot Commercialization & Energy Density Breakthrough',
    category: 'Climate & Energy',
    region: 'East Asia / North America / Europe',
    tagline: 'Sulfide-based solid electrolytes achieve 480 Wh/kg with 12-minute ultra-fast charging.',
    summary: 'Automotive OEMs and energy storage developers are witnessing a commercial turning point in solid-state lithium battery chemistry. Pilot manufacturing lines in Japan, South Korea, and the US have achieved repeatable production of multi-layer cells exceeding 480 Watt-hours per kilogram, nearly doubling standard liquid lithium-ion density. By replacing flammable liquid electrolytes with solid ceramics and sulfides, the technology effectively eliminates thermal runaway risks while enabling 10-to-80% vehicle recharging in under 12 minutes.',
    purposeConclusion: 'Solid-state batteries are the long-awaited catalyst to eliminate EV range anxiety and unlock commercial electric aviation. Over the next 3 to 5 years, premium electric vehicles will debut these packs, driving subsequent cost-curve drops that will revolutionize grid-scale energy storage and decarbonize long-haul logistics.',
    whyTrending: {
      growthPct: 240,
      comparisonPeriod: 'Last 7 Days vs Prior 7 Days',
      articleCount: 790,
      sourceCount: 26,
      drivers: [
        'Automotive consortium confirms successful 1,000-cycle high-rate discharge testing in sub-zero climates.',
        'First commercial-scale gigafactory prototype delivers evaluation batches to tier-1 automakers.',
        'Patent filings in sulfide electrolyte stabilization increase by 140% year-over-year.'
      ],
      evidenceSummary: 'Observed article volume increased from 232 to 790 articles in 7 days, signaling an emerging industrial tipping point.'
    },
    trendScore: 91,
    velocityStatus: 'emerging',
    currentArticleCount: 790,
    previousArticleCount: 232,
    growthRate: 240,
    sourceDiversityScore: 86,
    independentSourcesCount: 26,
    topEntities: {
      people: ['Koji Sato', 'Elon Musk', 'Gretchen Whitmer'],
      orgs: ['Toyota', 'QuantumScape', 'CATL', 'Samsung SDI', 'US Dept of Energy'],
      locations: ['Nagoya', 'Seoul', 'San Jose', 'Munich']
    },
    subtopics: [
      'Electrolyte Interface Dendrite Prevention',
      'Solid-State Cell Manufacturing Equipment',
      'Commercial EV Target Rollouts (2027-2028)',
      'Aviation & Urban Air Mobility Applications'
    ],
    sentimentBreakdown: {
      positive: 78,
      neutral: 18,
      negative: 4
    },
    timeline: [
      {
        time: 'Today, 09:45 JST',
        headline: 'Automotive joint venture completes 100,000-kilometer road trial with solid-state pack',
        source: 'Nikkei Automotive',
        snippet: 'Zero degradation observed across varied thermal operating ranges from -25°C to 45°C.'
      },
      {
        time: '2 days ago',
        headline: 'Battery research institute announces breakthrough in roll-to-roll dry electrode coating',
        source: 'Energy Storage News',
        snippet: 'Dry coating process slashes manufacturing energy consumption by 40%.'
      }
    ],
    perspectives: [
      {
        source: 'Reuters Clean Energy',
        focusAngle: 'Supply Chain Mineral Requirements & Cobalt Elimination',
        stance: 'Optimistic & Industrial',
        keyObservation: 'Highlights reduction in rare minerals and simplified battery pack cooling architectures.'
      },
      {
        source: 'AutoWeek',
        focusAngle: 'Consumer Vehicle Affordability & Rollout Timelines',
        stance: 'Pragmatic',
        keyObservation: 'Notes that initial packs will carry a 30% price premium until gigascale manufacturing ramps up.'
      }
    ],
    historicalVolume: [
      { timeLabel: 'Day 1', volume: 232, growthPct: 0, sentimentAverage: 0.42 },
      { timeLabel: 'Day 2', volume: 290, growthPct: 25, sentimentAverage: 0.46 },
      { timeLabel: 'Day 3', volume: 380, growthPct: 31, sentimentAverage: 0.52 },
      { timeLabel: 'Day 4', volume: 490, growthPct: 29, sentimentAverage: 0.58 },
      { timeLabel: 'Day 5', volume: 610, growthPct: 24, sentimentAverage: 0.63 },
      { timeLabel: 'Day 6', volume: 710, growthPct: 16, sentimentAverage: 0.67 },
      { timeLabel: 'Day 7 (Today)', volume: 790, growthPct: 11, sentimentAverage: 0.70 }
    ],
    articles: [
      {
        id: 'art-bat-1',
        title: 'Solid-State Batteries Hit Pilot Lines: 12-Minute Charges Enter Real Testing',
        description: 'Independent validation confirms 480 Wh/kg density without liquid electrolyte combustion hazard.',
        source: 'Nikkei Asia',
        publishedAt: '5 hours ago',
        url: 'https://asia.nikkei.com/technology/solid-state-battery-commercial-pilot',
        category: 'Climate & Energy',
        readingTimeMinutes: 5,
        sentiment: 'positive',
        sentimentScore: 0.82,
        entities: { orgs: ['Toyota', 'CATL'], locations: ['Nagoya'] },
        keywords: ['solid-state', 'EV batteries', 'energy density', 'clean energy']
      }
    ]
  },
  {
    id: 'topic-cancer-mrna',
    label: 'mRNA Multi-Target Oncology & Personalized Cancer Vaccine Trials',
    category: 'Health & Medicine',
    region: 'North America / Europe',
    tagline: 'Phase-3 trials demonstrate 44% reduction in melanoma and lung carcinoma recurrence.',
    summary: 'Biotechnology researchers are celebrating clinical validation as customized neoantigen mRNA vaccines combined with checkpoint immunotherapy complete multi-center phase-3 trials. By sequencing a patient’s specific tumor biopsy and computationally synthesizing a bespoke mRNA sequence that primes the patient’s immune system to attack unique mutations, clinicians achieved a 44% drop in recurrence risk. Major national health bodies are fast-tracking regulatory review for adjuvant oncology regimens.',
    purposeConclusion: 'Personalized mRNA oncology transforms cancer care from broad-spectrum systemic chemotherapy to precision immunological destruction of microscopic cancer cells. This marks the beginning of curative adjuvant vaccines that prevent cancer recurrence before tumors can metastasize.',
    whyTrending: {
      growthPct: 195,
      comparisonPeriod: 'Last 7 Days vs Prior 7 Days',
      articleCount: 840,
      sourceCount: 29,
      drivers: [
        'New England Journal of Medicine publishes peer-reviewed 3-year recurrence-free survival data.',
        'FDA awards Breakthrough Therapy Designation to individualized melanoma and non-small cell lung cancer regimens.',
        'National health systems in UK and Germany launch public clinical pipeline partnerships.'
      ],
      evidenceSummary: '840 articles tracked across medical journals, mainstream news (BBC, NYT, Guardian), and health biotech outlets.'
    },
    trendScore: 93,
    velocityStatus: 'surging',
    currentArticleCount: 840,
    previousArticleCount: 285,
    growthRate: 195,
    sourceDiversityScore: 90,
    independentSourcesCount: 29,
    topEntities: {
      people: ['Ugur Sahin', 'Ozlem Tureci', 'Stéphane Bancel'],
      orgs: ['BioNTech', 'Moderna', 'Merck', 'NEJM', 'FDA', 'NHS'],
      locations: ['Cambridge MA', 'Mainz', 'London', 'Boston']
    },
    subtopics: [
      'Neoantigen Computational Mapping Algorithms',
      'Manufacturing Turnaround Times (Biopsy to Injection)',
      'Combination Immunotherapy Synergies',
      'Public Healthcare System Pricing Models'
    ],
    sentimentBreakdown: {
      positive: 88,
      neutral: 10,
      negative: 2
    },
    timeline: [
      {
        time: 'Today, 10:15 GMT',
        headline: 'Global clinical oncology symposium convenes to review 3-year mRNA vaccine data',
        source: 'The Guardian Health',
        snippet: 'Leading oncologists describe the recurrence prevention efficacy as a historic milestone.'
      },
      {
        time: 'Yesterday, 16:45 GMT',
        headline: 'UK National Health Service initiates patient enrollment for expanded personalized trials',
        source: 'BBC News',
        snippet: 'Thousands of cancer patients to gain access to tailored cancer therapies over the coming year.'
      }
    ],
    perspectives: [
      {
        source: 'BBC News',
        focusAngle: 'Patient Stories & Quality of Life After Treatment',
        stance: 'Human Centered & Hopeful',
        keyObservation: 'Highlights minimal side effects compared to traditional cytotoxic chemotherapy.'
      },
      {
        source: 'Stat News',
        focusAngle: 'Regulatory Approval Pathways & Manufacturing Bottlenecks',
        stance: 'Scientific & Objective',
        keyObservation: 'Addresses the challenge of shrinking the 6-week personalized mRNA synthesis window down to 3 weeks.'
      }
    ],
    historicalVolume: [
      { timeLabel: 'Day 1', volume: 285, growthPct: 0, sentimentAverage: 0.65 },
      { timeLabel: 'Day 2', volume: 350, growthPct: 22, sentimentAverage: 0.68 },
      { timeLabel: 'Day 3', volume: 460, growthPct: 31, sentimentAverage: 0.72 },
      { timeLabel: 'Day 4', volume: 580, growthPct: 26, sentimentAverage: 0.75 },
      { timeLabel: 'Day 5', volume: 690, growthPct: 19, sentimentAverage: 0.79 },
      { timeLabel: 'Day 6', volume: 770, growthPct: 12, sentimentAverage: 0.81 },
      { timeLabel: 'Day 7 (Today)', volume: 840, growthPct: 9, sentimentAverage: 0.84 }
    ],
    articles: [
      {
        id: 'art-med-1',
        title: 'Phase-3 Data Confirms mRNA Personalized Vaccines Slash Cancer Recurrence by 44%',
        description: 'New clinical trials mark a watershed moment in immunotherapy as patient-tailored vaccines teach T-cells to identify microscopic tumor fragments.',
        source: 'The Guardian',
        publishedAt: '4 hours ago',
        url: 'https://theguardian.com/science/mrna-cancer-vaccine-breakthrough-2026',
        category: 'Health & Medicine',
        readingTimeMinutes: 5,
        sentiment: 'positive',
        sentimentScore: 0.89,
        entities: { orgs: ['BioNTech', 'Moderna', 'The Guardian'], locations: ['London'] },
        keywords: ['mRNA', 'oncology', 'cancer vaccine', 'immunotherapy']
      }
    ]
  },
  {
    id: 'topic-space-logistics',
    label: 'Orbital Fuel Transfer & Deep Space Heavy Cargo Logistics',
    category: 'Science & Space',
    region: 'Global / Space',
    tagline: 'Cryogenic orbital propellant depot demonstrations pave path for lunar logistics infrastructure.',
    summary: 'Commercial aerospace has completed a pivotal operational demonstration with the successful transfer of sub-cooled cryogenic liquid methane and oxygen between orbiting spacecraft. The ability to refuel heavy-lift launch vehicles in Low Earth Orbit (LEO) is the foundational requirement for continuous lunar surface operations, Mars transit payloads, and orbital space manufacturing. International space agencies and commercial space station developers are rapidly adapting mission architectures to leverage the dramatically lowered cost per kilogram to deep space.',
    purposeConclusion: 'Solving in-space cryogenic propellant transfer unlocks the economic viability of off-planet infrastructure. It converts orbital space from an expensive one-way transport destination into an accessible commercial logistics hub for scientific, industrial, and telecommunications satellites.',
    whyTrending: {
      growthPct: 172,
      comparisonPeriod: 'Last 7 Days vs Prior 7 Days',
      articleCount: 650,
      sourceCount: 22,
      drivers: [
        'Flight telemetry confirms zero-boiloff cryogenic fluid transfer in microgravity.',
        'NASA Artemis program updates mission schedule following successful propellant transfer verification.',
        'Commercial space station developers sign orbital servicing logistics contracts.'
      ],
      evidenceSummary: '650 articles recorded across space industry publications (SpaceNews, Ars Technica) and global media.'
    },
    trendScore: 88,
    velocityStatus: 'rising',
    currentArticleCount: 650,
    previousArticleCount: 239,
    growthRate: 172,
    sourceDiversityScore: 84,
    independentSourcesCount: 22,
    topEntities: {
      people: ['Bill Nelson', 'Elon Musk', 'Gwynne Shotwell', 'Jim Free'],
      orgs: ['NASA', 'SpaceX', 'ESA', 'Ars Technica', 'Blue Origin'],
      locations: ['Starbase TX', 'Cape Canaveral', 'Houston', 'Bremen']
    },
    subtopics: [
      'Cryogenic Boil-Off Mitigation in Orbit',
      'Autonomous Rendezvous and Docking Systems',
      'Lunar Surface Lander Payload Margins',
      'Commercial Space Station Resupply'
    ],
    sentimentBreakdown: {
      positive: 72,
      neutral: 24,
      negative: 4
    },
    timeline: [
      {
        time: 'Today, 04:30 GMT',
        headline: 'Space agency confirms flawless orbital fluid coupling telemetry',
        source: 'SpaceNews',
        snippet: 'Pumps transferred metric tons of cryogenic propellant between tandem vehicles.'
      },
      {
        time: 'Yesterday, 21:00 GMT',
        headline: 'Artemis lunar mission teams advance flight readiness reviews',
        source: 'Ars Technica',
        snippet: 'Fuel transfer removes highest risk technical hurdle for next-generation lunar exploration.'
      }
    ],
    perspectives: [
      {
        source: 'SpaceNews',
        focusAngle: 'Government Space Policy & Artemis Program Timelines',
        stance: 'Authoritative & Strategic',
        keyObservation: 'Assesses NASA timeline credibility and budget allocations for commercial cargo landers.'
      },
      {
        source: 'Ars Technica',
        focusAngle: 'Thermodynamics & Engineering Architecture',
        stance: 'Technical & Deep',
        keyObservation: 'Explains the physics of maintaining liquid methane pressure under microgravity solar radiation.'
      }
    ],
    historicalVolume: [
      { timeLabel: 'Day 1', volume: 239, growthPct: 0, sentimentAverage: 0.50 },
      { timeLabel: 'Day 2', volume: 290, growthPct: 21, sentimentAverage: 0.54 },
      { timeLabel: 'Day 3', volume: 380, growthPct: 31, sentimentAverage: 0.58 },
      { timeLabel: 'Day 4', volume: 460, growthPct: 21, sentimentAverage: 0.61 },
      { timeLabel: 'Day 5', volume: 540, growthPct: 17, sentimentAverage: 0.63 },
      { timeLabel: 'Day 6', volume: 605, growthPct: 12, sentimentAverage: 0.65 },
      { timeLabel: 'Day 7 (Today)', volume: 650, growthPct: 7, sentimentAverage: 0.66 }
    ],
    articles: [
      {
        id: 'art-sp-1',
        title: 'Historic In-Space Cryogenic Propellant Transfer Validates Next-Gen Deep Space Architecture',
        description: 'Orbital refueling test in low Earth orbit proves massive spacecraft can replenish tanks for interplanetary voyages.',
        source: 'SpaceNews',
        publishedAt: '6 hours ago',
        url: 'https://spacenews.com/orbital-refueling-milestone-2026',
        category: 'Science & Space',
        readingTimeMinutes: 5,
        sentiment: 'positive',
        sentimentScore: 0.77,
        entities: { orgs: ['NASA', 'SpaceX'], locations: ['Cape Canaveral'] },
        keywords: ['space logistics', 'orbital refueling', 'Artemis', 'spacecraft']
      }
    ]
  },
  {
    id: 'topic-cricket-champions',
    label: 'ICC Tournament Tactics & High-Stakes Continental Cricket Rivalry',
    category: 'Sports',
    region: 'South Asia / Global',
    tagline: 'Record viewership and tactical innovation grip fans ahead of high-intensity tournament fixtures.',
    summary: 'Cricket analytics and fan fervor have reached fever pitch across South Asia and the diaspora as the ICC Champions Trophy moves into decisive knockout stages. Team management approaches have shifted aggressively toward high-strike-rate batting depth, mystery spin variations in the middle overs, and data-driven field placements calculated using pitch-tracking telemetry. Broadcasters report all-time digital streaming concurrency records across India, Pakistan, Australia, and the UK.',
    purposeConclusion: 'The modern international cricket ecosystem is illustrating how data analytics and biometric telemetry have transformed athletic preparation and in-match strategy. Beyond entertainment, the tournament highlights the immense economic engine of digital sports streaming in emerging economies.',
    whyTrending: {
      growthPct: 165,
      comparisonPeriod: 'Last 7 Days vs Prior 7 Days',
      articleCount: 1280,
      sourceCount: 34,
      drivers: [
        'Decisive group stage fixtures generate record digital concurrent viewership over 50 million.',
        'Controversies around pitch preparation and dew factors spark fiery post-match debates.',
        'Emerging young all-rounder breaks tournament boundary hitting record.'
      ],
      evidenceSummary: '1,280 articles published across sports desks, including Cricinfo, BBC Sport, The Hindu Sport, and Dawn.'
    },
    trendScore: 90,
    velocityStatus: 'rising',
    currentArticleCount: 1280,
    previousArticleCount: 483,
    growthRate: 165,
    sourceDiversityScore: 87,
    independentSourcesCount: 34,
    topEntities: {
      people: ['Rohit Sharma', 'Virat Kohli', 'Babar Azam', 'Pat Cummins', 'Jasprit Bumrah'],
      orgs: ['ICC', 'BCCI', 'PCB', 'ESPNcricinfo', 'BBC Sport'],
      locations: ['Dubai', 'Lahore', 'Mumbai', 'Melbourne', 'London']
    },
    subtopics: [
      'Middle-Overs Spin Economy Rates',
      'Digital Streaming Concurrency Records',
      'Tactical Batting Order Floating Strategies',
      'Player Workload Management & Fast-Bowling Rotations'
    ],
    sentimentBreakdown: {
      positive: 65,
      neutral: 25,
      negative: 10
    },
    timeline: [
      {
        time: 'Today, 14:30 IST',
        headline: 'Captains address press conference ahead of high-octane semi-final clash',
        source: 'ESPNcricinfo',
        snippet: 'Teams highlight tactical preparation against express reverse swing and mystery spin.'
      },
      {
        time: 'Yesterday, 22:15 IST',
        headline: 'Thrilling last-over finish sends tournament into frenzy as qualification scenarios unfold',
        source: 'BBC Sport',
        snippet: 'Stunning counter-attacking partnership seals victory with two balls remaining.'
      }
    ],
    perspectives: [
      {
        source: 'ESPNcricinfo',
        focusAngle: 'Statistical Analytics & Matchup Match Metrics',
        stance: 'Analytical & Tactical',
        keyObservation: 'Breaks down bowling match-ups and historical pitch behavior under evening dew conditions.'
      },
      {
        source: 'BBC Sport',
        focusAngle: 'Atmosphere, Global Broadcast Economics & Audience Passion',
        stance: 'Engaging & Broad',
        keyObservation: 'Focuses on the cultural and economic resonance of the tournament across millions of households.'
      }
    ],
    historicalVolume: [
      { timeLabel: 'Day 1', volume: 483, growthPct: 0, sentimentAverage: 0.40 },
      { timeLabel: 'Day 2', volume: 590, growthPct: 22, sentimentAverage: 0.45 },
      { timeLabel: 'Day 3', volume: 730, growthPct: 24, sentimentAverage: 0.48 },
      { timeLabel: 'Day 4', volume: 880, growthPct: 21, sentimentAverage: 0.52 },
      { timeLabel: 'Day 5', volume: 1030, growthPct: 17, sentimentAverage: 0.55 },
      { timeLabel: 'Day 6', volume: 1180, growthPct: 15, sentimentAverage: 0.58 },
      { timeLabel: 'Day 7 (Today)', volume: 1280, growthPct: 8, sentimentAverage: 0.60 }
    ],
    articles: [
      {
        id: 'art-cr-1',
        title: 'Tactical Revolution in One-Day Cricket: Data-Driven Middle Overs Take Center Stage',
        description: 'How real-time ball telemetry and aggressive boundary fielding algorithms have reshaped tournament scorecards.',
        source: 'ESPNcricinfo',
        publishedAt: '3 hours ago',
        url: 'https://espncricinfo.com/story/cricket-tournament-tactics-2026',
        category: 'Sports',
        readingTimeMinutes: 5,
        sentiment: 'positive',
        sentimentScore: 0.70,
        entities: { orgs: ['ICC', 'ESPNcricinfo'], locations: ['Dubai', 'Mumbai'] },
        keywords: ['cricket', 'Champions Trophy', 'viewership', 'analytics']
      }
    ]
  },
  {
    id: 'topic-un-climate-pact',
    label: 'UN Global Climate Resilience & Transboundary Water Framework',
    category: 'World & Politics',
    region: 'International',
    tagline: '140 nations sign multilateral pact regulating international river basins and loss-and-damage funds.',
    summary: 'Diplomats at an extraordinary United Nations climate resilience assembly in Geneva have concluded landmark negotiations establishing binding legal protocols for transboundary watershed management, drought early-warning data sharing, and immediate disbursement rules for the Loss and Damage fund. The agreement addresses escalating geopolitical friction around shared river basins in Africa, South Asia, and South America, while unlocking $45 billion in concessional resilience funding for vulnerable island nations and developing agrarian economies.',
    purposeConclusion: 'The treaty establishes an enforceable multilateral mechanism for water diplomacy, mitigating resource conflict risks in vulnerable border regions. By connecting climate adaptation metrics to international development financing, it creates accountability for donor nations and recipient states alike.',
    whyTrending: {
      growthPct: 135,
      comparisonPeriod: 'Last 7 Days vs Prior 7 Days',
      articleCount: 710,
      sourceCount: 28,
      drivers: [
        'Consensus reached at 3 AM closing plenary after 14 days of deadlock over fund governance.',
        'Major emerging economies secure sovereign discretion on regional infrastructure adaptation.',
        'Global meteorological agencies launch open-access real-time flood forecasting platform.'
      ],
      evidenceSummary: '710 articles recorded across diplomacy beats (AP, Reuters, Al Jazeera, Le Monde).'
    },
    trendScore: 82,
    velocityStatus: 'rising',
    currentArticleCount: 710,
    previousArticleCount: 302,
    growthRate: 135,
    sourceDiversityScore: 91,
    independentSourcesCount: 28,
    topEntities: {
      people: ['António Guterres', 'Mia Mottley', 'Ursula von der Leyen'],
      orgs: ['United Nations', 'IPCC', 'World Bank', 'AP News'],
      locations: ['Geneva', 'Nairobi', 'Barbados', 'Dhaka']
    },
    subtopics: [
      'Transboundary Hydrological Data Sharing',
      'Loss and Damage Capital Deployment',
      'Small Island Developing States (SIDS) Safeguards',
      'Agricultural Drought Insurance Guarantees'
    ],
    sentimentBreakdown: {
      positive: 48,
      neutral: 40,
      negative: 12
    },
    timeline: [
      {
        time: 'Today, 07:15 CET',
        headline: 'UN Secretary-General hails water diplomacy accord as victory for multilateralism',
        source: 'AP News',
        snippet: 'Pact creates standardized arbitration protocols for shared river infrastructure projects.'
      },
      {
        time: 'Yesterday, 19:30 CET',
        headline: 'Developing nations secure direct access window for emergency disaster relief',
        source: 'Al Jazeera',
        snippet: 'Funding architecture cuts bureaucratic approval times from 18 months to 14 days.'
      }
    ],
    perspectives: [
      {
        source: 'AP News',
        focusAngle: 'Diplomatic Compromises & International Legal Enforceability',
        stance: 'Objective & Measured',
        keyObservation: 'Assesses whether signatory nations possess sufficient domestic legislative power to enforce quotas.'
      },
      {
        source: 'The Guardian',
        focusAngle: 'Climate Justice & Grassroots Farmer Protection',
        stance: 'Advocacy & Human Rights',
        keyObservation: 'Emphasizes that actual funding disbursement speed will determine the treaty’s real-world survival.'
      }
    ],
    historicalVolume: [
      { timeLabel: 'Day 1', volume: 302, growthPct: 0, sentimentAverage: 0.20 },
      { timeLabel: 'Day 2', volume: 360, growthPct: 19, sentimentAverage: 0.22 },
      { timeLabel: 'Day 3', volume: 440, growthPct: 22, sentimentAverage: 0.25 },
      { timeLabel: 'Day 4', volume: 520, growthPct: 18, sentimentAverage: 0.29 },
      { timeLabel: 'Day 5', volume: 600, growthPct: 15, sentimentAverage: 0.32 },
      { timeLabel: 'Day 6', volume: 665, growthPct: 11, sentimentAverage: 0.34 },
      { timeLabel: 'Day 7 (Today)', volume: 710, growthPct: 7, sentimentAverage: 0.35 }
    ],
    articles: [
      {
        id: 'art-un-1',
        title: 'Historic Multilateral Water Treaty Signed at Geneva Following Marathon Plenary',
        description: 'Global pact obligates nations to share real-time hydrological data and establishes $45B disaster fund.',
        source: 'AP News',
        publishedAt: '5 hours ago',
        url: 'https://apnews.com/article/un-climate-water-treaty-geneva-2026',
        category: 'World & Politics',
        readingTimeMinutes: 5,
        sentiment: 'positive',
        sentimentScore: 0.62,
        entities: { orgs: ['United Nations', 'AP News'], locations: ['Geneva'] },
        keywords: ['UN', 'climate treaty', 'water diplomacy', 'resilience']
      }
    ]
  },
  {
    id: 'topic-quantum-breakthrough',
    label: 'Quantum Topological Qubit Error Suppression & Fault-Tolerance',
    category: 'Science & Space',
    region: 'North America / Europe',
    tagline: 'Major research consortium demonstrates 99.98% two-qubit gate fidelity with braiding modes.',
    summary: 'A long-sought physics milestone has been experimentally verified in peer-reviewed reports: the physical synthesis of non-Abelian anyon Majorana zero modes to create self-protecting topological qubits. Unlike noise-sensitive superconducting transmon qubits, topological qubits encode quantum information non-locally, mathematically immunizing quantum processors against ambient thermal noise and electromagnetic interference. The demonstration showed two-qubit gate fidelities surpassing 99.98%, bringing the threshold for commercial fault-tolerant quantum computing years closer.',
    purposeConclusion: 'Topological error suppression solves the fundamental hardware barrier preventing quantum computing from tackling real-world chemistry, room-temperature superconductor simulation, and molecular drug synthesis. It marks the transition of quantum technology from academic physics toys to practical industrial computation.',
    whyTrending: {
      growthPct: 275,
      comparisonPeriod: 'Last 7 Days vs Prior 7 Days',
      articleCount: 520,
      sourceCount: 21,
      drivers: [
        'Nature Physics cover paper confirms topological braiding in semiconductor-superconductor nanowires.',
        'Independent team at national lab replicates Majorana zero mode signatures.',
        'Quantum hardware enterprise announces roadmap for 1,000 logical error-corrected qubits by 2028.'
      ],
      evidenceSummary: 'Surged from 138 to 520 articles, earning highest relative growth score (+275%) of the week.'
    },
    trendScore: 87,
    velocityStatus: 'emerging',
    currentArticleCount: 520,
    previousArticleCount: 138,
    growthRate: 275,
    sourceDiversityScore: 82,
    independentSourcesCount: 21,
    topEntities: {
      people: ['Satya Nadella', 'Krysta Svore', 'David Deutsch'],
      orgs: ['Microsoft Quantum', 'Delft University', 'Nature Physics', 'MIT Technology Review'],
      locations: ['Redmond WA', 'Delft', 'Cambridge MA', 'Copenhagen']
    },
    subtopics: [
      'Majorana Zero Modes & Non-Abelian Anyons',
      'Cryogenic Nanowire Material Science',
      'Logical Qubit Overhead Reductions',
      'Quantum Chemistry & Material Discovery Benchmarks'
    ],
    sentimentBreakdown: {
      positive: 70,
      neutral: 26,
      negative: 4
    },
    timeline: [
      {
        time: 'Today, 12:00 GMT',
        headline: 'Leading physicists publish independent validation of topological protection',
        source: 'Nature Physics',
        snippet: 'Experimental measurements prove non-local phase encoding eliminates environmental phase noise.'
      },
      {
        time: '2 days ago',
        headline: 'Tech titan outlines 100-logical-qubit commercial demonstrator for material discovery',
        source: 'MIT Technology Review',
        snippet: 'System is slated to target battery chemical simulations and nitrogen fixation enzymes.'
      }
    ],
    perspectives: [
      {
        source: 'MIT Technology Review',
        focusAngle: 'Physics Rigor & Comparison With Superconducting Transmons',
        stance: 'Analytical & Objective',
        keyObservation: 'Evaluates whether braiding gates can be scaled cleanly into millions of operational physical junctions.'
      },
      {
        source: 'Ars Technica',
        focusAngle: 'Cryptography & Post-Quantum Security Timeline',
        stance: 'Inquisitive & Cautionary',
        keyObservation: 'Reminds cybersecurity architects that migration to post-quantum encryption standards is now urgent.'
      }
    ],
    historicalVolume: [
      { timeLabel: 'Day 1', volume: 138, growthPct: 0, sentimentAverage: 0.40 },
      { timeLabel: 'Day 2', volume: 180, growthPct: 30, sentimentAverage: 0.45 },
      { timeLabel: 'Day 3', volume: 250, growthPct: 39, sentimentAverage: 0.52 },
      { timeLabel: 'Day 4', volume: 330, growthPct: 32, sentimentAverage: 0.57 },
      { timeLabel: 'Day 5', volume: 410, growthPct: 24, sentimentAverage: 0.62 },
      { timeLabel: 'Day 6', volume: 475, growthPct: 16, sentimentAverage: 0.65 },
      { timeLabel: 'Day 7 (Today)', volume: 520, growthPct: 9, sentimentAverage: 0.68 }
    ],
    articles: [
      {
        id: 'art-qu-1',
        title: 'Topological Qubit Milestone Achieved: Majorana Modes Deliver 99.98% Fidelity',
        description: 'Breakthrough physics experiment demonstrates non-local error immunity, cutting logical qubit overhead by 90%.',
        source: 'Nature Physics',
        publishedAt: '7 hours ago',
        url: 'https://nature.com/articles/topological-quantum-breakthrough-2026',
        category: 'Science & Space',
        readingTimeMinutes: 6,
        sentiment: 'positive',
        sentimentScore: 0.85,
        entities: { orgs: ['Nature Physics', 'Microsoft Quantum'], locations: ['Delft'] },
        keywords: ['quantum computing', 'topological qubit', 'Majorana', 'physics']
      }
    ]
  }
];

export const CONNECTED_SOURCES = [
  {
    name: 'Reuters',
    category: 'Global Wire',
    articlesCollected: 1420,
    freshnessMinutes: 3,
    status: 'active',
    reliabilityScore: 98,
    coverageSharePct: 18.2
  },
  {
    name: 'Bloomberg Technology',
    category: 'Finance & Tech',
    articlesCollected: 980,
    freshnessMinutes: 5,
    status: 'active',
    reliabilityScore: 97,
    coverageSharePct: 14.5
  },
  {
    name: 'The Hindu',
    category: 'India & Regional',
    articlesCollected: 840,
    freshnessMinutes: 7,
    status: 'active',
    reliabilityScore: 96,
    coverageSharePct: 12.8
  },
  {
    name: 'Financial Times',
    category: 'Global Economics',
    articlesCollected: 760,
    freshnessMinutes: 4,
    status: 'active',
    reliabilityScore: 97,
    coverageSharePct: 11.4
  },
  {
    name: 'BBC News',
    category: 'World & Culture',
    articlesCollected: 890,
    freshnessMinutes: 6,
    status: 'active',
    reliabilityScore: 96,
    coverageSharePct: 13.6
  },
  {
    name: 'Nature & Scientific Preprints',
    category: 'Science & Medicine',
    articlesCollected: 610,
    freshnessMinutes: 12,
    status: 'active',
    reliabilityScore: 99,
    coverageSharePct: 9.3
  },
  {
    name: 'TechCrunch & Venture Wire',
    category: 'Startups & Silicon',
    articlesCollected: 730,
    freshnessMinutes: 8,
    status: 'active',
    reliabilityScore: 93,
    coverageSharePct: 11.2
  },
  {
    name: 'GDELT Global Event Feed',
    category: 'Open Event Data',
    articlesCollected: 2150,
    freshnessMinutes: 2,
    status: 'active',
    reliabilityScore: 92,
    coverageSharePct: 22.0
  }
];
