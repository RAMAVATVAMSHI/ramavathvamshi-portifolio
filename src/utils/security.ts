
import DOMPurify from 'dompurify';

// Sanitize HTML content to prevent XSS attacks
export const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input, { 
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: []
  });
};

// Validate email format
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Check input length limits
export const isValidLength = (input: string, maxLength: number = 1000): boolean => {
  return input.length <= maxLength && input.trim().length > 0;
};

// Rate limiting utility
export class RateLimiter {
  private static instance: RateLimiter;
  private attempts: Map<string, number> = new Map();
  private lastAttempt: Map<string, number> = new Map();
  private readonly maxAttempts = 3;
  private readonly timeWindow = 60000; // 1 minute

  static getInstance(): RateLimiter {
    if (!RateLimiter.instance) {
      RateLimiter.instance = new RateLimiter();
    }
    return RateLimiter.instance;
  }

  canAttempt(identifier: string): boolean {
    const now = Date.now();
    const lastTime = this.lastAttempt.get(identifier) || 0;
    const attempts = this.attempts.get(identifier) || 0;

    // Reset attempts if time window has passed
    if (now - lastTime > this.timeWindow) {
      this.attempts.set(identifier, 0);
      this.lastAttempt.set(identifier, now);
      return true;
    }

    // Check if under rate limit
    return attempts < this.maxAttempts;
  }

  recordAttempt(identifier: string): void {
    const current = this.attempts.get(identifier) || 0;
    this.attempts.set(identifier, current + 1);
    this.lastAttempt.set(identifier, Date.now());
  }

  getRemainingTime(identifier: string): number {
    const lastTime = this.lastAttempt.get(identifier) || 0;
    const timeLeft = this.timeWindow - (Date.now() - lastTime);
    return Math.max(0, Math.ceil(timeLeft / 1000));
  }
}
