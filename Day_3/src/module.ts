export const name = "John";

// Default import using function
export default function stringModule(): {
  generateRandomCharacter: (length: number) => string;
} {
  return {
    generateRandomCharacter: (length: number) => {
      return Array.from({ length }, () =>
        String.fromCharCode(Math.floor(Math.random() * 26) + 97)
      ).join("");
    },
  };
}

// Named export using class
export class StringModule {
    private static instance: StringModule;
  
    public static getInstance(): StringModule {
      if (!StringModule.instance) {
        StringModule.instance = new StringModule();
      }
      return StringModule.instance;
    }
  
    public generateRandomCharacter(length: number): string {
      return Array.from({ length }, () =>
        String.fromCharCode(Math.floor(Math.random() * 26) + 97)
      ).join("");
    }
}
