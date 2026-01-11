
import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { Speaker, ScheduleItem, Sponsor } from '../types';

const Admin: React.FC = () => {
  const { 
    siteSettings, setSiteSettings, 
    speakers, setSpeakers, 
    schedule, setSchedule,
    sponsors, setSponsors,
    volunteerApplications,
    publishChanges,
    hasUnsavedChanges
  } = useData();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<'settings' | 'speakers' | 'agenda' | 'sponsors' | 'volunteers'>('settings');
  const [password, setPassword] = useState('');
  const [isPublishing, setIsPublishing] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'tedx2025') setIsLoggedIn(true);
    else alert('Incorrect Password (Try: tedx2025)');
  };

  const handlePublish = async () => {
    setIsPublishing(true);
    await new Promise(r => setTimeout(r, 1000));
    publishChanges();
    setIsPublishing(false);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-black px-6">
        <div className="w-full max-w-md p-8 bg-zinc-900 rounded-3xl border border-white/10 shadow-2xl">
          <h1 className="text-3xl font-black text-white mb-2">Admin Portal</h1>
          <p className="text-white/50 mb-8 text-sm uppercase tracking-widest">Sanity Studio Simulation</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-white/40 uppercase mb-2">Access Token</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password..." className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-ted-red outline-none transition-all" />
            </div>
            <button className="w-full py-4 bg-ted-red text-white font-bold rounded-xl hover:bg-red-700 transition-all shadow-lg shadow-ted-red/20">Login to CMS</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-24 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-black text-white">Content Manager</h1>
              {hasUnsavedChanges && <span className="px-2 py-0.5 bg-yellow-500/10 text-yellow-500 text-[10px] font-bold uppercase border border-yellow-500/20 rounded">Unsaved Draft</span>}
            </div>
            <p className="text-white/40">Manage your TEDx event content safely across all sessions.</p>
          </div>
          <div className="flex gap-4">
            <button onClick={handlePublish} disabled={!hasUnsavedChanges || isPublishing} className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${hasUnsavedChanges ? 'bg-ted-red text-white hover:bg-red-700 shadow-lg shadow-ted-red/30' : 'bg-white/5 text-white/20'}`}>{isPublishing ? 'Publishing...' : 'Publish to Live Site'}</button>
            <button onClick={() => setIsLoggedIn(false)} className="text-white/40 hover:text-white text-sm border border-white/10 px-4 py-2 rounded-xl">Logout</button>
          </div>
        </header>

        <div className="flex flex-wrap gap-2 mb-8 bg-zinc-950 p-1 rounded-xl border border-white/5">
          {['settings', 'speakers', 'agenda', 'sponsors', 'volunteers'].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab as any)} className={`px-6 py-2 rounded-lg font-bold transition-all text-sm capitalize ${activeTab === tab ? 'bg-zinc-800 text-white shadow-lg' : 'text-white/40 hover:text-white'}`}>{tab}</button>
          ))}
        </div>

        <div className="bg-zinc-900/50 rounded-3xl border border-white/10 p-8 min-h-[500px] backdrop-blur-sm">
          {activeTab === 'volunteers' ? (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white mb-6 border-b border-white/5 pb-4">Volunteer Applications ({volunteerApplications.length})</h2>
              {volunteerApplications.length === 0 ? (
                <div className="text-center py-24 text-white/20 uppercase font-black tracking-widest">No applications yet</div>
              ) : (
                <div className="grid gap-4">
                  {[...volunteerApplications].reverse().map((app) => (
                    <div key={app.id} className="bg-black/40 p-6 rounded-2xl border border-white/5 group hover:border-ted-red/30 transition-all">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-black text-white mb-1">{app.name}</h3>
                          <div className="flex gap-4 text-xs font-bold text-white/40">
                            <span className="text-ted-red">{app.email}</span>
                            <span>{app.phone}</span>
                            <span>{new Date(app.appliedAt).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 bg-white/5 rounded-xl text-sm text-white/70 italic">"{app.reason}"</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : activeTab === 'settings' ? (
            <div className="space-y-8 max-w-2xl">
              <h2 className="text-xl font-bold text-white mb-6 border-b border-white/5 pb-4">General Configuration</h2>
              
              <div className="bg-ted-red/10 border border-ted-red/20 p-6 rounded-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-black uppercase text-xs tracking-widest">Announcement Banner</h3>
                  <button 
                    onClick={() => setSiteSettings({...siteSettings, announcement: siteSettings.announcement ? null : { en: '', ar: '' }})}
                    className={`text-[10px] font-bold px-3 py-1 rounded ${siteSettings.announcement ? 'bg-ted-red text-white' : 'bg-white/10 text-white/40'}`}
                  >
                    {siteSettings.announcement ? 'Enabled' : 'Disabled'}
                  </button>
                </div>
                {siteSettings.announcement && (
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="admin-label">Announcement (EN)</label>
                      <input 
                        className="admin-input" 
                        value={siteSettings.announcement.en} 
                        onChange={e => setSiteSettings({...siteSettings, announcement: { ...siteSettings.announcement!, en: e.target.value }})} 
                      />
                    </div>
                    <div>
                      <label className="admin-label text-right block">الإعلان (AR)</label>
                      <input 
                        className="admin-input text-right" 
                        dir="rtl"
                        value={siteSettings.announcement.ar} 
                        onChange={e => setSiteSettings({...siteSettings, announcement: { ...siteSettings.announcement!, ar: e.target.value }})} 
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><label className="admin-label">Hero Title (EN)</label><input className="admin-input" value={siteSettings.heroTitle.en} onChange={e => setSiteSettings({...siteSettings, heroTitle: {...siteSettings.heroTitle, en: e.target.value}})} /></div>
                <div><label className="admin-label">Hero Title (AR)</label><input className="admin-input" value={siteSettings.heroTitle.ar} onChange={e => setSiteSettings({...siteSettings, heroTitle: {...siteSettings.heroTitle, ar: e.target.value}})} /></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><label className="admin-label">Twitter Handle</label><input className="admin-input" value={siteSettings.socialLinks.twitter} onChange={e => setSiteSettings({...siteSettings, socialLinks: {...siteSettings.socialLinks, twitter: e.target.value}})} /></div>
                <div><label className="admin-label">Instagram Handle</label><input className="admin-input" value={siteSettings.socialLinks.instagram} onChange={e => setSiteSettings({...siteSettings, socialLinks: {...siteSettings.socialLinks, instagram: e.target.value}})} /></div>
              </div>
              <div><label className="admin-label">Luma Registration URL</label><input className="admin-input" value={siteSettings.lumaUrl} onChange={e => setSiteSettings({...siteSettings, lumaUrl: e.target.value})} /></div>
              <div><label className="admin-label">Trailer Video URL</label><input className="admin-input" value={siteSettings.trailerUrl} onChange={e => setSiteSettings({...siteSettings, trailerUrl: e.target.value})} /></div>
              <div><label className="admin-label">Live Stream URL</label><input className="admin-input" value={siteSettings.liveUrl} onChange={e => setSiteSettings({...siteSettings, liveUrl: e.target.value})} /></div>
            </div>
          ) : activeTab === 'speakers' ? (
            <div className="space-y-6">
              <div className="flex justify-between items-center mb-8"><h2 className="text-xl font-bold text-white">Speaker Roster</h2><button onClick={() => setSpeakers([...speakers, { id: Date.now().toString(), name: {en: 'New Speaker', ar: 'متحدث جديد'}, role: {en: 'Role', ar: 'دور'}, talkTitle: {en: 'Talk', ar: 'عنوان'}, talkDescription: {en: 'Talk Desc', ar: 'وصف'}, bio: {en: 'Bio', ar: 'سيرة'}, photo: 'https://picsum.photos/400/400', socials: {} }])} className="bg-ted-red/20 text-ted-red border border-ted-red/20 px-4 py-2 rounded-lg text-sm font-bold hover:bg-ted-red transition-all shadow-lg shadow-ted-red/10">+ Add Speaker</button></div>
              <div className="grid gap-6">{speakers.map((speaker, index) => (
                <div key={speaker.id} className="bg-black/40 p-6 rounded-2xl border border-white/5 group">
                  <div className="flex gap-6"><img src={speaker.photo} className="w-16 h-16 rounded-xl object-cover shrink-0" /><div className="flex-grow grid grid-cols-2 gap-4"><div><label className="admin-label">Name (EN)</label><input className="admin-input" value={speaker.name.en} onChange={e => { const newS = [...speakers]; newS[index].name.en = e.target.value; setSpeakers(newS); }} /></div><div className="text-right"><label className="admin-label">الاسم (AR)</label><input className="admin-input text-right" dir="rtl" value={speaker.name.ar} onChange={e => { const newS = [...speakers]; newS[index].name.ar = e.target.value; setSpeakers(newS); }} /></div></div></div>
                </div>
              ))}</div>
            </div>
          ) : (
            <div className="text-center py-24 text-white/20 uppercase font-black tracking-widest">Tab Content Simulation</div>
          )}
        </div>
      </div>
      <style>{`.admin-label { display: block; font-size: 10px; text-transform: uppercase; font-weight: 800; color: rgba(255,255,255,0.3); letter-spacing: 0.1em; margin-bottom: 0.5rem; } .admin-input { width: 100%; background: #000; border: 1px solid rgba(255,255,255,0.1); border-radius: 0.75rem; padding: 0.75rem 1rem; color: white; font-size: 0.875rem; outline: none; transition: border-color 0.2s; } .admin-input:focus { border-color: #eb0028; }`}</style>
    </div>
  );
};

export default Admin;
