import { Link } from "react-router-dom";
import { useI18n } from "@/i18n";
import { useEffect } from "react";

export default function NotFoundPage() {
  const { t } = useI18n();
  const copy = t.errors.notFound;

  useEffect(() => {
    document.title = "404 Not Found - Divya Santan Foundation";
  }, []);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-6xl text-primary">{copy.code}</h1>
        <h2 className="mt-4 text-xl text-ink">{copy.title}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{copy.body}</p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {copy.action}
          </Link>
        </div>
      </div>
    </div>
  );
}
