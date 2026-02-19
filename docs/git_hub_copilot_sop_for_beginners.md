# Standard Operating Procedure (SOP)

## Title

**GitHub Copilot – Beginner Quick Start SOP**

## Purpose

This SOP provides a **quick, practical walkthrough** of GitHub Copilot for beginners. It explains how to set up GitHub Copilot in VS Code, configure your account, navigate key menus, and understand core features so developers can start using Copilot productively within minutes.

## Scope

- Applicable to developers, testers, and technical users
- IDE covered: **Visual Studio Code (VS Code)**
- Skill level: **Beginner**

## Prerequisites

- Laptop/Desktop with internet access
- Visual Studio Code installed
- GitHub Business account

---

## 1. Setting Up GitHub Copilot in VS Code

### Step 1: Install Visual Studio Code

1. Download VS Code from the official website
2. Install and launch VS Code

### Step 2: Install GitHub Copilot Extension

1. Open **VS Code**
2. Click on **Extensions** icon (left sidebar) or press `Ctrl + Shift + X`
3. Search for **GitHub Copilot**
4. Click **Install**

> Optional but recommended:

- Install **GitHub Copilot Chat** extension for conversational AI support

### Step 3: Restart VS Code

After installation, restart VS Code to ensure the extension loads properly.

---

## 2. Setting Up GitHub Copilot Account

### Step 1: Sign In to GitHub

1. get the account from the IT department
2. Sign in using your GitHub credentials provided by your organization

### Step 2: Authenticate Copilot in VS Code

1. Open VS Code
2. When prompted, click **Sign in to GitHub**
3. Authorize VS Code to access your GitHub account
4. Successful sign-in enables Copilot automatically

---

## 3. Navigating GitHub Copilot in VS Code

### Copilot Status Indicator

- Located at the **bottom-right status bar**
- Shows whether Copilot is:
  - Enabled
  - Disabled
  - Signed in

### Command Palette Options

1. Press `Ctrl + Shift + P`
2. Search for **Copilot**
3. Available commands include:
   - Enable / Disable Copilot
   - Open Copilot Chat
   - View Copilot settings

### Copilot Chat Panel (If Installed)

- Access from the **Activity Bar** or via `Ctrl + Shift + I`
- Used for:
  - Asking coding questions
  - Explaining code
  - Generating functions or files

### Settings Navigation

1. Open **File → Preferences → Settings**
2. Search for **Copilot**
3. Configure:
   - Enable/disable suggestions
   - Language-specific settings
   - Inline suggestion behavior

---

## 4. GitHub Copilot Features Overview

### 4.1 Code Autocompletion

- Suggests code as you type
- Works with:
  - Functions
  - Loops
  - Conditions
  - Classes
- Accept suggestion: `Tab`
- Reject suggestion: `Esc`

### 4.2 Natural Language to Code

- Write comments like:
  ```
  // function to calculate simple interest
  ```
- Copilot generates the implementation automatically

### 4.3 Copilot Chat

- Ask questions such as:
  - "Explain this function"
  - "Optimize this SQL query"

### 4.4 Multi-Line & Whole Function Suggestions

- Generates entire functions or blocks
- Useful for:
  - APIs
  - Data models
  - Utility methods

### 4.5 Context-Aware Suggestions

- Understands:
  - Existing project files
  - Naming conventions
  - Code structure

## Best Practices for Beginners

- Always **review Copilot-generated code**
- Use meaningful comments to get better suggestions
- Do not blindly accept security-sensitive code
- Combine Copilot with code reviews and testing

## The 3S Principles

The `3S prompt` principle for GitHub Copilot is a prompt engineering framework that emphasizes making prompts Simple, Specific, and Short. Following this approach helps guide the AI to generate more relevant, accurate, and high-quality code suggestions and responses.

- **Simple**: Break down complex tasks into smaller, manageable steps. Avoid trying to get Copilot to do everything in a single, overly complicated request. By keeping the task simple, you reduce the chance of the AI generating errors or "hallucinations" (made-up code or information).
  - **_Example_**: Instead of asking for a complete API with data fetching and swagger integration, start by asking for the basic function to return some data.

- **Specific**: Clearly state your requirements, goals, and any relevant context or constraints. Use precise language and specify the programming language, desired behavior, or expected output format. You can use # symbols in GitHub Copilot Chat to include specific files or selections as context (e.g., #file or #selection).
  - **_Example_**: Instead of "Create a function", use "Create a Typescript function that validates an email address and returns true or false".

- **Short**: Avoid being overly verbose or using unnecessary filler words. Command-like prompts are acceptable, and typos matter less than clarity. Keeping prompts concise makes it easier for the model to understand the core instruction and focus on the task at hand.

---

## Limitations

- Copilot may generate incorrect or outdated code
- Not a replacement for developer judgment
- Requires internet connection

---

## Conclusion

GitHub Copilot is a powerful AI coding assistant that boosts developer productivity when used correctly. This SOP helps beginners quickly install, configure, and start using Copilot effectively in daily development work.

---

**Document Version:** 1.0  
**Last Updated:** 2026
