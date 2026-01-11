
import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { SITE_SETTINGS, SPEAKERS, SCHEDULE, SPONSORS, TEAM, FAQ } from '../constants';
import { SiteSettings, Speaker, ScheduleItem, Sponsor, TeamMember, FAQItem, VolunteerApplication } from '../types';

interface DataContextType {
  siteSettings: SiteSettings;
  setSiteSettings: (val: SiteSettings) => void;
  speakers: Speaker[];
  setSpeakers: (val: Speaker[]) => void;
  schedule: ScheduleItem[];
  setSchedule: (val: ScheduleItem[]) => void;
  sponsors: Sponsor[];
  setSponsors: (val: Sponsor[]) => void;
  team: TeamMember[];
  setTeam: (val: TeamMember[]) => void;
  faqs: FAQItem[];
  setFaqs: (val: FAQItem[]) => void;
  volunteerApplications: VolunteerApplication[];
  addVolunteerApplication: (app: Omit<VolunteerApplication, 'id' | 'appliedAt'>) => void;
  publishChanges: () => void;
  hasUnsavedChanges: boolean;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const cmsChannel = new BroadcastChannel('tedx_cms_sync');

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [siteSettings, setSiteSettings] = useState<SiteSettings>(() => {
    const saved = localStorage.getItem('tedx_settings');
    return saved ? JSON.parse(saved) : SITE_SETTINGS;
  });

  const [speakers, setSpeakers] = useState<Speaker[]>(() => {
    const saved = localStorage.getItem('tedx_speakers');
    return saved ? JSON.parse(saved) : SPEAKERS;
  });

  const [schedule, setSchedule] = useState<ScheduleItem[]>(() => {
    const saved = localStorage.getItem('tedx_schedule');
    return saved ? JSON.parse(saved) : SCHEDULE;
  });

  const [sponsors, setSponsors] = useState<Sponsor[]>(() => {
    const saved = localStorage.getItem('tedx_sponsors');
    return saved ? JSON.parse(saved) : SPONSORS;
  });

  const [team, setTeam] = useState<TeamMember[]>(() => {
    const saved = localStorage.getItem('tedx_team');
    return saved ? JSON.parse(saved) : TEAM;
  });

  const [faqs, setFaqs] = useState<FAQItem[]>(() => {
    const saved = localStorage.getItem('tedx_faqs');
    return saved ? JSON.parse(saved) : FAQ;
  });

  const [volunteerApplications, setVolunteerApplications] = useState<VolunteerApplication[]>(() => {
    const saved = localStorage.getItem('tedx_volunteers');
    return saved ? JSON.parse(saved) : [];
  });

  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    setHasUnsavedChanges(true);
  }, [siteSettings, speakers, schedule, sponsors, team, faqs]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const { type, data } = event.data;
      if (type === 'PUBLISH_UPDATE') {
        setSiteSettings(data.siteSettings);
        setSpeakers(data.speakers);
        setSchedule(data.schedule);
        setSponsors(data.sponsors);
        setTeam(data.team);
        setFaqs(data.faqs);
        setVolunteerApplications(data.volunteerApplications || []);
        
        localStorage.setItem('tedx_settings', JSON.stringify(data.siteSettings));
        localStorage.setItem('tedx_speakers', JSON.stringify(data.speakers));
        localStorage.setItem('tedx_schedule', JSON.stringify(data.schedule));
        localStorage.setItem('tedx_sponsors', JSON.stringify(data.sponsors));
        localStorage.setItem('tedx_team', JSON.stringify(data.team));
        localStorage.setItem('tedx_faqs', JSON.stringify(data.faqs));
        localStorage.setItem('tedx_volunteers', JSON.stringify(data.volunteerApplications || []));
        setHasUnsavedChanges(false);
      }
    };

    cmsChannel.addEventListener('message', handleMessage);
    return () => cmsChannel.removeEventListener('message', handleMessage);
  }, []);

  const addVolunteerApplication = (app: Omit<VolunteerApplication, 'id' | 'appliedAt'>) => {
    const newApp: VolunteerApplication = {
      ...app,
      id: Math.random().toString(36).substr(2, 9),
      appliedAt: new Date().toISOString()
    };
    const updated = [...volunteerApplications, newApp];
    setVolunteerApplications(updated);
    localStorage.setItem('tedx_volunteers', JSON.stringify(updated));
    // Immediately broadcast so admin sees it without full publish
    cmsChannel.postMessage({ type: 'PUBLISH_UPDATE', data: { siteSettings, speakers, schedule, sponsors, team, faqs, volunteerApplications: updated } });
  };

  const publishChanges = () => {
    const data = { siteSettings, speakers, schedule, sponsors, team, faqs, volunteerApplications };
    localStorage.setItem('tedx_settings', JSON.stringify(siteSettings));
    localStorage.setItem('tedx_speakers', JSON.stringify(speakers));
    localStorage.setItem('tedx_schedule', JSON.stringify(schedule));
    localStorage.setItem('tedx_sponsors', JSON.stringify(sponsors));
    localStorage.setItem('tedx_team', JSON.stringify(team));
    localStorage.setItem('tedx_faqs', JSON.stringify(faqs));
    localStorage.setItem('tedx_volunteers', JSON.stringify(volunteerApplications));

    cmsChannel.postMessage({ type: 'PUBLISH_UPDATE', data });
    setHasUnsavedChanges(false);
  };

  return (
    <DataContext.Provider value={{
      siteSettings, setSiteSettings,
      speakers, setSpeakers,
      schedule, setSchedule,
      sponsors, setSponsors,
      team, setTeam,
      faqs, setFaqs,
      volunteerApplications,
      addVolunteerApplication,
      publishChanges,
      hasUnsavedChanges
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be used within DataProvider');
  return context;
};
