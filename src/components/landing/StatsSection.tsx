import { CheckCircle, XCircle } from "lucide-react";

const data = [
  {
    feature: "Intelligent Ranking",
    skanjo: true,
    zoho: false,
    manual: false,
  },
  {
    feature: "Contextual Fit (role + industry + company)",
    skanjo: true,
    zoho: false,
    manual: false,
  },
  {
    feature: "Reasons Behind Scores",
    skanjo: true,
    zoho: false,
    manual: true,
  },
  {
    feature: "Auto-generated Interview Questions",
    skanjo: true,
    zoho: false,
    manual: false,
  },
  {
    feature: "Built for Zoho Recruit",
    skanjo: true,
    zoho: true,
    manual: false,
  },
  {
    feature: "Handles Thousands Seamlessly",
    skanjo: true,
    zoho: true,
    manual: false,
  },
  {
    feature: "ROI on Job Board Spend",
    skanjo: true,
    zoho: false,
    manual: false,
  },
];

const ComparisonTable = () => {
  return (
    <section className="px-6 sm:px-12 md:px-24 py-16 bg-muted text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
        How is Skanjo different?
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-border divide-y divide-border text-left bg-background rounded-xl overflow-hidden">
          <thead className="bg-muted text-muted-foreground">
            <tr>
              <th className="px-6 py-4 font-semibold">Feature</th>
              <th className="px-6 py-4 font-semibold text-center">Skanjo</th>
              <th className="px-6 py-4 font-semibold text-center">Zoho Default</th>
              <th className="px-6 py-4 font-semibold text-center">Manual</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {data.map((row, idx) => (
              <tr key={idx} className="hover:bg-accent/10 transition">
                <td className="px-6 py-4 font-medium text-foreground">{row.feature}</td>
                {[row.skanjo, row.zoho, row.manual].map((val, i) => (
                  <td key={i} className="px-6 py-4 text-center">
                    {val ? (
                      <CheckCircle className="text-green-500 w-5 h-5 mx-auto" />
                    ) : (
                      <XCircle className="text-red-500 w-5 h-5 mx-auto" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ComparisonTable;