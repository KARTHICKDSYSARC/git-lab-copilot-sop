# Standard Operating Procedure (SOP)

**GitLab Merge Request Approval Rules Configuration**

**Document ID**: GIT-SOP-MR-APPROVAL-001  
**Version**: 1.0  
**Effective Date**: February 2026  
**Owner**: Development / DevOps Team  
**Tier Requirement**: GitLab Premium or Ultimate (most advanced rule features)

## 1. Objective

Define and enforce a structured code review process by configuring **Merge Request Approval Rules** in GitLab.

The goal is to:

- Ensure code quality and security through mandatory peer review
- Prevent developers from merging their own changes without review (self-merge prevention)
- Allow fine-grained control over who can approve changes
- Combine with branch protection to create a secure merge workflow

## 2. Scope

Applies to all projects containing production or customer-facing code.  
Recommended for **all protected branches** (especially `main` / `master` / `release/*`).

## 3. Prerequisites

- GitLab **Premium** or **Ultimate** tier (required for advanced approval rules)
- Project role: **Maintainer** or **Owner**
- Branch already protected (see SOP GIT-SOP-BRANCH-PROTECT-001)
- Team members assigned appropriate roles (Developer, Maintainer, etc.)

## 4. Recommended Approval Rule Patterns (2026 Best Practices)

| Scenario                           | Approvals Required | Eligible Approvers           | Rule Type | Use Case                        |
| ---------------------------------- | ------------------ | ---------------------------- | --------- | ------------------------------- |
| Standard team project              | 1–2                | Maintainers                  | Required  | Most internal projects          |
| Critical / security-sensitive code | 2                  | Maintainers + Security team  | Required  | Authentication, payments, infra |
| Any code touching business logic   | 1                  | Code Owners (via CODEOWNERS) | Required  | Enforce domain expertise        |
| Junior developers' changes         | 2                  | Any Maintainer               | Required  | Mentoring & quality gate        |
| Documentation / non-code changes   | 0 or 1             | Maintainers or Tech Writers  | Optional  | Lower risk areas                |

## 5. Step-by-Step Configuration Procedure

### 5.1 Access Approval Rules Settings

1. Open your GitLab project
2. Left sidebar → **Settings** → **Merge requests**
3. Scroll to section **Merge request approvals** → **Approval rules**

### 5.2 Create / Edit Approval Rules

1. Click **Add approval rule** (or edit existing rule)
2. Fill in the fields:

   | Field                      | Recommended Setting                   | Notes                            |
   | -------------------------- | ------------------------------------- | -------------------------------- |
   | **Rule name**              | e.g. "Maintainer Review"              | Clear, descriptive name          |
   | **Approvals required**     | 1 or 2                                | 0 = optional rule                |
   | **Add approvers**          | Select users and/or groups            | Search for individuals or groups |
   | **Add eligible approvers** | Usually Maintainers or specific group | Who can satisfy this rule        |
   | **Apply to**               | All protected branches (default)      | Or select specific branches      |

3. Optional advanced settings (Premium/Ultimate):
   - **Code owners as approvers** → Enable if using `CODEOWNERS` file
   - **Prevent approval by author** → **Strongly recommended** (prevents self-approval)
   - **Prevent approvals by users who add commits** → Enable (rescinds approvals on new commits)
   - **Remove approvals by Code Owners if their files changed** → Enable

4. Click **Add approval rule** or **Update approval rule**

### 5.3 Combine with Protected Branch

To enforce the rule:

1. Go to **Settings → Repository → Protected branches**
2. Edit the protected branch (e.g. `main`)
3. Ensure **Allowed to merge** = Maintainers (or Owners)
4. The approval rules defined above will now be enforced before merge is allowed

## 6. Common Configuration Examples

### Example 1: Basic team – 1 approval + no self-merge

- Rule name: Team Review
- Approvals required: 1
- Eligible approvers: Project Maintainers group
- Prevent approval by author: Yes
- Prevent approvals by committers: Yes

### Example 2: High-security branch

- Rule name: Security Review (main)
- Approvals required: 2
- Eligible approvers: Maintainers + Security-approvers group
- Code owners required: Yes (if applicable)
- Applies to: protected branch `main`

## 7. Additional Recommended Settings (Merge request approvals section)

| Setting                                          | Recommended Value | Rationale                      |
| ------------------------------------------------ | ----------------- | ------------------------------ |
| Prevent editing approval rules in merge requests | Enabled (lock)    | Prevents bypassing in MR       |
| Remove approvals by Code Owners if files changed | Enabled           | Security & correctness         |
| Prevent approval by author                       | Enabled           | Avoid self-merge               |
| Approvals required (legacy field)                | Do not use        | Deprecated – use rules instead |

## 8. Verification Steps

After configuration:

1. Create a test merge request targeting a protected branch
2. As a Developer → Try to merge → Should be blocked
3. As Maintainer → Approve the MR → Merge button should become enabled (if other checks pass)
4. Check the **Approval** widget in the merge request view

## 9. Maintenance & Review

- Review approval rules **every 6 months** or after major team/role changes
- Document exceptions in the project README or Wiki
- Train new team members on the approval workflow

## 10. Related SOPs

- GIT-SOP-BRANCH-PROTECT-001 – Branch Protection Policy
- GIT-SOP-CODEOWNERS-001 – Code Owners Configuration (recommended companion)
- GIT-SOP-MR-TEMPLATES-001 – Merge Request Templates

**End of Document**
