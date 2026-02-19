# Standard Operating Procedure (SOP)

## Title

**GitHub Copilot – Workspace Rules Configuration SOP**

## Purpose

This SOP defines how to configure **GitHub Copilot Workspace Rules** to ensure Copilot follows **enterprise coding standards, architecture guidelines, and secure coding practices**. It provides **ready-to-use examples** for:

- Angular projects
- Java Spring Boot projects

The goal is to guide Copilot to generate **consistent, secure, and policy-compliant code** across teams.

## Scope

- Enterprise development teams using GitHub Copilot
- IDE: Visual Studio Code
- Applies to frontend and backend projects

## Prerequisites

- GitHub Copilot and Copilot Chat enabled
- VS Code workspace opened
- Basic understanding of project architecture

---

## 1. What Are Workspace Rules?

Workspace Rules are **instructions provided to GitHub Copilot** that define:

- Coding standards
- Framework conventions
- Architecture constraints
- Security and compliance expectations

These rules act as **persistent context**, guiding Copilot responses across the entire workspace.

---

## 2. How to Configure Workspace Rules

### Step 1: Open Copilot Chat

- In VS Code, open **Copilot Chat**

### Step 2: Define Workspace Rules

Workspace rules are typically defined by:

- Adding a **Workspace Rules prompt**
- Maintaining a `COPILOT_RULES.md` or similar guideline file
- Reusing standardized prompts across the team

> Enterprise Recommendation: Maintain workspace rules in version control and review them periodically.

---

## 3. Standard Enterprise Workspace Rules Template

Use the following structure when defining rules:

```
@workspace Follow these rules strictly:
- Adhere to approved architecture patterns
- Use only approved libraries and frameworks
- Apply secure coding practices (OWASP)
- Follow project-specific naming conventions
- Generate testable and maintainable code
```

---

## 4. Angular Project – Workspace Rules Example

### Project Context

- Framework: Angular (Latest LTS)
- Architecture: Modular + Standalone Components
- Language: TypeScript

### Angular Workspace Rules

```
@workspace Workspace Rules for Angular Project:

- Use Angular standalone components where applicable
- Follow Angular Style Guide (official)
- Use Reactive Forms instead of Template-driven forms
- Apply OnPush change detection strategy
- Use RxJS best practices (no nested subscriptions)
- Enforce strict TypeScript typing (no any)
- Use Angular Services for business logic
- Use environment configuration for API URLs
- Follow enterprise security practices (XSS, CSRF)
- Generate unit tests using Jasmine and Karma
```

### Example Usage

```
@workspace /generate create a user registration module following Angular workspace rules
```

---

## 5. Java Spring Boot Project – Workspace Rules Example

### Project Context

- Framework: Spring Boot
- Architecture: Layered (Controller, Service, Repository)
- Language: Java

### Spring Boot Workspace Rules

```
@workspace Workspace Rules for Spring Boot Project:

- Follow layered architecture (Controller, Service, Repository)
- Use RESTful API design principles
- Apply SOLID principles
- Use Spring Data JPA for database access
- No business logic in controllers
- Use DTOs for API requests and responses
- Apply validation using javax/jakarta validation
- Handle exceptions using @ControllerAdvice
- Secure APIs using Spring Security
- Avoid hardcoded credentials or secrets
- Write unit tests using JUnit and Mockito
```

### Example Usage

```
@workspace /generate create a customer REST API following Spring Boot workspace rules
```

---

## 6. Security & Governance Controls

- Workspace rules must align with:
  - Enterprise secure coding standards
  - Approved technology stack
  - Compliance requirements

- Copilot output must always:
  - Go through code review
  - Be validated by SAST tools

---

## 7. Best Practices

- Keep workspace rules **clear and concise**
- Avoid conflicting or ambiguous instructions
- Review and update rules during major releases
- Share standardized rules across teams

---

## 8. Limitations

- Workspace rules guide but do not guarantee compliance
- Developers remain accountable for final code quality

---

## Conclusion

Well-defined workspace rules help GitHub Copilot act as an **enterprise-aware coding assistant**, producing consistent, secure, and maintainable code for Angular and Spring Boot projects.

---

**Document Version:** 1.0  
**Last Updated:** 2026
