# Contributing to ECMS Prototype

Thanks for contributing to the **Enhanced Consultant Management System (ECMS)** repository.

## Workflow

1. Create a focused branch for your task.
2. Keep changes scoped to one module or document set.
3. Run the available project checks before requesting review:
   - `npm run lint`
   - `npm run build`
4. Open a pull request with a clear summary and screenshots for UI changes.

## Code Guidelines

- Use React 18 functional components.
- Keep styling aligned with the ECMS design tokens in `tailwind.config.js`.
- Reuse existing palette and typography from `docs/ECMS_Design_System.md`.
- Keep commits small and descriptive.

## Documentation Guidelines

- Update docs in `/docs` when changing UX, design system, poster workflow, or team process.
- Keep wording concise and practical for Group 02 handoffs.

## Ownership & Reviews

- Follow `.github/CODEOWNERS` for module-specific reviewers.
- At least one assigned owner should approve each pull request.
