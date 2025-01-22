import { useEffect } from "react";

const useScrollLock = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scrolling

    return () => {
      document.body.style.overflow = ""; // Re-enable scrolling when unmounted
    };
  }, []);
};

export default useScrollLock;