"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import useLogout from "@/hooks/useLogout";

const Hero = () => {
	const { handleLogout } = useLogout();
	return (
		<div>
			<Button onClick={handleLogout}>Logout</Button>
		</div>
	);
};

export default Hero;
