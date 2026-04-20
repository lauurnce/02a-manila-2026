import eventData from './event-data.json';

export const EVENT_DATA = eventData;

// Type Aliases for clarity in components
export type EventData = typeof eventData;
export type Speaker = typeof eventData.eventDetails.speakers[number];
export type Highlight = typeof eventData.eventDetails.highlights[number];
export type InvolvedOption = typeof eventData.getInvolved.options[number];

// Convenient accessors
export const LOGISTICS = eventData.logistics;
export const HERO = eventData.hero;
export const ABOUT = eventData.about;
export const EVENT_DETAILS = eventData.eventDetails;
export const GET_INVOLVED = eventData.getInvolved;
export const FOOTER = eventData.footer;
export const TEAM = eventData.team;
export const POLICIES = eventData.policies;
