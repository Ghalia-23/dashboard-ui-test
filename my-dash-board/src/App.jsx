
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';
import { 
  LayoutDashboard, Phone, Calendar, Target, Star, Settings, 
  Bell, PhoneCall, CalendarDays, CheckCircle2, DollarSign 
} from 'lucide-react';

const callVolumeData = [
  { date: 'May 6', calls: 32, extra: 8 },
  { date: 'May 8', calls: 35, extra: 10 },
  { date: 'May 10', calls: 45, extra: 15 },
  { date: 'May 12', calls: 40, extra: 10 },
  { date: 'May 14', calls: 35, extra: 10 },
  { date: 'May 16', calls: 48, extra: 15 },
  { date: 'May 18', calls: 52, extra: 18 },
  { date: 'May 20', calls: 42, extra: 12 },
  { date: 'May 22', calls: 38, extra: 10 },
  { date: 'May 24', calls: 50, extra: 18 },
  { date: 'May 26', calls: 44, extra: 14 },
  { date: 'May 28', calls: 40, extra: 12 },
  { date: 'May 30', calls: 48, extra: 18 },
  { date: 'Jun 1', calls: 45, extra: 15 },
];

const recentCalls = [
  { caller: '(404) 555-0173', language: 'EN', intent: 'New reservation — party of 4', outcome: 'Booked', time: 'Today, 7:42 PM', duration: '1m 58s' },
  { caller: '(678) 555-0119', language: 'EN', intent: 'Hours & parking question', outcome: 'Answered', time: 'Today, 7:21 PM', duration: '0m 47s' },
  { caller: '(470) 555-0142', language: 'ES', intent: 'Reservation para 6 personas', outcome: 'Booked', time: 'Today, 6:58 PM', duration: '2m 14s' },
  { caller: '(404) 555-0188', language: 'EN', intent: 'Modify existing reservation', outcome: 'Booked', time: 'Today, 6:30 PM', duration: '1m 12s' },
];

const monthlyStats = [
  { label: 'Calls answered', value: '1,284', trend: '+12.4%', sub: '100% answer rate, 24/7', icon: PhoneCall },
  { label: 'Reservations booked', value: '612', trend: '+8.1%', sub: 'by your AI host', icon: CalendarDays },
  { label: 'Resolution rate', value: '94%', trend: '+3.2%', sub: 'handled without transfer', icon: CheckCircle2 },
  { label: 'Revenue recovered', value: '$9,480', trend: '+15.0%', sub: 'from no-show recovery', icon: DollarSign },
];

