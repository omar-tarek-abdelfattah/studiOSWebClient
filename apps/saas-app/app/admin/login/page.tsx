"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@repo/ui/button";

export default function AdminLogin() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(code);
    if (!success) {
      setError("Invalid access code.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="w-full max-w-sm p-8 bg-[#0B0B0C] border border-[#00f2ff]/20 rounded-xl shadow-[0_0_30px_rgba(0,242,255,0.05)]">
        <h2 className="text-2xl font-bold text-center text-[#00f2ff] mb-6">Restricted Access</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="code" className="block text-sm font-medium text-gray-400 mb-1">
              Passcode
            </label>
            <input
              id="code"
              type="password"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                setError("");
              }}
              className="w-full px-4 py-2 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-[#00f2ff] text-white"
              autoFocus
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" className="w-full">
            Enter
          </Button>
        </form>
      </div>
    </div>
  );
}
