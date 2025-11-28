# Contributing to Naija Property Marketplace

Thank you for your interest in contributing to Naija Property Marketplace! This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct:
- Be respectful and inclusive
- Welcome newcomers
- Focus on what is best for the community
- Show empathy towards others

## How to Contribute

### Reporting Bugs

Before creating a bug report:
1. Check the existing issues to avoid duplicates
2. Use the bug report template
3. Include detailed steps to reproduce
4. Add screenshots if applicable

### Suggesting Features

Feature requests are welcome! Please:
1. Check existing feature requests
2. Provide a clear use case
3. Explain why this feature would be useful
4. Be open to discussion

### Pull Requests

1. Fork the repository
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes following our coding standards
4. Write/update tests if applicable
5. Ensure all tests pass:
   ```bash
   npm run lint
   npm run build
   ```

6. Commit your changes:
   ```bash
   git commit -m "feat: add new feature"
   ```
   Follow [Conventional Commits](https://www.conventionalcommits.org/)

7. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

8. Create a Pull Request

### Coding Standards

#### JavaScript/React
- Use functional components with hooks
- Follow React best practices
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components small and focused

#### CSS/Tailwind
- Use Tailwind utility classes
- Follow mobile-first approach
- Maintain consistent spacing
- Use semantic HTML

#### File Structure
- Place components in appropriate folders
- Keep related files together
- Use index files for exports
- Follow the existing structure

### Commit Messages

Use conventional commit format:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Test changes
- `chore:` Build/config changes

Example:
```
feat: add property comparison feature

- Added comparison component
- Updated property card with compare button
- Implemented comparison logic
```

### Testing

- Write tests for new features
- Ensure existing tests pass
- Test on multiple browsers
- Test mobile responsiveness

### Documentation

- Update README.md for new features
- Add JSDoc comments for functions
- Update SETUP_GUIDE.md if needed
- Include examples in documentation

## Development Setup

See [SETUP_GUIDE.md](SETUP_GUIDE.md) for detailed setup instructions.

## Project Structure

```
naija-property-marketplace/
├── src/
│   ├── components/      # Reusable components
│   ├── pages/          # Page components
│   ├── context/        # Context providers
│   ├── services/       # API services
│   ├── utils/          # Utility functions
│   └── styles/         # Global styles
├── public/             # Static assets
└── ...config files
```

## Getting Help

- Check the [README.md](README.md)
- Read the [SETUP_GUIDE.md](SETUP_GUIDE.md)
- Open a discussion on GitHub
- Contact the maintainers

## Recognition

Contributors will be:
- Listed in the README
- Acknowledged in release notes
- Appreciated by the community

Thank you for contributing to make housing more accessible in Nigeria! 🏠🇳🇬
