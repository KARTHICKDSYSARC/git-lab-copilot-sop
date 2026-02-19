# Standard Operating Procedure (SOP)

**Basic Git Operations for Developers – Daily Workflow**

**Document ID**: GIT-SOP-DEVELOPER-DAILY-GIT-001  
**Version**: 1.0  
**Effective Date**: February 2026  
**Owner**: Development Team  
**Target Audience**: All developers (especially onboarding / junior team members)

## 1. Purpose

This document describes the standard, safe, and team-consistent way of using Git + GitLab on a daily basis.

Main goals:

- Help new team members adopt the GIT workflow quickly
- Keep protected branches (`main`, `develop`, `release` branches) clean
- Enable smooth code reviews and fast merges
- Reduce merge conflicts and broken builds
- Make sure work is visible and backed up regularly

## 2. Core Rules

## 2.1 Developers Must Follow

```bash

1. **Never push directly** to `main`, `master`, `develop` or any protected branch
2.  Always create a **feature/topic branch** for every piece of work

**Branch name convention (strongly recommended):**

#{issue-number}-{short-kebab-case-description}

Examples:

- #214-reset-password-flow
- #219-bugfix-cart-total-miscalculation
- #225-spike-supabase-vs-firebase-auth


3. Use **small, focused commits** with meaningful messages.should not exceed 10 files changed per commit
4. **Push at least once per day** (your work is then backed up)
5. Create Merge Requests **early** — even if the work is incomplete (mark as Draft)
6. Regularly bring in latest changes from `main`
7. Delete branches after they are merged (both local and remote)
```

## 2.2 Managers Must Follow

```bash

1.  Always create a **feature/topic branch** for every piece of work.

2.  Branch name convention (strongly recommended)

#{issue-number}-{short-kebab-case-description}
**issue number can be PMS PI Task ID**

Examples:

- #UJJLES252009_0_322-reset-password-flow
- #UJJLES252009_0_323-bugfix-cart-total-miscalculation
- #UJJLES252009_0_324-spike-supabase-vs-firebase-auth

3. Create Merge Requests **early** — even if the work is incomplete (mark as Draft)
4. Don't Delete branches after they are merged (both local and remote) – Managers should keep branches for future reference.
```

## 3. One-time Machine Setup (run once)

```bash
# Set your identity (must match your GitLab profile)
git config --global user.name  "Your Full Name"
git config --global user.email "your.email@company.com"

# Very useful short aliases
git config --global alias.st  "status -sb"
git config --global alias.br  "branch --show-current"
git config --global alias.co  "checkout"
git config --global alias.ci  "commit"
git config --global alias.lg  "log --oneline --graph --decorate --all"
git config --global alias.ps  "push"

```

## 4. Daily Workflow – Step by Step

4.1 Morning / Start of work

```Bash
# clone the repo (first time only)
git clone git@github.com:your-org/your-repo.git

# checkout the branch created your task / issue
git checkout UJJLES252009_0_322-task-branch
# or

#  Get latest changes from remote
git fetch  UJJLES252009_0_322-task-branch
git pull  UJJLES252009_0_322-task-branch

```

## 4.3 Normal development cycle (repeat many times)

```bash

# Check status
git st

# Stage changes (small groups = better)
git add src/auth/
git add tests/reset-password.test.ts
# or everything (when you're confident)
git add .

# Commit (clear, present tense)
git commit -m "feat : 214 implement reset password form + client validation"
# for commit message convention - refer to [section 6](### 6. Git Commit Message Conventions)

# Push (do this frequently — at least once per day)
git push
# First push of new branch:
# git push --set-upstream origin 214-reset-password-flow


```

## 4.4 Create / update Merge Request

- Go to your branch in GitLab UI
- Click Create merge request
- Add #214 in title / description / closes keyword
- Mark as Draft if not finished
- Developers Assign yourself + add your Team Lead or Designated Team Member as reviewers

## 4.5 Keep branch up-to-date with project-main-branch

