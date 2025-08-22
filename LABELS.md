# GitHub Labels for Chocoswap

This document defines the label system used for organizing issues and pull requests in the Chocoswap repository.

## Label Categories

### Type Labels
These labels categorize the type of work or issue:

- `type:bug` - Bug reports and fixes
- `type:feature` - New features and enhancements  
- `type:task` - Development tasks from roadmap
- `type:docs` - Documentation updates
- `type:test` - Testing-related work
- `type:ci` - CI/CD and automation
- `type:security` - Security-related issues
- `type:perf` - Performance improvements
- `type:devx` - Developer experience improvements
- `type:meta` - Repository maintenance and metadata
- `type:process` - Process and workflow improvements

### Area Labels
These labels indicate which part of the codebase is affected:

- `area:contracts` - Smart contract code
- `area:frontend` - Frontend application
- `area:amm` - AMM/DEX functionality
- `area:staking` - Staking and rewards
- `area:fees` - Fee collection and distribution
- `area:deploy` - Deployment and infrastructure
- `area:analytics` - Analytics and monitoring

### Priority Labels
These labels indicate the urgency/importance:

- `priority:critical` - Critical issues requiring immediate attention
- `priority:high` - High priority, should be addressed soon
- `priority:medium` - Medium priority, normal timeline
- `priority:low` - Low priority, can be addressed when convenient

### Status Labels
These labels track the current state:

- `status:blocked` - Work is blocked by dependencies
- `status:in-progress` - Work is currently being done
- `status:review` - Ready for code review
- `status:testing` - In testing phase
- `status:done` - Work completed

### Milestone Labels
These labels help organize work by milestone:

- `milestone:m0` - Repo hardening and CI
- `milestone:m1` - AMM integration
- `milestone:m2` - Staking pools
- `milestone:m3` - Frontend MVP
- `milestone:m4` - Testnet deployment
- `milestone:m5` - Security review
- `milestone:m6` - Beta launch

### Difficulty Labels
These labels help with task assignment:

- `difficulty:beginner` - Good for new contributors
- `difficulty:intermediate` - Requires some experience
- `difficulty:advanced` - Requires significant expertise

### Special Labels
These labels have special meanings:

- `good-first-issue` - Good for new contributors
- `help-wanted` - Extra attention is needed
- `question` - Further information is requested
- `wontfix` - This will not be worked on
- `duplicate` - This issue or pull request already exists
- `invalid` - This doesn't seem right

## Creating Labels

To create these labels in your GitHub repository, you can use the GitHub CLI:

```bash
# Type labels
gh label create "type:bug" --color "d73a4a" --description "Bug reports and fixes"
gh label create "type:feature" --color "0052cc" --description "New features and enhancements"
gh label create "type:task" --color "1d76db" --description "Development tasks from roadmap"
gh label create "type:docs" --color "0075ca" --description "Documentation updates"
gh label create "type:test" --color "0e8a16" --description "Testing-related work"
gh label create "type:ci" --color "5319e7" --description "CI/CD and automation"
gh label create "type:security" --color "b60205" --description "Security-related issues"
gh label create "type:perf" --color "fbca04" --description "Performance improvements"
gh label create "type:devx" --color "7057ff" --description "Developer experience improvements"
gh label create "type:meta" --color "e4e669" --description "Repository maintenance and metadata"
gh label create "type:process" --color "c2e0c6" --description "Process and workflow improvements"

# Area labels
gh label create "area:contracts" --color "0052cc" --description "Smart contract code"
gh label create "area:frontend" --color "1d76db" --description "Frontend application"
gh label create "area:amm" --color "0075ca" --description "AMM/DEX functionality"
gh label create "area:staking" --color "0e8a16" --description "Staking and rewards"
gh label create "area:fees" --color "fbca04" --description "Fee collection and distribution"
gh label create "area:deploy" --color "5319e7" --description "Deployment and infrastructure"
gh label create "area:analytics" --color "7057ff" --description "Analytics and monitoring"

# Priority labels
gh label create "priority:critical" --color "b60205" --description "Critical issues requiring immediate attention"
gh label create "priority:high" --color "d93f0b" --description "High priority, should be addressed soon"
gh label create "priority:medium" --color "fbca04" --description "Medium priority, normal timeline"
gh label create "priority:low" --color "0e8a16" --description "Low priority, can be addressed when convenient"

# Status labels
gh label create "status:blocked" --color "d73a4a" --description "Work is blocked by dependencies"
gh label create "status:in-progress" --color "fbca04" --description "Work is currently being done"
gh label create "status:review" --color "0052cc" --description "Ready for code review"
gh label create "status:testing" --color "1d76db" --description "In testing phase"
gh label create "status:done" --color "0e8a16" --description "Work completed"

# Milestone labels
gh label create "milestone:m0" --color "c2e0c6" --description "Repo hardening and CI"
gh label create "milestone:m1" --color "bfd4f2" --description "AMM integration"
gh label create "milestone:m2" --color "d4edda" --description "Staking pools"
gh label create "milestone:m3" --color "e2e3ff" --description "Frontend MVP"
gh label create "milestone:m4" --color "fff3cd" --description "Testnet deployment"
gh label create "milestone:m5" --color "f8d7da" --description "Security review"
gh label create "milestone:m6" --color "d1ecf1" --description "Beta launch"

# Difficulty labels
gh label create "difficulty:beginner" --color "7057ff" --description "Good for new contributors"
gh label create "difficulty:intermediate" --color "a2eeef" --description "Requires some experience"
gh label create "difficulty:advanced" --color "d876e3" --description "Requires significant expertise"
```

## Usage Guidelines

1. **Every issue should have a type label** (type:bug, type:feature, etc.)
2. **Add area labels** to indicate which part of the codebase is affected
3. **Use priority labels** to help with planning and triage
4. **Update status labels** as work progresses
5. **Link issues to milestones** using milestone labels
6. **Use difficulty labels** to help with task assignment

## Label Combinations

Common label combinations:

- `type:bug` + `priority:high` + `area:contracts` = Critical contract bug
- `type:feature` + `milestone:m3` + `area:frontend` = Frontend feature for M3
- `type:task` + `difficulty:beginner` + `good-first-issue` = Good first contribution
- `type:security` + `priority:critical` + `area:contracts` = Security vulnerability