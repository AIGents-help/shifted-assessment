
import { Question } from './types';

export const WORKER_QUESTIONS: Question[] = [
  {
    id: 1,
    category: "Sleep & Recovery",
    text: "On workdays, how long does it usually take you to fall asleep?",
    options: [
      { label: "<15 minutes", score: 0 },
      { label: "15–45 minutes", score: 1 },
      { label: "45–90 minutes", score: 2 },
      { label: ">90 minutes", score: 3 }
    ]
  },
  {
    id: 2,
    category: "Sleep & Recovery",
    text: "In the last 30 days, how often did you wake up feeling unrested?",
    options: [
      { label: "0–3 days", score: 0 },
      { label: "4–10 days", score: 1 },
      { label: "11–20 days", score: 2 },
      { label: "Almost daily", score: 3 }
    ]
  },
  {
    id: 3,
    category: "Focus & Alertness",
    text: "How often do you feel mentally foggy during work hours?",
    options: [
      { label: "Rarely", score: 0 },
      { label: "Occasionally", score: 1 },
      { label: "Frequently", score: 2 },
      { label: "Most days", score: 3 }
    ]
  },
  {
    id: 4,
    category: "Focus & Alertness",
    text: "How often do you rely on caffeine to feel functional?",
    options: [
      { label: "0–1 cup per day", score: 0 },
      { label: "2 cups per day", score: 1 },
      { label: "3–4 cups per day", score: 2 },
      { label: "Constantly throughout shift", score: 3 }
    ]
  },
  {
    id: 5,
    category: "Physical Signals",
    text: "How often do you experience headaches, body aches, or eye strain on workdays?",
    options: [
      { label: "Rarely", score: 0 },
      { label: "Weekly", score: 1 },
      { label: "Several times per week", score: 2 },
      { label: "Almost daily", score: 3 }
    ]
  },
  {
    id: 6,
    category: "Physical Signals",
    text: "How often does your appetite feel “off” or irregular?",
    options: [
      { label: "Rarely", score: 0 },
      { label: "Occasionally", score: 1 },
      { label: "Frequently", score: 2 },
      { label: "Most days", score: 3 }
    ]
  },
  {
    id: 7,
    category: "Schedule Volatility",
    text: "How many different start times do you work in a typical 14-day cycle?",
    options: [
      { label: "1", score: 0 },
      { label: "2", score: 1 },
      { label: "3", score: 2 },
      { label: "4 or more", score: 3 }
    ]
  },
  {
    id: 8,
    category: "Schedule Volatility",
    text: "How often does your schedule change with less than 48 hours notice?",
    options: [
      { label: "Never", score: 0 },
      { label: "1–2x per month", score: 1 },
      { label: "Weekly", score: 2 },
      { label: "Multiple times per week", score: 3 }
    ]
  },
  {
    id: 9,
    category: "Recovery Behaviors",
    text: "On days off, how often do you “crash sleep” to catch up?",
    options: [
      { label: "Never", score: 0 },
      { label: "Sometimes", score: 1 },
      { label: "Often", score: 2 },
      { label: "Almost always", score: 3 }
    ]
  },
  {
    id: 10,
    category: "Recovery Behaviors",
    text: "How often do you feel fully recovered before your next work stretch?",
    options: [
      { label: "Almost always", score: 0 },
      { label: "Sometimes", score: 1 },
      { label: "Rarely", score: 2 },
      { label: "Never", score: 3 }
    ]
  },
  {
    id: 11,
    category: "Awareness & Control",
    text: "Do you feel like you understand how your schedule affects your body?",
    options: [
      { label: "Yes", score: 0 },
      { label: "Somewhat", score: 1 },
      { label: "Not really", score: 2 },
      { label: "Not at all", score: 3 }
    ]
  },
  {
    id: 12,
    category: "Awareness & Control",
    text: "Do you feel you have tools to manage it effectively?",
    options: [
      { label: "Yes", score: 0 },
      { label: "A few", score: 1 },
      { label: "Very limited", score: 2 },
      { label: "None", score: 3 }
    ]
  }
];

