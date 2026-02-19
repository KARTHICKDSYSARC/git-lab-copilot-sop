# Standard Operating Procedure (SOP)

**GitLab Branch Protection Rules Configuration**

**Document ID**: GIT-SOP-BRANCH-PROTECT-002  
**Version**: 1.0  
**Effective Date**: February 2026  
**Owner**: Development / DevOps Team  
**Tier Requirement**: Available in GitLab Free tier (some advanced options Premium/Ultimate)

## 1. Objective

Protect critical branches (e.g., `main`, `master`, `develop`, release branches) to enforce a secure and controlled development workflow:

- Prevent direct pushes to protected branches by Developers and lower roles
- Require Merge Requests (MRs) for all changes
- Restrict who can merge into protected branches (typically Maintainers / Owners only)
- Prevent force pushes and other risky operations
- Optionally enforce code owner approvals and other quality gates

This SOP ensures code quality, auditability, and prevents accidental or unauthorized changes to production-relevant branches.

## 2. Scope

Applies to:

- All production / main branches
- Release branches (`release/*`, `hotfix/*`)
- Long-lived integration branches (`develop`, `staging`)
- Any branch containing customer-facing or business-critical code

## 3. Prerequisites

- Project role: **Maintainer** or **Owner**
- GitLab project where branch protection is needed
- (Recommended) Merge Request Approval Rules already configured (see GIT-SOP-MR-APPROVAL-001)

## 4. Recommended Protection Settings (2026 Best Practice)

| Setting                                | Recommended Value                      | Rationale / Impact                          |
| -------------------------------------- | -------------------------------------- | ------------------------------------------- |
| **Branch**                             | `main` or `master` (exact or wildcard) | Core production branch                      |
| **Allowed to merge**                   | **Maintainers**                        | Only Maintainers/Owners can complete merges |
| **Allowed to push**                    | **No one**                             | Prevents direct commits/pushes              |
| **Allowed to push & merge** (older UI) | **Maintainers** (if shown)             | Legacy field – prefer separate settings     |
| **Require merge request**              | Enabled                                | Forces MR workflow                          |
| **Prevent force push**                 | Enabled                                | Blocks history rewrites                     |
| **Code owner approval**                | Enabled (if using CODEOWNERS)          | Enforces domain experts review              |
| **Allow force push for**               | No one (or very restricted)            | High security                               |

## 5. Step-by-Step Configuration Procedure

### 5.1 Navigate to Protected Branches

1. Open your GitLab project
2. Left sidebar → **Settings** → **Repository**
3. Expand the **Protected branches** section (or **Branch rules** in newer layouts)

### 5.2 Protect a New Branch / Edit Existing Rule

1. Click **Protect branch** / **Add protected branch** / **New branch rule**
2. In the **Branch** field, enter:
   - Exact name: `main`
   - Wildcard: `release/*`, `hotfix/*`, `v*.*.*`
   - All branches: `*` (use with caution)

3. Configure the protection settings:

   | Field                      | Recommended Selection          | Notes                                        |
   | -------------------------- | ------------------------------ | -------------------------------------------- |
   | **Allowed to merge**       | **Maintainers**                | Key setting – blocks Developers from merging |
   | **Allowed to push**        | **No one**                     | Prevents direct pushes by anyone             |
   | **Allowed to force push**  | **No one**                     | Prevents git push --force                    |
   | **Require merge requests** | Checked                        | Enforces MRs even if someone has push rights |
   | **Code owner approval**    | Checked (if CODEOWNERS exists) | Premium/Ultimate feature                     |
   | **Prevent approval edits** | (if shown) Checked             | Lock approval rules on MR                    |

4. Click **Protect** / **Create protected branch** / **Save changes**

## 6. Common Configuration Examples

### Example 1: Standard main branch protection

- Branch: `main`
- Allowed to merge: Maintainers
- Allowed to push: No one
- Require merge request: Yes
- Prevent force push: Yes

### Example 2: Release branch family

- Branch: `release/*`
- Allowed to merge: Maintainers + Release Managers group
- Allowed to push: No one
- Require merge request: Yes
- Code owner approval: Yes

## 7. Additional Recommended Repository Settings

| Setting                             | Recommended Value                             | Location                           |
| ----------------------------------- | --------------------------------------------- | ---------------------------------- |
| **Push rules**                      | Enable commit signing, branch name validation | Settings → Repository → Push rules |
| **Merge method**                    | Merge commit / Rebase (team preference)       | Settings → Merge requests          |
| **Delete source branch by default** | Enabled                                       | Settings → Merge requests          |

## 8. Verification Steps

1. As a **Developer** user:
   - Try to push directly to protected branch → Should be rejected
   - Create MR to protected branch → Can create, but cannot merge

2. As a **Maintainer**:
   - Create MR → Can approve and merge (if approvals satisfied)

3. Check the **Protected branches** list – verify the rule is active
4. View an open MR to a protected branch – approval widget and merge button behavior should reflect rules

## 9. Maintenance & Review

- Review protection rules **every 6–12 months** or after team structure changes
- Document any intentional exceptions (e.g., temporary unprotection) in project Wiki
- Train team members during onboarding about protected branch workflow

## 10. Related SOPs

- GIT-SOP-MR-APPROVAL-001 – Merge Request Approval Rules
- GIT-SOP-CODEOWNERS-001 – Configuring CODEOWNERS File
- GIT-SOP-GIT-WORKFLOW-001 – Recommended Git Branching Strategy

**End of Document**
