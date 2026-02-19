# Standard Operating Procedure (SOP)

**Creating Issues and Tasks in GitLab – Including PMS Task ID in Title**

**Document ID**: GIT-SOP-ISSUE-CREATION-PMS-ID-001  
**Version**: 1.0  
**Effective Date**: February 2026  
**Owner**: Team Leads / Repository Owners  
**Target Audience**: Team Leads, Project Managers, Repository Owners who create issues/tasks in GitLab

## 1. Objective

Ensure that every issue and task created in GitLab is clearly traceable back to the corresponding task in the **Project Management System (PMS)**.

This SOP standardizes the practice of **prefixing the PMS Task ID** in the issue/task title when creating new items in GitLab. This helps:

- Maintain traceability between GitLab work items and PMS planning
- Make effort tracking, reporting, and auditing easier
- Avoid confusion when multiple systems are in use
- Support accurate productivity and time reporting
- Enable automation (dashboards, metrics, scripts) based on PMS IDs

## 2. Scope

Applies to:

- All **Team Leads** and **Repository Owners**
- All projects under active development
- All issue types: Feature, Bug, Task, Spike (performance issue), Refactor, Documentation, etc.
- Both **Issues** and **Tasks** (checklist items inside issues)

## 3. Responsibilities

| Role                             | Responsibility                                                            |
| -------------------------------- | ------------------------------------------------------------------------- |
| **Team Lead / Repository Owner** | Create issues/tasks in GitLab with correct PMS Task ID prefix             |
| **Developers**                   | Do **not** create new top-level issues/tasks (only work on existing ones) |
| **Project Manager / SPOC**       | Ensure PMS Task IDs are visible and correctly mapped                      |
| **All team members**             | Report any missing or incorrect PMS IDs during reviews                    |

## 4. Standard Format for Issue / Task Title

**Mandatory Rule**  
Every issue or task title **must start** with the PMS Task ID enclosed in square brackets, followed by a space, then the meaningful title.

**Format**:
#UJJ567893_0_234-XXXX Short and clear title of the work item

### Examples of Correct Titles

#UJJ567893_0_234-1423 Implement user login with OTP verification
#UJJ567893_0_234-1567 Fix checkout amount calculation when using discount code
#UJJ567893_0_234-1890 Create API documentation for payment endpoints
#UJJ567893_0_234-2014 Spike: Evaluate SQL Query for long running features

### Examples of Incorrect Titles (do NOT use)

Implement user login with OTP
Fix checkout bug
Create documentation
Spike - SQL Query evaluation
Refactor CAMSheet logic

## 5. Step-by-Step Procedure – Creating an Issue with PMS Task ID

### Step 1: Identify the PMS Task

- Open your Project Management System (PMS)
- Find the task you want to bring into development
- Copy the **Task ID** (e.g. `#UJJ567893_0_234-1423`, `#UJJ567893_0_234-5678`, `#UJJ567893_0_234-00987`, etc.)

### Step 2: Go to GitLab Project

- Open the relevant GitLab project
- Left sidebar → **Issues** → **New issue**

### Step 3: Fill in the Issue Details

| Field           | What to do / Recommended value                                                                                                     |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **Title**       | Start with `[UJJ567893_0_234-XXXX] ` followed by a clear, concise title                                                            |
| **Description** | Use the project issue template (if available)                                                                                      |
| **Assignee**    | Assign to the developer(s) who will work on it                                                                                     |
| **Labels**      | Add appropriate labels (e.g. `feature`, `bug`, `priority::high`, `team::backend`x, `A2D` # shortform of Agent Driven Development ) |
| **Milestone**   | Select the relevant sprint/release if applicable                                                                                   |
| **Due date**    | Optional – usually taken from PMS                                                                                                  |

**Recommended description structure** (add this at the top):

## Step 4: Create the Issue

Click Create issue
Verify the title starts with [UJJ567893_0_234-XXXX]

## 6. Verification & Enforcement

- Team Leads should review newly created issues daily
- Merge Request Approval process should include title format check
- Use GitLab Issue Templates to guide users with examples
- (Advanced) Use GitLab Push Rules or CI Lint to warn about missing PMS prefix (if automated checks are implemented)