export const CORPORATE_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Circadian Friction: What percentage of your workforce operates outside of 6am–6pm?",
    options: [
      { label: "<10% [LOW RISK]", score: 0 },
      { label: "10–30% [MODERATE RISK]", score: 1 },
      { label: "30–60% [HIGH RISK]", score: 2 },
      { label: ">60% [CRITICAL RISK]", score: 3 }
    ]
  },
  {
    id: 2,
    text: "Biological Consistency: How many distinct shift start times occur in a typical cycle?",
    options: [
      { label: "1 [LOW RISK]", score: 0 },
      { label: "2 [MODERATE RISK]", score: 1 },
      { label: "3 [HIGH RISK]", score: 2 },
      { label: "4+ [CRITICAL RISK]", score: 3 }
    ]
  },
  {
    id: 3,
    text: "Roster Predictability: How often are shift assignments adjusted with less than 48 hours notice?",
    options: [
      { label: "Rarely [LOW RISK]", score: 0 },
      { label: "Monthly [MODERATE RISK]", score: 1 },
      { label: "Weekly [HIGH RISK]", score: 2 },
      { label: "Multiple times per week [CRITICAL RISK]", score: 3 }
    ]
  },
  {
    id: 4,
    text: "Circadian Directionality: How frequently do team members rotate between day and night shifts?",
    options: [
      { label: "Never [LOW RISK]", score: 0 },
      { label: "Quarterly [MODERATE RISK]", score: 1 },
      { label: "Biweekly [HIGH RISK]", score: 2 },
      { label: "Weekly or more [CRITICAL RISK]", score: 3 }
    ]
  },
  {
    id: 5,
    text: "Visible Operational Friction: Which performance signal is most prevalent currently?",
    type: 'single',
    options: [
      { label: "No visible friction [LOW RISK]", score: 0 },
      { label: "Intermittent performance variance [MODERATE RISK]", score: 1 },
      { label: "Recurring safety or attrition signals [HIGH RISK]", score: 2 },
      { label: "Systemic operational volatility [CRITICAL RISK]", score: 3 }
    ]
  },
  {
    id: 6,
    text: "Post-Incident Analysis Focus: To what extent are biological factors considered during reviews?",
    options: [
      { label: "Primary context [LOW RISK]", score: 0 },
      { label: "Secondary consideration [MODERATE RISK]", score: 1 },
      { label: "Informal observation [HIGH RISK]", score: 2 },
      { label: "Not addressed [CRITICAL RISK]", score: 3 }
    ]
  },
  {
    id: 7,
    text: "Biological Trough Performance: Are complex or safety-critical tasks performed between 2am and 6am?",
    options: [
      { label: "No [LOW RISK]", score: 0 },
      { label: "Occasionally [MODERATE RISK]", score: 1 },
      { label: "Regularly [HIGH RISK]", score: 2 },
      { label: "Primarily [CRITICAL RISK]", score: 3 }
    ]
  },
  {
    id: 8,
    text: "Performance Visibility: Are variations in productivity or error rates correlated to time-of-day?",
    options: [
      { label: "Clearly correlated [LOW RISK]", score: 0 },
      { label: "Informally observed [MODERATE RISK]", score: 1 },
      { label: "Rarely assessed [HIGH RISK]", score: 2 },
      { label: "Unknown [CRITICAL RISK]", score: 3 }
    ]
  },
  {
    id: 9,
    text: "Resource Allocation: Is the cost of biological misalignment factored into operational planning?",
    options: [
      { label: "Factored clearly [LOW RISK]", score: 0 },
      { label: "Rough estimates only [MODERATE RISK]", score: 1 },
      { label: "Considered but unmeasured [HIGH RISK]", score: 2 },
      { label: "Unaccounted for [CRITICAL RISK]", score: 3 }
    ]
  },
  {
    id: 10,
    text: "Recovery Confidence: How well do existing rostering frameworks support human recovery?",
    options: [
      { label: "Supportive [LOW RISK]", score: 0 },
      { label: "Somewhat supportive [MODERATE RISK]", score: 1 },
      { label: "Low support [HIGH RISK]", score: 2 },
      { label: "Unsupported [CRITICAL RISK]", score: 3 }
    ]
  }
];

export const PURCHASE_URL = "https://shifted.com/purchase";
export const BOOK_CALL_URL = "https://shifted.com/book-call";
