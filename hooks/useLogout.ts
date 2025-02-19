import { useCallback } from "react";
import { createClient } from "@/utils/supabase/client"; // Adjust the path as needed
import { redirect } from "next/navigation";

const useLogout = () => {
	const supabase = createClient();

	const handleLogout = useCallback(async () => {
		await supabase.auth.signOut();
		redirect("/auth/login");
	}, [supabase]);

	return { handleLogout };
};

export default useLogout;
