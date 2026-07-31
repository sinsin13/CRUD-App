# Engineering Handbook (Concise Edition)

**Version:** 1.0.0 · **Effective:** 2026-08-01
**Purpose:** One short reference for how we plan, build, review, ship, and run software. Full legal-style version available on request; this is the everyday version.

**Key words:** MUST = required, no exceptions. SHOULD = do it unless you have a good reason not to. MAY = your call.

---

## 1. Product Planning

Before writing code, every feature needs:
- A short **PRD** (problem, goals, what's in/out of scope).
- **User stories** with clear acceptance criteria ("Given X, When Y, Then Z").
- Both **functional** requirements (what it does) and **non-functional** ones (how fast, how secure, how accessible).
- Sign-off from Product + Engineering on the **MVP scope** before estimating.

**Done means:** PRD approved, stories written, MVP scope agreed.

## 2. Technical Planning

- Default to our existing stack (React/Next.js, Node.js, TypeScript, PostgreSQL, Docker). Deviating needs a written reason (an ADR).
- Bigger features (multi-day, new dependency, schema change) get a short design doc first.
- Agree on the **API contract** and **database schema** before frontend/backend build in parallel.
- Think about security, performance, and scale at design time, not after launch.

**Done means:** Design reviewed, API contract published, schema reviewed.

## 3. Repository Standards

- New repos need Tech Lead approval and a clear name (`kebab-case`, e.g. `crud-app-client`).
- Every repo needs: `README.md`, `.gitignore`, `.env.example`, `CONTRIBUTING.md`, `CODEOWNERS`, CI workflow, issue/PR templates.
- `main` is protected: no direct pushes, PR + passing checks + review required.
- **Never** commit secrets. Use environment variables + a secrets manager. If a secret leaks, rotate it immediately.

**Done means:** Repo has all required files, branch protection on, no secrets in history.

## 4. Branching Strategy

We use **trunk-based development**:
- `main` is always deployable.
- `feature/<ticket>-<short-desc>`, `bugfix/...`, `hotfix/...` branches, all short-lived (a few days max).
- Branch from latest `main`, squash-merge features back in, delete the branch after merging.
- `release/` branches only if we need a stabilization period separate from `main`.

```
main ──●───────●───────────●──▶
        \feature/x         /hotfix/y
         ●──●──●──(squash)─
```

**Done means:** Correct branch name, merged the right way, branch deleted.

## 5. Development Workflow

Daily loop for every task:

```
pull main → create branch → code → write tests → lint → format
→ typecheck → build → commit (Conventional Commits) → push
→ open PR → address review → merge (squash) → delete branch
```

Run lint/typecheck/tests/build **locally** before pushing — don't make CI catch what you could've caught yourself.

**Done means:** All local checks pass, PR merged, ticket closed.

## 6. Coding Standards

- Keep logic layered: routes/UI → services → data access. Don't mix them.
- Follow SOLID/DRY/KISS, but don't over-engineer — simplest solution that works wins.
- Naming: `camelCase` for variables/functions, `PascalCase` for components/classes, `kebab-case` for files/routes, `snake_case` for DB columns.
- Comments explain **why**, not what — good naming should cover the "what."
- Validate all external input. Never build SQL with string concatenation. Never log secrets or PII.
- Handle errors properly — no empty `catch` blocks.
- Basic accessibility: labels on inputs, alt text on images, keyboard-navigable UI.

**Done means:** Passes lint/typecheck, no swallowed errors, no secrets in logs, inputs validated.

## 7. Version Control Standards

- Commit format: `type(scope): message` — e.g. `feat(auth): add password reset`.
  Types: `feat, fix, docs, style, refactor, perf, test, chore, ci`.
- Squash-merge feature branches; use a merge commit for release/hotfix branches.
- Never rewrite history on `main` or a shared branch.
- Tag releases with **SemVer**: `MAJOR.MINOR.PATCH` (breaking / new feature / bug fix).

**Done means:** Clean commit history, correctly tagged release.

## 8. Pull Request Protocol

- Use the PR template (description, linked ticket, how it was tested).
- At least 1 approval required (2 for auth/payments/security-sensitive code). No self-approval.
- Reviewer checks: matches the ticket, has tests, no security red flags, no secrets, style is consistent.
- Don't merge with failing CI or unresolved review comments — no exceptions "just this once."
- Keep feedback constructive; mark optional nits as `nit:` so authors know what's blocking vs. not.

**Done means:** Approved, CI green, comments resolved, merged, branch deleted.

## 9. CI/CD Standards

Every push runs the same pipeline:

```
push → install deps → lint → typecheck → unit tests → integration tests
→ security scan → dependency scan → coverage check → build
→ docker image → deploy to staging → smoke test
→ manual approval → deploy to production → monitor → rollback if needed
```

- All checks (lint, typecheck, tests, security scan, coverage) **must** pass before merge.
- Production deploys need a manual approval step — no auto-skip.
- Never bypass CI, even for "urgent" fixes.

**Done means:** Pipeline green, deployed, smoke-tested, monitored after deploy.

## 10. Release Management

- Releases are versioned (SemVer) and tagged in git.
- Changelog is generated from commit messages, cleaned up for humans, published with the release.
- **Hotfixes:** branch from production, fix, add a regression test, get reviewed, ship through the *same* pipeline — never skip CI because it's an emergency.
- Ship small and often — easier to review, easier to roll back.

**Done means:** Tagged, changelogged, deployed, team notified.

## 11. Production Operations

- Every service exposes health checks and logs in a structured (JSON) format.
- Alerts should be actionable — if nobody needs to act on it, it shouldn't page anyone.
- Every deploy must be quickly rollback-able (redeploy the previous image).
- DB migrations should be backward-compatible (add new stuff first, remove old stuff later) so a rollback never gets blocked by the database.
- Automate backups, and actually test restoring from them.
- Risky features ship behind a feature flag with a clear owner and cleanup plan.

**Done means:** Monitored, rollback tested, migrations safe, backups verified.

## 12. Documentation Standards

Keep these current, next to the code:
- `README.md` — setup, run, test, deploy instructions.
- API docs (OpenAPI or similar).
- Architecture + database docs (diagrams welcome).
- **ADRs** for big decisions — what we decided and why, one page each.
- **Runbooks** for anything on-call might need to fix at 2am.

Update docs in the *same PR* that changes the behavior they describe.

**Done means:** Docs match reality, updated alongside the code change.

## 13. Completion Checklist

**Feature done when:**
- [ ] Meets acceptance criteria
- [ ] Reviewed & approved
- [ ] Tests pass, coverage reasonable
- [ ] Lint/typecheck/build green
- [ ] Security & accessibility checked (if relevant)
- [ ] Docs updated
- [ ] Deployed, smoke-tested, monitored
- [ ] Ticket closed

**Release done when:**
- [ ] Versioned, tagged, changelogged
- [ ] Rollback plan confirmed
- [ ] Team notified

**Project done when:**
- [ ] All PRD requirements met or explicitly descoped
- [ ] Docs + runbooks complete
- [ ] Support/on-call handed off

---

## Quick-Reference Templates

**Commit message:** `feat(auth): add password reset flow`

**Branch name:** `feature/ENG-142-password-reset`

**PR description:**
```
## What & Why
## Linked ticket: ENG-XXX
## How tested
## Checklist: tests added / lint+build pass / docs updated
```

**ADR (one page):** Context → Decision → Consequences.

---

*This is the concise reference. Chapter details, full templates, and example CI configs live in the extended handbook (`ENGINEERING_HANDBOOK.md`) if you need the long version.*
