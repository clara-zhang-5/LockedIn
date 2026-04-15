"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { LogIn, UserPlus, ArrowRight } from "lucide-react";
import { createClient } from "../../utils/supabase/client";

interface AuthPageProps {
  onGoogleLogin: () => void;
  onSwitch: () => void;
  type: "login" | "signup";
}

function AuthPage({ onGoogleLogin, onSwitch, type }: AuthPageProps) {
  return (
    <div className="h-[100vh] bg-white flex flex-col justify-center items-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md space-y-8"
      >
        <h1 className="text-6xl font-display font-bold text-primary mb-10 text-center tracking-tighter">
          LockedIn
        </h1>
        <div className="space-y-6">
          <button 
            onClick={onGoogleLogin}
            className="w-full flex items-center justify-center gap-3 p-4 rounded-none bg-surface-low hover:bg-surface-low/80 transition-all group cursor-pointer"
          >
            <img 
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
              alt="Google" 
              className="w-5 h-5"
            />
            <span className="font-sans font-medium text-surface-on">
              Continue with Google
            </span>
          </button>

          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-outline-variant/20"></div>
            <span className="flex-shrink mx-4 text-xs font-mono text-surface-on-variant uppercase tracking-widest">
              or
            </span>
            <div className="flex-grow border-t border-outline-variant/20"></div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-mono text-surface-on-variant uppercase tracking-widest ml-1">
                Email Address
              </label>
              <input 
                type="email" 
                placeholder="name@university.edu"
                className="w-full p-4 rounded-none bg-surface-low border border-transparent focus:border-primary/30 focus:bg-white transition-all outline-none font-sans"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-surface-on-variant uppercase tracking-widest ml-1">
                Password
              </label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full p-4 rounded-none bg-surface-low border border-transparent focus:border-primary/30 focus:bg-white transition-all outline-none font-sans"
              />
            </div>
          </div>

          <button className="w-full flex items-center justify-center gap-2 p-4 rounded-none bg-primary text-white font-sans font-semibold hover:bg-primary-dark transition-all shadow-md shadow-primary/10 group cursor-pointer">
            {type === "login" ? "Sign In" : "Create Account"}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <p className="text-center mt-8 text-surface-on-variant font-sans">
          {type === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
          <button 
            onClick={onSwitch}
            className="text-primary font-semibold hover:underline cursor-pointer"
          >
            {type === "login" ? "Sign Up" : "Log In"}
          </button>
        </p>
      </motion.div>
    </div>
  );
}

export default function AuthContainer() {
  const [type, setType] = useState<"login" | "signup">("login");
  const supabase = createClient();

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  const handleSwitch = () => {
    setType(type === "login" ? "signup" : "login");
  };

  return (
    <AuthPage 
      type={type} 
      onGoogleLogin={handleGoogleLogin} 
      onSwitch={handleSwitch} 
    />
  );
}
