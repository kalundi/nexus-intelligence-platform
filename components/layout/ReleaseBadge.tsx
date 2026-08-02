type ReleaseBadgeProps = {
  label?: string;
  phase?: "alpha" | "beta" | "ga";
};

const phaseStyles: Record<NonNullable<ReleaseBadgeProps["phase"]>, string> = {
  alpha: "rgba(214, 138, 34, 0.16)",
  beta: "rgba(22, 133, 200, 0.16)",
  ga: "rgba(31, 168, 121, 0.16)",
};

const phaseText: Record<NonNullable<ReleaseBadgeProps["phase"]>, string> = {
  alpha: "ALPHA",
  beta: "BETA",
  ga: "GA",
};

export function ReleaseBadge({
  label = "Genesis",
  phase = "beta",
}: ReleaseBadgeProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.45rem",
        padding: "0.35rem 0.6rem",
        borderRadius: "999px",
        fontSize: "0.72rem",
        fontWeight: 800,
        letterSpacing: "0.08em",
        color: "#0b3a58",
        background: phaseStyles[phase],
      }}
      aria-label={`Release phase ${phaseText[phase]}`}
    >
      <span>{label}</span>
      <span>{phaseText[phase]}</span>
    </span>
  );
}
