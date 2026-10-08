import { useState } from 'react';
import {
  mockSummaryData,
  mockDeviceHealth,
  mockAttentionEvent,
  mockRecentEvents,
  mockAllEvents,
} from './data/mockData';
import { SystemStatusState, SmartEvent } from './types';
import { Header } from './components/Header';
import { StatusSummary } from './components/StatusSummary';
import { AttentionCard } from './components/AttentionCard';
import { ActivitySummary } from './components/ActivitySummary';
import { ActivityTimeline } from './components/ActivityTimeline';
import { DeviceHealthCard } from './components/DeviceHealthCard';
import { EventDetailsScreen } from './components/EventDetailsScreen';
import { AllActivityScreen } from './components/AllActivityScreen';
import { TechDetailsModal } from './components/TechDetailsModal';
import { UXPhilosophyDrawer } from './components/UXPhilosophyDrawer';
import { SettingsModal } from './components/SettingsModal';
import { DeviceFrame } from './components/DeviceFrame';

export function App() {
  const [currentScreen, setCurrentScreen] = useState<'home' | 'event-details' | 'all-activity'>('home');
  const [selectedEvent, setSelectedEvent] = useState<SmartEvent>(mockAttentionEvent);
  const [activityCategoryFilter, setActivityCategoryFilter] = useState<string>('all');
  const [statusState, setStatusState] = useState<SystemStatusState>('good');
  const [isTechModalOpen, setIsTechModalOpen] = useState(false);
  const [isPhilosophyOpen, setIsPhilosophyOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isMobileFrame, setIsMobileFrame] = useState(true);
  const handleToggleStatusState = () => {
    setStatusState((prev) => (prev === 'good' ? 'attention' : 'good'));
  };

  const handleNavigateToDetails = (event: SmartEvent = mockAttentionEvent) => {
    setSelectedEvent(event);
    setCurrentScreen('event-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToAllActivity = (categoryFilter = 'all') => {
    setActivityCategoryFilter(categoryFilter);
    setCurrentScreen('all-activity');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentScreen('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <DeviceFrame
      isMobileFrame={isMobileFrame}
      onToggleFrame={() => setIsMobileFrame((prev) => !prev)}
      statusState={statusState}
      onToggleStatus={handleToggleStatusState}
      onOpenPhilosophy={() => setIsPhilosophyOpen(true)}
    >
      {currentScreen === 'home' && (
        <div className="min-h-full bg-slate-950 text-slate-100 flex flex-col pb-8">
          <Header
            statusState={statusState}
            onToggleStatus={handleToggleStatusState}
            onOpenSettings={() => setIsSettingsOpen(true)}
            onOpenPhilosophy={() => setIsPhilosophyOpen(true)}
          />

          <main className="space-y-1">
            <StatusSummary
              statusState={statusState}
              summary={mockSummaryData}
              attentionCount={1}
            />
            <AttentionCard
              event={mockAttentionEvent}
              onViewDetails={() => handleNavigateToDetails(mockAttentionEvent)}
            />
            <ActivitySummary
              summary={mockSummaryData}
              onSelectCategory={(cat) => handleNavigateToAllActivity(cat)}
            />
            <ActivityTimeline
              events={mockRecentEvents}
              onViewAllActivity={() => handleNavigateToAllActivity('all')}
              onSelectEvent={(evt) => {
                if (evt.category === 'connection' || evt.details) {
                  handleNavigateToDetails(evt);
                } else {
                  handleNavigateToAllActivity('all');
                }
              }}
            />
            <DeviceHealthCard
              health={mockDeviceHealth}
              onOpenTechDetails={() => setIsTechModalOpen(true)}
            />
          </main>
        </div>
      )}
      {currentScreen === 'event-details' && (
        <EventDetailsScreen
          event={selectedEvent}
          onBack={handleBackToHome}
        />
      )}

     
      {currentScreen === 'all-activity' && (
        <AllActivityScreen
          events={mockAllEvents}
          initialFilter={activityCategoryFilter}
          onBack={handleBackToHome}
          onSelectEvent={(evt) => {
            if (evt.category === 'connection' || evt.details) {
              handleNavigateToDetails(evt);
            }
          }}
        />
      )}
      <TechDetailsModal
        isOpen={isTechModalOpen}
        onClose={() => setIsTechModalOpen(false)}
        health={mockDeviceHealth}
      />

      <UXPhilosophyDrawer
        isOpen={isPhilosophyOpen}
        onClose={() => setIsPhilosophyOpen(false)}
      />

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        statusState={statusState}
        onSetStatusState={(state) => setStatusState(state)}
        isMobileFrame={isMobileFrame}
        onToggleMobileFrame={() => setIsMobileFrame((prev) => !prev)}
        onOpenPhilosophy={() => setIsPhilosophyOpen(true)}
      />
    </DeviceFrame>
  );
}

export default App;