function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f0] flex font-sans text-gray-900">
      {/* Sidebar */}
      <aside className="w-[260px] bg-white border-r border-gray-200 flex flex-col justify-between">
        <div>
          {/* Logo Section with logo.png */}
          <div className="p-5 h-[65px] flex items-center">
            <img 
              src="/logo.png" 
              alt="get CoreOps ai" 
              className="h-7 w-auto object-contain" 
            />
          </div>

          {/* User Card Section */}
          <div className="border-t border-gray-200 p-4">
            <div className="bg-[#fcfcf9] border border-gray-200 rounded-xl p-3 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#1a4d3e] rounded-lg flex items-center justify-center text-white font-bold text-sm">MI</div>
              <div>
                <div className="text-sm font-semibold text-gray-800">Mister Oh-One</div>
                <div className="text-xs text-gray-400">Growth Plan</div>
              </div>
            </div>
          </div>
          
          {/* Menu Section */}
          <div className="border-t border-gray-200 pt-3 pb-2 px-4">
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">MENU</div>
          </div>

          <nav className="space-y-1 text-sm font-medium px-3">
            <div className="bg-[#eef4f1] text-[#1a4d3e] px-3 py-2.5 rounded-lg flex items-center gap-3 border-l-[3px] border-[#1a4d3e]">
              <LayoutDashboard size={18} /> Dashboard
            </div>
            {[
              { icon: Phone, label: 'Call Activity' },
              { icon: Calendar, label: 'Reservations' },
              { icon: Target, label: 'Campaigns' },
              { icon: Star, label: 'Reputation' },
              { icon: Settings, label: 'Settings' }
            ].map((item, i) => (
              <div key={i} className="text-gray-600 px-3 py-2.5 rounded-lg hover:bg-gray-50 flex items-center gap-3 cursor-pointer">
                <item.icon size={18} /> {item.label}
              </div>
            ))}
          </nav>
        </div>

        {/* Support Box Section */}
        <div className="border-t border-gray-200 p-4">
          <div className="bg-[#1a4d3e] rounded-xl p-4 text-white shadow-sm">
            <p className="text-sm font-semibold mb-1">Need a change?</p>
            <p className="text-[11px] text-gray-200 leading-relaxed mb-3">
              Your team updates everything for you — usually same day.
            </p>
            <button className="bg-[#2d5a4a] hover:bg-[#346654] text-white text-xs font-medium py-1.5 px-3 rounded-lg transition-colors w-full text-center">
              Contact support
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Body */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-[65px] bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#f4f7f5] border border-gray-200 rounded-lg flex items-center justify-center text-[#1a4d3e]">
              <LayoutDashboard size={16} />
            </div>
            <span className="font-bold text-gray-900 text-sm">Dashboard</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-xs text-gray-500 bg-white border border-gray-200 px-3 py-1.5 rounded-lg">
              Last 30 days
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <Bell size={18} />
            </button>
            <div className="w-8 h-8 bg-[#1a4d3e] rounded-full flex items-center justify-center text-white text-xs font-bold">
              JA
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-y-auto">
          {/* Top 4 Stats Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {monthlyStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col justify-between relative overflow-hidden shadow-sm">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#2e5a4a]" />
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs text-gray-500 font-medium">{stat.label}</span>
                      <div className="w-9 h-9 bg-[#f4f7f5] rounded-full flex items-center justify-center text-[#1a4d3e]">
                        <IconComponent size={18} />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 tracking-tight mb-2">{stat.value}</div>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] pt-2 border-t border-gray-50">
                    <span className="text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">
                      {stat.trend}
                    </span>
                    <span className="text-gray-400 truncate">{stat.sub}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call Volume and Reputation Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-xl border border-gray-200 p-5 lg:col-span-2 shadow-sm">
              <h2 className="text-base font-semibold text-gray-800">Call volume</h2>
              <p className="text-xs text-gray-400 mt-1">
                Calls handled by your AI host — including after-hours calls that would have gone to voicemail.
              </p>
              <div className="h-[220px] mt-4 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={callVolumeData}>
                    <defs>
                      <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2e5a4a" stopOpacity={0.35}/>
                        <stop offset="95%" stopColor="#2e5a4a" stopOpacity={0.02}/>
                      </linearGradient>
                      <linearGradient id="colorOrange" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#d4af37" stopOpacity={0.35}/>
                        <stop offset="95%" stopColor="#d4af37" stopOpacity={0.02}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                    <XAxis dataKey="date" stroke="#d0d0d0" fontSize={9} tickLine={false} axisLine={false} interval={1} />
                    <YAxis stroke="#d0d0d0" fontSize={9} tickLine={false} axisLine={false} domain={[0, 100]} ticks={[0, 25, 50, 75, 100]} />
                    <Tooltip />
                    <Area type="natural" dataKey="calls" stackId="1" stroke="#2e5a4a" strokeWidth={2} fill="url(#colorGreen)" dot={false} />
                    <Area type="natural" dataKey="extra" stackId="1" stroke="#d4af37" strokeWidth={2} fill="url(#colorOrange)" dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <div className="mb-2 flex justify-between items-center">
                <h2 className="text-base font-semibold text-gray-800">Reputation</h2>
                <button className="text-xs text-[#1a4d3e] font-medium hover:underline">
                  Details →
                </button>
              </div>
              <div className="flex gap-6 items-start mt-4">
                <div>
                  <div className="text-3xl font-bold text-gray-900 leading-none mb-1">4.7</div>
                  <div className="text-yellow-400 text-xs tracking-tighter mb-1">★★★★★</div>
                  <div className="text-[11px] text-gray-400">318 reviews</div>
                </div>
                <div className="flex-1 space-y-2 pt-1">
                  {[
                    { stars: 5, count: 241, width: '100%' },
                    { stars: 4, count: 52, width: '35%' },
                    { stars: 3, count: 14, width: '15%' },
                    { stars: 2, count: 7, width: '8%' },
                    { stars: 1, count: 4, width: '4%' },
                  ].map((item) => (
                    <div key={item.stars} className="flex items-center gap-2">
                      <span className="text-xs text-gray-600 font-medium w-4">{item.stars}★</span>
                      <div className="flex-1 h-2 bg-[#f2f2ef] rounded-full overflow-hidden">
                        <div className="h-full bg-[#3b594b] rounded-full" style={{ width: item.width }}></div>
                      </div>
                      <span className="text-xs text-gray-500 w-6 text-right">{item.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Recent Calls and This Month Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-5 lg:col-span-2 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-base font-semibold text-gray-800">Recent calls</h2>
                <button className="text-xs text-[#1a4d3e] font-medium hover:underline">View all →</button>
              </div>
              <p className="text-xs text-gray-400 mb-4">Latest calls handled by your AI host.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left py-2.5 px-2 text-gray-400 font-medium">CALLER</th>
                      <th className="text-left py-2.5 px-2 text-gray-400 font-medium">INTENT</th>
                      <th className="text-left py-2.5 px-2 text-gray-400 font-medium">OUTCOME</th>
                      <th className="text-left py-2.5 px-2 text-gray-400 font-medium">TIME</th>
                      <th className="text-left py-2.5 px-2 text-gray-400 font-medium">DURATION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentCalls.map((call, index) => (
                      <tr key={index} className="border-b border-gray-50 hover:bg-gray-50">
                        <td className="py-2.5 px-2">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-green-50 rounded-full flex items-center justify-center text-[#1a4d3e]">
                              <Phone size={12} />
                            </div>
                            <div>
                              <div className="font-medium text-gray-700">{call.caller}</div>
                              <div className="text-[10px] text-gray-400">{call.language}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-2.5 px-2 text-gray-600">{call.intent}</td>
                        <td className="py-2.5 px-2">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                            call.outcome === 'Booked' ? 'bg-green-50 text-green-700' : 'bg-blue-50 text-blue-700'
                          }`}>
                            {call.outcome}
                          </span>
                        </td>
                        <td className="py-2.5 px-2 text-gray-500">{call.time}</td>
                        <td className="py-2.5 px-2 text-gray-500">{call.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <h2 className="text-base font-semibold text-gray-800 mb-1">This month</h2>
              <p className="text-xs text-gray-400 mb-4">What your AI host handled.</p>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                  <div>
                    <div className="text-xs text-gray-700 font-medium">Calls answered</div>
                    <div className="text-[10px] text-gray-400">100% answer rate</div>
                  </div>
                  <div className="text-sm font-bold text-gray-900">1,284</div>
                </div>
                <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                  <div>
                    <div className="text-xs text-gray-700 font-medium">After-hours saved</div>
                    <div className="text-[10px] text-gray-400">would have hit voicemail</div>
                  </div>
                  <div className="text-sm font-bold text-gray-900">248</div>
                </div>
                <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                  <div>
                    <div className="text-xs text-gray-700 font-medium">Avg. handle time</div>
                    <div className="text-[10px] text-gray-400">across all calls</div>
                  </div>
                  <div className="text-sm font-bold text-gray-900">1m 41s</div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-xs text-gray-700 font-medium">Transferred to staff</div>
                    <div className="text-[10px] text-gray-400">by your escalation rules</div>
                  </div>
                  <div className="text-sm font-bold text-gray-900">6%</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;