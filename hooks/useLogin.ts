import { useCallback } from "react";
import { createClient } from "@/utils/supabase/client"; // Adjust the path as needed

const useLogin = () => {
	const supabase = createClient();

	const handleLogin = useCallback(() => {
		supabase.auth.signInWithOAuth({
			provider: "google",
		});
	}, [supabase]);

	return { handleLogin };
};

export default useLogin;
