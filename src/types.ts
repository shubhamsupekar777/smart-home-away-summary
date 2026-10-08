export type SystemStatusState = 'good' | 'attention' | 'critical';

export type EventCategory = 'movement' | 'connection' | 'update' | 'routine';

export type EventSeverity = 'info' | 'notice' | 'warning' | 'critical';

export interface SmartEvent {
  id: string;
  title: string;
  category: EventCategory;
  severity: EventSeverity;
  timestamp: string;
  timeFormatted: string;
  dateGroup: 'Today' | 'Yesterday' | 'Earlier';
  duration?: string;
  endTimeFormatted?: string;
  humanSummary: string;
  details?: {
    cause?: string;
    impact: string;
    currentStatus: string;
    recommendedAction: string;
    timeline: {
      time: string;
      label: string;
      status: 'error' | 'success' | 'info';
    }[];
  };
  isImportant: boolean;
}

export interface DeviceHealth {
  batteryPercentage: number;
  batteryStatus: string;
  connectionQuality: 'Excellent' | 'Good' | 'Fair' | 'Poor';
  connectionRaw: string;
  softwareVersion: string;
  lastRestart: string;
  ipAddress: string;
  macAddress: string;
  uptime: string;
  meshNode: string;
  firmwareUpToDate: boolean;
}

export interface ActivitySummaryData {
  totalEvents: number;
  timeRange: string;
  movementCount: number;
  connectionCount: number;
  updateCount: number;
  routineCount: number;
}
