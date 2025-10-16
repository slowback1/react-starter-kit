cd "$(git rev-parse --show-toplevel)" || exit 1

mkdir -p .git/hooks

cat > .git/hooks/pre-commit <<'HOOK'
#!/usr/bin/env bash
set -e
# Prefer the Taskfile CLI; fallback to npm scripts
if command -v task >/dev/null 2>&1; then
  task precommit
else
  npm run lint:fix
  npm run format
  npm run test:once
fi
HOOK

chmod +x .git/hooks/pre-commit