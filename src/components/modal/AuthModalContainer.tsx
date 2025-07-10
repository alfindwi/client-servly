import { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { PasswordInput } from "../password-input";

export function AuthModalContainer() {
  const [type, setType] = useState<"login" | "register">("login");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="blue">Sign in</Button>
      </DialogTrigger>

      <DialogContent className="bg-white text-gray-800 border border-blue-300 rounded-xl shadow-xl font-sans max-w-md w-full px-6 py-8">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-[#0074C1]">
            {type === "login" ? "Sign In to Your Account" : "Create an Account"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-6">
          {type === "register" && (
            <div className="grid gap-3">
              <Label htmlFor="username">
                Username<span className="text-red-500">*</span>
              </Label>
              <Input id="username" type="text" placeholder="servly" required />
            </div>
          )}

          <div className="grid gap-3">
            <Label htmlFor="email">
              Email<span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="servly@gmail.com"
              required
            />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="password">
              Password<span className="text-red-500">*</span>
            </Label>
            <PasswordInput
              id="password"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {type === "register" && (
            <div className="grid gap-3">
              <Label htmlFor="confirm-password">
                Confirm Password<span className="text-red-500">*</span>
              </Label>
              <PasswordInput
                id="confirm-password"
                placeholder="••••••••"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          )}
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>

        <DialogClose asChild>
          <Button type="submit" className="w-full mt-3" variant="blue">
            {type === "login" ? "Login" : "Register"}
          </Button>
        </DialogClose>

        <div className="text-sm text-center mt-2 text-gray-600">
          {type === "login" ? (
            <>
              <div className="text-sm text-center text-gray-600">
                Don’t have an account?{" "}
                <button
                  type="button"
                  className="text-blue-600 hover:underline cursor-pointer font-semibold"
                  onClick={() => setType("register")}
                >
                  Sign up
                </button>
              </div>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">
                    Or sign in with
                  </span>
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <button aria-label="Sign in with Google">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                    alt="Google"
                    className="w-7 h-7 object-contain"
                  />
                </button>
                <button aria-label="Sign in with GitHub">
                  <img
                    src="https://img.icons8.com/m_outlined/512/github.png"
                    alt="GitHub"
                    className="w-7 h-7 object-contain"
                  />
                </button>
                <button aria-label="Sign in with Facebook">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                    alt="Facebook"
                    className="w-7 h-7 object-contain"
                  />
                </button>
              </div>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                className="text-blue-600 hover:underline font-medium cursor-pointer"
                onClick={() => setType("login")}
              >
                Sign in
              </button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
