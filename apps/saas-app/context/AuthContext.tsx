"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface User {
  role: "admin";
}

interface AuthContextType {
  user: User | null;
  login: (code: string) => boolean;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check local storage for session on mount
    const token = localStorage.getItem("auth_token");
    if (token === "SUPER_SECRET_ADMIN_TOKEN") {
      setUser({ role: "admin" });
    }
    setIsLoading(false);
  }, []);

  const login = (code: string) => {
    // Basic mock authentication for MVP
    if (code === "gr8nik") {
      localStorage.setItem("auth_token", "SUPER_SECRET_ADMIN_TOKEN");
      setUser({ role: "admin" });
      router.push("/admin");
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("auth_token");
    setUser(null);
    router.push("/admin/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
