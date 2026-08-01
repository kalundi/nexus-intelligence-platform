"use client";

export default function PlatformError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="platform-state-page">
      <section className="platform-state-card error-state">
        <span>PLATFORM ERROR</span>

        <h1>We could not load this module.</h1>

        <p>
          Please retry. The error has been isolated so the rest of
          the platform remains available.
        </p>

        {process.env.NODE_ENV === "development" ? (
          <pre>{error.message}</pre>
        ) : null}

        <button type="button" onClick={reset}>
          Try again
        </button>
      </section>
    </main>
  );
}
