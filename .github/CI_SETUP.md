# CI Setup and Branch Protection

This repository includes GitHub Actions workflows for continuous integration.

## Workflows

### Contracts CI (`.github/workflows/contracts.yml`)
- **Triggers**: Push to main, PRs to main
- **Jobs**: Lint, format check, build, test, coverage
- **Node versions**: 18.x, 20.x
- **Coverage**: Uploads to Codecov

### Frontend CI (`.github/workflows/frontend.yml`)
- **Triggers**: Push/PR to main with frontend changes
- **Condition**: Only runs if `frontend/package.json` exists
- **Jobs**: Lint, type check, build, test

## Branch Protection (Recommended)

To enforce CI checks before merging, configure branch protection for `main`:

1. Go to Settings → Branches
2. Add rule for `main` branch
3. Enable:
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
   - ✅ Status checks: `lint-and-test`
   - ✅ Restrict pushes that create files larger than 100MB

## Status Badges

The README includes status badges that show the current build status:
- [![Contracts CI](https://github.com/acaradonna/chocoswap/workflows/Contracts%20CI/badge.svg)](https://github.com/acaradonna/chocoswap/actions/workflows/contracts.yml)
- [![Frontend CI](https://github.com/acaradonna/chocoswap/workflows/Frontend%20CI/badge.svg)](https://github.com/acaradonna/chocoswap/actions/workflows/frontend.yml)