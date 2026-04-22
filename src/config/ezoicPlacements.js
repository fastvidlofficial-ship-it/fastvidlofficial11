/**
 * Ezoic ad placement IDs from your Ezoic dashboard.
 * Replace defaults below or set:
 *   NEXT_PUBLIC_EZOIC_PLACEMENTS_HOME=101,102
 *   NEXT_PUBLIC_EZOIC_PLACEMENTS_TOOL=103,104,105
 */

function parseEnvPlacements(env) {
  if (env == null || String(env).trim() === "") return null;
  const ids = String(env)
    .split(/[\s,]+/)
    .map((s) => parseInt(s, 10))
    .filter((n) => Number.isFinite(n) && n > 0);
  return ids.length > 0 ? ids : null;
}

const DEFAULT_HOME = [101, 102];
const DEFAULT_TOOL = [103, 104, 105];

export function getEzoicHomePlacements() {
  return (
    parseEnvPlacements(process.env.NEXT_PUBLIC_EZOIC_PLACEMENTS_HOME) ?? DEFAULT_HOME
  );
}

export function getEzoicToolPlacements() {
  return (
    parseEnvPlacements(process.env.NEXT_PUBLIC_EZOIC_PLACEMENTS_TOOL) ?? DEFAULT_TOOL
  );
}