```bash

# Do this daily or before asking for review
git fetch
git checkout project-main-branch
git pull origin project-main-branch

git checkout UJJLES252009_0_323-reset-password-flow


# Alternative: merge commit style
# git merge origin/project-main-branch


```

## 4.6 Stashing Guidelines – When and How to Use git stash

```
- Stashing is a temporary "save my current uncommitted work" mechanism.
- Use it only when you really need to switch branch quickly and don't want to commit half-done work yet.

**When to use stash (good cases)**

- You are in the middle of unfinished changes
- You need to urgently switch to another branch (urgent bugfix, code review, pull latest project-main-branch, help colleague)
- You want to quickly try something experimental without polluting current branch and doing temporary commit

**When NOT to use stash**

- Your changes are logically complete → `commit instead`
- You plan to keep working on them for hours/days → commit to a feature branch
- You are doing routine work → better to commit small steps

```

## Recommended stash commands & patterns

| Action                                         | Command                                          | When to use / Notes                                     |
| ---------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------- |
| Save current changes (including untracked)     | `git stash push -u`<br>`git stash -u`            | Most common – -u includes new/untracked files           |
| Save with a descriptive message                | `git stash push -m "WIP: login form validation"` | Very helpful – you'll see the message in git stash list |
| See list of stashes                            | `git stash list`                                 | Shows all saved stashes with index and message          |
| Apply latest stash (but keep it in stash list) | `git stash apply`                                | Safe – doesn't remove the stash                         |
| Apply latest stash & remove it                 | `git stash pop`                                  | Most common after you're ready to continue              |
| Apply specific stash                           | `git stash apply stash@{2}`                      | Use index from git stash list                           |
| Delete a stash                                 | `git stash drop stash@{1}`                       | Clean up old/unneeded stashes                           |
| Delete all stashes                             | `git stash clear`                                | Careful – irreversible                                  |
| Show what's in a stash                         | `git stash show -p stash@{0}`                    | See diff of what was stashed                            |

## Recommended daily stash workflow

```bash
# Situation: midway through work, need to switch branches urgently
git stash push -u -m "WIP: payment gateway integration - incomplete tests"

# Later – back to your branch
git checkout payment-gateway-integration
git stash pop

# If conflict after pop → resolve normally, then commit
Golden rule for stashing
→ Prefer committing small steps on a feature branch over stashing whenever possible.
Stash is a short-term emergency tool, not a task management system.

```

## 5. CONFLICT-RESOLUTION

## 5.1. Objective

This SOP teaches you how to resolve **merge conflicts** in Git when updating your feature branch with changes from the project-main-branch branch (like `project-main-branch` or `master`).

Conflicts happen when Git can't automatically combine changes from two branches. You'll learn to spot them, fix them manually, and continue your work safely.

By following this, you'll avoid losing code, reduce frustration, and keep the team workflow smooth.

## 5.2. When Do Conflicts Happen?

Conflicts occur during:

- `git pull` (which does fetch + merge)
- `git merge project-main-branch` (bringing project-main-branch into your branch)

**Why?** Two people changed the **same line(s)** in the **same file** differently. Git needs your help to decide which version to keep.

**Signs of conflict**:

- Git stops and says: "CONFLICT (content): Merge conflict in file.txt"
- Your command (merge/rebase) doesn't finish
- Files have special markers like `<<<<<<< HEAD`

**Pro tip**: Update your branch from project-main-branch **daily** to reduce conflicts. Small, frequent updates = fewer big conflicts.

## 5.3. Prerequisites

- You know basic Git: commit, add, status, branch, push
- You're on your feature branch (e.g., `214-reset-password-flow`)
- You've tried to update: `git merge origin/UJJ-USED-CARLOAN-DEV`
- Git reported conflicts

## 5.4. Step-by-Step Resolution Process

### Step 1: Stay Calm and Check Status

```bash
git status

```

- This shows "Unmerged paths" or "both modified" files
- List of conflicted files (e.g., src/auth/reset.js)
- Don't panic – your original code is safe!

