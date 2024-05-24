import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        // Make a request to the server to check authentication status
        const response = await axios.get("http://localhost:3000/api/v1/user/signin");

        // If user is authenticated, redirect to dashboard
        navigate("/dashboard");
      } catch (error) {
        // If user is not authenticated, redirect to sign-up page
        navigate("/signup");
      }
    };

    // Call the function to check authentication status when component mounts
    checkAuthentication();
  }, [navigate]);

  // Placeholder component, you can customize this as needed
  return null;
}
