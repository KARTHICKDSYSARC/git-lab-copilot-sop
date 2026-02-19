# Standard Operating Procedure (SOP)

## Title

**GitHub Copilot – Workspace Participants & @workspace Slash Commands SOP**

## Purpose

This SOP explains how **workspace participants** use GitHub Copilot Chat with **@workspace** context and common **slash commands**. It provides clear explanations and **practical examples** so beginners can quickly collaborate, understand codebases, and perform workspace-level actions using Copilot.

## Scope

- Developers, reviewers, and team members using GitHub Copilot Chat
- IDE: Visual Studio Code
- Focus: **Workspace-aware Copilot usage**

## Prerequisites

- GitHub Copilot and Copilot Chat enabled
- VS Code workspace or project opened
- User signed in with a valid GitHub account

---

## 1. Workspace Participants – Roles & Usage

### Who Are Workspace Participants?

Workspace participants are users who collaborate within the same VS Code workspace or repository and use Copilot Chat with shared project context.

### Typical Participants

- **Developers** – Write and modify code using Copilot suggestions
- **Reviewers / Tech Leads** – Understand, review, and optimize code

### What @workspace Means

Using `@workspace` tells Copilot to:

- Scan the **entire opened project**
- Understand file structure, symbols, and dependencies
- Provide answers based on **project-wide context**, not just one file

---

## 2. How to Use @workspace in Copilot Chat

### Steps

1. Open **Copilot Chat** in VS Code
2. Type `@workspace` followed by a slash command or question
3. Copilot analyzes the whole workspace before responding

### Example

```
@workspace explain the architecture of this project
```

---

## 3. Common @workspace Slash Commands with Examples

### 3.1 `/explain`

**Purpose:** Understand files, modules, or entire project structure

**How to Use:**

```
@workspace /explain
```

**Example:**

```
@workspace /explain how authentication works in this project
```

---

### 3.2 `/summarize`

**Purpose:** Get a high-level summary of the workspace or specific areas

**How to Use:**

```
@workspace /summarize
```

**Example:**

```
@workspace /summarize backend services and their responsibilities
```

---

### 3.3 `/search`

**Purpose:** Find where specific logic, functions, or patterns exist

**How to Use:**

```
@workspace /search <keyword>
```

**Example:**

```
@workspace /search user validation logic
```

---

### 3.4 `/fix`

**Purpose:** Identify and suggest fixes for issues across the workspace

**How to Use:**

```
@workspace /fix
```

**Example:**

```
@workspace /fix potential null pointer issues in the project
```

---

### 3.5 `/optimize`

**Purpose:** Improve performance, readability, or structure

**How to Use:**

```
@workspace /optimize
```

**Example:**

```
@workspace /optimize database access patterns
```

---

### 3.6 `/test`

**Purpose:** Generate or suggest tests based on existing code

**How to Use:**

```
@workspace /test
```

**Example:**

```
@workspace /test critical business logic modules
```

---

### 3.7 `/doc`

**Purpose:** Generate or improve documentation and comments

**How to Use:**

```
@workspace /doc
```

**Example:**

```
@workspace /doc generate README documentation for this project
```

---

### 3.8 `/refactor`

**Purpose:** Suggest structural or design improvements

**How to Use:**

```
@workspace /refactor
```

**Example:**

```
@workspace /refactor services to follow clean architecture
```

---

## 4. Best Practices for Workspace Participants

- Be **specific** in questions for accurate results
- Use `/search` before asking where logic exists
- Review all generated fixes and refactors manually
- Avoid sharing secrets or credentials in chat
- Combine @workspace with file-level context when needed

---

## 5. Limitations

- Copilot may not fully understand very large or legacy codebases
- Suggestions depend on workspace indexing completeness
- Generated changes require developer validation

---

## Conclusion

Using **@workspace** with slash commands enables Copilot to act as a powerful project-aware assistant. Workspace participants can quickly understand, search, fix, optimize, and document codebases, improving collaboration and productivity.

---

**Document Version:** 1.0  
**Last Updated:** 2026