### Step 2: Open the Conflicted File(s)

Use your code editor (VS Code, eclipse etc ) to open each conflicted file from Step 1.
Inside, Git adds markers:

```text

# <<<<<<< HEAD
# Your code on current branch (e.g., your changes)
# =======
# Code from the other branch (e.g., project-main-branch's changes)
# >>>>>>> project-main-branch

```

```text
<<<<<<< HEAD: Start of YOUR changes
=======: Separator
>>>>>>> project-main-branch: End of OTHER changes

```

## Example conflicted file (hello.txt):

```text
Hello from
<<<<<<< HEAD
my feature branch! I added this line.
=======
the project-main-branch branch! Someone else updated this.
>>>>>>> project-main-branch
Have a nice day.
```

### Step 3: Decide and Edit the File

- Read both sides carefully
  Choose what to keep:
- Your version only? Delete the other side + markers
- Their version only? Delete your side + markers
- Combine both? Edit to merge them logically

For our example, let's combine:

```text
Hello from
my feature branch! I added this line. And the project-main-branch branch! Someone else updated this too.
Have a nice day.
```

- Remove ALL markers (<<<<<<<, =======, >>>>>>>)
- Save the file

## Step 4: Stage the Resolved File

Tell Git: "I fixed this file!"

```bash
git add hello.txt   # Replace with your file name
```

- Do this for EVERY conflicted file
- Run git status again – conflicted files should move to "Changes to be committed"

## Step 5: Continue the Operation

- If you were merging:Bash

```bash
git commit -m "Resolve merge conflicts from project-main-branch"
```

- Git will finish the update

## Step 6: Verify and Push

- Test your code (run app, tests)
- git status should be clean
- Push:

```bash
git push   # Or git push --force-with-lease if rebasing
```

- If in a Merge Request, GitLab will show "Conflicts resolved"

## Simple Example – Let's Walk Through It

**Imagine:**

- You're on branch 214-add-greeting
- File: greeting.txt (your version: "Hello, World!")
- Someone merged to project-main-branch: changed to "Hello, Team!"

You run:

```bash

git fetch origin       # get latest project-main-branch
git merge origin/project-main-branch  # try to merge

```

Git says: CONFLICT in greeting.txt

**Your actions:**

1. git status → shows greeting.txt conflicted
2. Open greeting.txt:

```text
<<<<<<< HEAD
Hello, World!
=======
Hello, Team!
>>>>>>> project-main-branch
```

3. Edit to combine:

```text

Hello, World and Team!

```

Save (no markers left).

4. git add greeting.txt
5. git commit -m "Resolve merge conflict in greeting.txt"
6. Test, then git push

Done! Your branch is updated, no conflicts.

## 6. What If Things Go Wrong?

- Abort and start over:

```bash
git merge --abort   # if merging

```

## 7. Best Practices to Avoid Conflicts

- Pull from project-main-branch **daily**
- Communicate with teammates about big changes
- Keep changes small and focused
- Review conflicts carefully before resolving

## 5. Quick Command Cheat Sheet

| Action                                             | Command / Alias                                 | Notes / When to use                              |
| -------------------------------------------------- | ----------------------------------------------- | ------------------------------------------------ |
| Show current branch name                           | `git br` <br>or `git branch --show-current`     | Very frequent – add alias if not set             |
| Short / compact status                             | `git st`                                        | Better than plain `git status`                   |
| Stage all changes in working directory             | `git add .`                                     | Use when you're sure about all changes           |
| Stage specific files/folders                       | `git add src/components/`                       | Preferred for clean, focused commits             |
| Commit all tracked (modified) files                | `git commit -am "message"`                      | Quick for small fixes – skips `git add`          |
| Commit staged changes                              | `git commit -m "214 add reset form validation"` | Standard – write clear messages                  |
| Push current branch to remote                      | `git push` <br>or `git ps`                      | Do this often (at least daily)                   |
| Set upstream on first push                         | `git push --set-upstream origin <branch>`       | Only needed the very first time                  |
| Update project-main-branch / master from remote    | `git checkout project-main-branch && git up`    | Always do this before starting new work          |
| Fetch latest remote changes                        | `git fetch origin`                              | Safe – doesn't change local files                |
| Merge project-main-branch into your feature branch | `git merge origin/project-main-branch`          | Alternative if rebase is not desired             |
| View pretty commit history                         | `git lg`                                        | Graph view – very helpful for understanding flow |
| Discard all uncommitted changes                    | `git restore .` <br>or `git reset --hard`       | **Careful** – irreversible without stash         |

