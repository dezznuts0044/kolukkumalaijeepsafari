/**
 * Mock auth service — simulates API calls with async delays.
 * Replace these functions with real API calls when connecting to a backend.
 */

import type {
  AuthResponse,
  ForgotPasswordRequest,
  LoginCredentials,
  RegisterCredentials,
} from '@/types/auth';

/** Simulated network delay */
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Mock user database for demo purposes.
 * In production, this would be your backend API.
 */
const MOCK_USER = {
  id: '1',
  email: 'user@example.com',
  name: 'John Doe',
  createdAt: new Date().toISOString(),
};

const MOCK_TOKEN = 'mock-jwt-token-abc123';

/**
 * Authenticate a user with email and password.
 * Accepts any email/password combo for demo purposes.
 */
export async function loginUser(
  credentials: LoginCredentials
): Promise<AuthResponse> {
  await delay(1200);

  // Simulate validation
  if (!credentials.email || !credentials.password) {
    throw new Error('Email and password are required.');
  }

  if (!credentials.email.includes('@')) {
    throw new Error('Please enter a valid email address.');
  }

  if (credentials.password.length < 6) {
    throw new Error('Password must be at least 6 characters.');
  }

  return {
    user: { ...MOCK_USER, email: credentials.email },
    token: MOCK_TOKEN,
  };
}

/**
 * Register a new user account.
 * Accepts any valid input for demo purposes.
 */
export async function registerUser(
  credentials: RegisterCredentials
): Promise<AuthResponse> {
  await delay(1500);

  if (!credentials.name.trim()) {
    throw new Error('Name is required.');
  }

  if (!credentials.email.includes('@')) {
    throw new Error('Please enter a valid email address.');
  }

  if (credentials.password.length < 6) {
    throw new Error('Password must be at least 6 characters.');
  }

  if (credentials.password !== credentials.confirmPassword) {
    throw new Error('Passwords do not match.');
  }

  return {
    user: {
      ...MOCK_USER,
      id: Date.now().toString(),
      email: credentials.email,
      name: credentials.name,
      createdAt: new Date().toISOString(),
    },
    token: MOCK_TOKEN,
  };
}

/**
 * Request a password reset email.
 */
export async function forgotPasswordRequest(
  data: ForgotPasswordRequest
): Promise<{ success: boolean; message: string }> {
  await delay(1000);

  if (!data.email.includes('@')) {
    throw new Error('Please enter a valid email address.');
  }

  return {
    success: true,
    message: 'Password reset link sent to your email.',
  };
}
