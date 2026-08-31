import { Link } from "react-router-dom";
import type { LegalSection } from "@/content/legal";
import { cn } from "@/lib/utils";

export function LegalDocumentBody({
  sections,
  className,
}: {
  sections: LegalSection[];
  className?: string;
}) {
  return (
    <div className={cn("space-y-8", className)}>
      {sections.map((section, index) => {
        const Icon = section.icon;
        return (
          <div key={index} className="rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold text-ink">{section.title}</h3>

                {section.content && (
                  <div className="mt-4 space-y-4 whitespace-pre-wrap text-sm leading-relaxed text-ink/80">
                    {section.content}
                  </div>
                )}

                {section.listItems && section.listItems.length > 0 && (
                  <ul className="mt-4 list-outside list-disc space-y-2 pl-4 text-sm leading-relaxed text-ink/80">
                    {section.listItems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}

                {section.subsections && (
                  <div className="mt-6 space-y-6">
                    {section.subsections.map((sub, i) => (
                      <div key={i}>
                        <h4 className="text-base font-semibold text-ink">{sub.heading}</h4>
                        <div className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-ink/80">
                          {sub.content}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {section.tableRows && section.tableRows.length > 0 && (
                  <div className="mt-6 overflow-hidden rounded-xl border border-border">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-warm text-ink">
                        <tr>
                          <th className="border-b border-r border-border p-3 font-semibold">Purpose</th>
                          <th className="border-b border-border p-3 font-semibold">Providers</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {section.tableRows.map((row, i) => (
                          <tr key={i}>
                            <td className="border-r border-border p-3 text-ink/80">{row.purpose}</td>
                            <td className="p-3 text-ink/80">{row.providers}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {section.categoryRows && section.categoryRows.length > 0 && (
                  <div className="mt-6 space-y-4">
                    {section.categoryRows.map((cat, i) => (
                      <div key={i} className="rounded-xl border border-border bg-warm p-4">
                        <p className="font-semibold text-ink">{cat.name}</p>
                        <p className="mt-1 text-sm text-ink/80">{cat.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {section.retentionRows && section.retentionRows.length > 0 && (
                  <div className="mt-6 overflow-hidden rounded-xl border border-border">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-warm text-ink">
                        <tr>
                          <th className="border-b border-r border-border p-3 font-semibold">Category</th>
                          <th className="border-b border-border p-3 font-semibold">Retention</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {section.retentionRows.map((row, i) => (
                          <tr key={i}>
                            <td className="border-r border-border p-3 text-ink/80">{row.category}</td>
                            <td className="p-3 text-ink/80">{row.retention}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {section.tableFooter && (
                  <p className="mt-4 text-sm text-muted-foreground">{section.tableFooter}</p>
                )}
                {section.footerContent && (
                  <div className="mt-6 whitespace-pre-wrap text-sm leading-relaxed text-ink/80">
                    {section.footerContent}
                  </div>
                )}

                {section.link && (
                  <div className="mt-6">
                    <Link
                      to={section.link.to}
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      {section.link.label}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