## 6. Git Commit Message Conventions

## 1. Purpose

Consistent, high-quality commit messages help:

- Understand **what** changed and **why** without opening the code
- Make `git log`, `git blame`, and release notes readable
- Support automatic generation of changelogs
- Improve code review speed and quality
- Make debugging and reverting changes much easier
- Enable tools like Conventional Commits, semantic-release, git-chglog, etc.

## 2. Recommended Commit Message Format

We follow a slightly simplified version of **Conventional Commits**[](https://www.conventionalcommits.org)

### 2.1 Type (mandatory – lowercase)

| Type       | Meaning                                                       | When to use                                   | Appears in changelog? |
| ---------- | ------------------------------------------------------------- | --------------------------------------------- | --------------------- |
| `feat`     | New feature / user-visible capability                         | Adding new functionality                      | **Yes** – Features    |
| `fix`      | Bug fix                                                       | Correcting broken behavior                    | **Yes** – Fixes       |
| `refactor` | Code change that neither fixes a bug nor adds a feature       | Improving structure, readability, performance | No                    |
| `docs`     | Documentation only changes                                    | README, API docs, comments                    | No (or Docs section)  |
| `style`    | Changes that do not affect the meaning of the code            | Formatting, missing semicolons, lint fixes    | No                    |
| `test`     | Adding or correcting tests                                    | Unit/integration/E2E tests                    | No                    |
| `chore`    | Maintenance tasks, tooling, build system, dependencies        | Bump version, update deps, CI config          | No                    |
| `perf`     | Performance improvement                                       | Optimization without functional change        | Yes – Improvements    |
| `ci`       | Changes to CI/CD configuration or scripts                     | GitLab CI, GitHub Actions, etc.               | No                    |
| `build`    | Changes that affect the build system or external dependencies | webpack, npm, dockerfile                      | No                    |
| `revert`   | Reverts a previous commit                                     | `revert "feat: …"`                            | Yes                   |

### 2.2 Scope (optional – lowercase)

The part of the codebase affected (module, component, package, directory, …)

Examples:

- `auth`
- `cart`
- `ui/button`
- `api`
- `mobile`
- `admin`

If no clear scope → omit it.

### 2.3 Short description (mandatory)

- Max **72 characters** (ideally 50–60)
- **Imperative mood** — “Add”, “Fix”, “Update”, not “Added”, “Fixed”
- **No period** at the end
- Start with lowercase (unless proper noun)
- Include issue/ticket number when relevant: `#214`

Good examples:

- feat(auth): add password reset flow
- fix(cart): prevent NaN in total when coupon removed
- refactor: convert class components to functional in profile page
- docs(readme): update installation prerequisites
- test(user): add integration tests for login edge cases

Bad examples:

- fixed bug
- update some stuff
- refactored a lot of code

## 4. Recommended Git Commit Workflow

```bash
# Interactive / multi-line commit (recommended)
git commit

# Quick single-line (only when very simple)
git commit -m "fix: correct typo in button label"

# Amend last commit (very common)
git commit --amend

```

## 7. Important Safety Rules

- Never git push --force on shared/protected branches
- Use --force-with-lease when you must rewrite history on your own branch
- Never commit secrets, large binaries, or node_modules
- Link issues in commits / MRs: Closes #214, Fixes #219
- Mark MR Draft until it's ready for real review

```


```
