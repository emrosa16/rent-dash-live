'use client'
import { CalendarClock, Mail, UserCheck } from "lucide-react";

const renters = [
  {
    name: "Alex Rivera",
    score: 92,
    status: "Verified",
    leaseEnd: "2025-06-15",
    email: "alex.rivera@email.com",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jamie Chen",
    score: 78,
    status: "Pending",
    leaseEnd: "2025-05-01",
    email: "jamie.chen@email.com",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Taylor Brooks",
    score: 85,
    status: "Verified",
    leaseEnd: "2025-04-20",
    email: "taylor.brooks@email.com",
    photo: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

export default function Dashboard() {
  const today = new Date();
  const endingSoon = renters.filter(r => new Date(r.leaseEnd) < new Date(today.getTime() + 45 * 24 * 60 * 60 * 1000));

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Broker Dashboard</h1>

        {endingSoon.length > 0 && (
          <div className="mb-8">
            <h3 className="text-md font-semibold text-gray-700 mb-2">Renters With Leases Ending Soon</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {endingSoon.map((renter, i) => (
                <div key={i} className="rounded-2xl shadow-sm border border-gray-200 bg-white hover:shadow-md transition p-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <img src={renter.photo} alt={renter.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900">{renter.name}</h2>
                      <span className="text-sm text-blue-600 flex items-center gap-1">
                        <UserCheck className="w-4 h-4" /> {renter.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">Passport Score: {renter.score}/100</p>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600" style={{ width: `${renter.score}%` }} />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CalendarClock className="w-4 h-4" /> Lease ends: {renter.leaseEnd}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4" /> {renter.email}
                  </div>
                  <button className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-1.5 rounded-md">Follow Up</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}