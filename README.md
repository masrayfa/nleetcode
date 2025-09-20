# NLeetCode

A TypeScript-based collection of data structures and algorithms implementations, designed for learning and practice. Built with Bun runtime for fast execution and modern JavaScript features.

## 🚀 Features

- **Modular Architecture**: Each algorithm is implemented as a separate module
- **Dynamic Loading**: Algorithms are loaded on-demand using a registry system
- **TypeScript Support**: Full type safety and modern TypeScript features
- **Fast Runtime**: Powered by Bun for optimal performance
- **Easy CLI Interface**: Simple command-line interface to run algorithms

## 📋 Prerequisites

- [Bun](https://bun.sh/) runtime installed on your system

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nleetcode
```

2. Install dependencies:
```bash
bun install
```

## 📚 Available Algorithms

### Sorting Algorithms
- **Bubble Sort**: Simple comparison-based sorting algorithm

### Searching Algorithms
- **Binary Search**: Efficient search algorithm for sorted arrays

## 🎯 Usage

### List all available algorithms:
```bash
bun run list
# or
bun run start --list
```

### Run a specific algorithm:
```bash
bun run start <algorithm-name> [arguments]
```

### Examples:

**Bubble Sort with default data:**
```bash
bun run start bubble-sort
```

**Bubble Sort with custom data:**
```bash
bun run start bubble-sort 64 34 25 12 22 11 90
```

**Binary Search:**
```bash
bun run start binary-search [arguments]
```

## 🏗️ Project Structure

```
nleetcode/
├── src/
│   ├── algorithms/
│   │   ├── searching/
│   │   │   └── binary-search.ts
│   │   └── sorting/
│   │       └── bubble-sort.ts
│   ├── main.ts          # Entry point and CLI handler
│   └── registry.ts      # Algorithm registry for dynamic loading
├── package.json
├── tsconfig.json
└── README.md
```

## 🔧 Development

### Watch mode for development:
```bash
bun run dev
```

This will restart the application automatically when you make changes to the source code.

### Adding New Algorithms

1. Create your algorithm file in the appropriate directory under `src/algorithms/`
2. Implement your algorithm with the following structure:
```typescript
export function main(argv: string[]) {
  // Your algorithm implementation
  // argv contains command-line arguments
}
```

3. Register your algorithm in `src/registry.ts`:
```typescript
export const registry: Record<string, Loader> = {
  // ... existing algorithms
  'your-algorithm': async () => 
    await import('./algorithms/category/your-algorithm.ts'),
};
```

## 📝 Algorithm Implementation Guidelines

- Each algorithm should export a `main` function that accepts string arguments
- Use TypeScript for type safety
- Include console output to demonstrate the algorithm's working
- Handle edge cases appropriately
- Follow consistent code formatting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Implement your algorithm following the project structure
4. Add your algorithm to the registry
5. Test your implementation
6. Submit a pull request

## 📄 License

This project is private and intended for educational purposes.

## 🎓 Learning Resources

This project is designed to help you understand:
- Data structures and algorithms implementation
- TypeScript module system
- Dynamic imports and registry patterns
- Command-line interface development
- Modern JavaScript runtime features (Bun)

---

Happy coding! 🚀
