export interface Machine {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  features: string[];
}

export interface NavItem {
  label: string;
  path: string;
}

export enum ContactStatus {
  IDLE = 'IDLE',
  SENDING = 'SENDING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface User {
  name: string;
  email: string;
}