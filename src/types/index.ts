export type Category =
  | 'All'
  | 'Technology & AI'
  | 'World & Politics'
  | 'Business & Economy'
  | 'Science & Space'
  | 'Health & Medicine'
  | 'Climate & Energy'
  | 'Sports'
  | 'Entertainment'
  | 'India & Regional';

export type TimeWindow = '1H' | '24H' | '7D' | '30D';

export type VelocityStatus = 'surging' | 'rising' | 'emerging' | 'stable' | 'cooling';

export interface Article {
  id: string;
  title: string;
  description: string;
  source: string;
  publishedAt: string;
  url: string;
  category: Category;
  author?: string;
  readingTimeMinutes?: number;
  sentiment: 'positive' | 'neutral' | 'negative';
  sentimentScore: number; // -1.0 to 1.0
  entities: {
    people?: string[];
    orgs?: string[];
    locations?: string[];
  };
  keywords: string[];
}

export interface TimelineEvent {
  time: string;
  headline: string;
  source: string;
  snippet: string;
}

export interface PerspectiveComparison {
  source: string;
  focusAngle: string;
  stance: string;
  keyObservation: string;
}

export interface HistoricalDataPoint {
  timeLabel: string;
  volume: number;
  growthPct: number;
  sentimentAverage: number;
}

export interface TopicCluster {
  id: string;
  label: string;
  category: Category;
  region: string;
  tagline: string;
  
  // Synthesized news summary & purpose (Addresses user request)
  summary: string;
  purposeConclusion: string; // The "bottom line / purpose / conclusion"
  whyTrending: {
    growthPct: number;
    comparisonPeriod: string;
    articleCount: number;
    sourceCount: number;
    drivers: string[];
    evidenceSummary: string;
  };
  
  // Metrics
  trendScore: number; // 0-100
  velocityStatus: VelocityStatus;
  currentArticleCount: number;
  previousArticleCount: number;
  growthRate: number; // percentage
  sourceDiversityScore: number; // 0-100
  independentSourcesCount: number;
  
  // NLP & ML extracted artifacts
  topEntities: {
    people: string[];
    orgs: string[];
    locations: string[];
  };
  subtopics: string[];
  sentimentBreakdown: {
    positive: number;
    neutral: number;
    negative: number;
  };
  
  // Storyline & timeline
  timeline: TimelineEvent[];
  perspectives: PerspectiveComparison[];
  historicalVolume: HistoricalDataPoint[];
  articles: Article[];
}

export interface PipelineLog {
  id: string;
  timestamp: string;
  stage: 'Ingestion' | 'Preprocessing' | 'NLP' | 'Embeddings' | 'Clustering' | 'Trend Analysis' | 'Synthesis';
  level: 'info' | 'success' | 'warning';
  message: string;
}

export interface PipelineState {
  status: 'idle' | 'running' | 'completed' | 'error';
  currentStage: string;
  progressPercent: number;
  lastRunTimestamp: string;
  totalArticlesIngested: number;
  clustersDiscovered: number;
  duplicatesPurged: number;
  logs: PipelineLog[];
}

export interface PipelineConfig {
  selectedTimeWindow: TimeWindow;
  minSourceDiversity: number;
  growthSensitivityThreshold: number;
  activeSources: string[];
  autoRefreshEnabled: boolean;
  refreshIntervalMinutes: number;
}
