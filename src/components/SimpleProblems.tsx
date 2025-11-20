'use client';

export default function SimpleProblems() {
  const problems = [
    {
      title: "Revenue Operations",
      subtitle: "Commission chaos derailing growth",
      stat: "$50K+ lost quarterly to disputes",
      issues: [
        "Commission disputes eating into pipeline optimization time",
        "Sales team losing trust in revenue operations",
        "Manual processes breaking your automated revenue stack", 
        "CRO questioning why commission data is always wrong"
      ]
    },
    {
      title: "Finance Teams", 
      subtitle: "Commission errors destroying close cycles",
      stat: "40 hours wasted monthly on manual work",
      issues: [
        "Commission calculations delaying financial close every month",
        "CFO questioning commission accuracy in board meetings",
        "No way to audit commission changes or errors",
        "Commission forecasting is impossible with bad data"
      ]
    },
    {
      title: "Sales Leadership",
      subtitle: "Team motivation destroyed by pay disputes",
      stat: "73% of sales teams have monthly disputes", 
      issues: [
        "Top performers questioning commission calculations",
        "Sales reps spending time arguing instead of selling",
        "Commission plan changes create team-wide confusion",
        "Lost deals because reps don't trust earning potential"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Your commission chaos is bleeding money
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto mb-8">
              Commission disputes are destroying team productivity. Manual calculations are costing you deals. Your revenue operations are broken because of one manual process.
            </p>
            
            {/* Industry Statistics - Navy Theme */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-navy-50 border border-navy-200 rounded-lg p-4">
                <div className="text-2xl font-bold text-navy-900 mb-1">73%</div>
                <div className="text-sm text-navy-700">of companies have commission disputes monthly</div>
              </div>
              <div className="bg-navy-50 border border-navy-200 rounded-lg p-4">
                <div className="text-2xl font-bold text-navy-900 mb-1">40hrs</div>
                <div className="text-sm text-navy-700">average monthly time spent on manual calculations</div>
              </div>
              <div className="bg-navy-50 border border-navy-200 rounded-lg p-4">
                <div className="text-2xl font-bold text-navy-900 mb-1">$47K</div>
                <div className="text-sm text-navy-700">average annual cost of commission errors</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {problems.map((problem, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-navy-900 mb-2">
                  {problem.title}
                </h3>
                <p className="text-navy-600 font-medium mb-3">
                  {problem.subtitle}
                </p>
                <div className="bg-navy-50 border border-navy-200 rounded-lg p-3 mb-6">
                  <div className="text-sm font-medium text-navy-700">📊 {problem.stat}</div>
                </div>
                
                <ul className="space-y-3">
                  {problem.issues.map((issue, issueIndex) => (
                    <li key={issueIndex} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-navy-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                      <span className="text-navy-700 text-sm leading-relaxed">{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}