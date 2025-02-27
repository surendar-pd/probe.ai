"use client";
import * as React from "react";
import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
} from "@/components/ui/sidebar";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form";
import { Slider } from "./ui/slider";
import { Input } from "./ui/input";
import { Switch } from "./ui/switch";
import { SettingsFormValues, settingsSchema } from "@/schemas/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";

export function SidebarRight({
	...props
}: React.ComponentProps<typeof Sidebar>) {
	const form = useForm<SettingsFormValues>({
		resolver: zodResolver(settingsSchema),
		defaultValues: {
			frequencyPenalty: 0,
			maxTokens: 4096,
			presencePenalty: 0,
			stopWords: "",
			stream: true,
			temperature: 0.7,
			topP: 0.95,
		},
	});

	const onSubmit = (data: SettingsFormValues) => {
		console.log("Form Data:", data);
	};

	return (
		<Sidebar
			collapsible="none"
			className="sticky hidden lg:flex top-0 h-svh border-l"
			{...props}
		>
			<SidebarHeader className="border-b border-sidebar-border text-center text-sm">
				Inference Settings
			</SidebarHeader>
			<SidebarContent>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="px-4 flex flex-col space-y-6"
					>
						{/* Frequency Penalty */}
						<FormField
							control={form.control}
							name="frequencyPenalty"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Frequency Penalty</FormLabel>
									<FormControl>
										<Slider
											min={0}
											max={1}
											step={0.01}
											value={[field.value]}
											onValueChange={(val) => field.onChange(val[0])}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Max Tokens */}
						<FormField
							control={form.control}
							name="maxTokens"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Max Tokens</FormLabel>
									<FormControl>
										<Slider
											min={100}
											max={4096}
											step={1}
											value={[field.value]}
											onValueChange={(val) => field.onChange(val[0])}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Presence Penalty */}
						<FormField
							control={form.control}
							name="presencePenalty"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Presence Penalty</FormLabel>
									<FormControl>
										<Slider
											min={0}
											max={1}
											step={0.01}
											value={[field.value]}
											onValueChange={(val) => field.onChange(val[0])}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Stop Words */}
						<FormField
							control={form.control}
							name="stopWords"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Stop Words</FormLabel>
									<FormControl>
										<Input placeholder="Enter stop words" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Stream Toggle */}
						<FormField
							control={form.control}
							name="stream"
							render={({ field }) => (
								<FormItem className="flex items-center justify-between">
									<FormLabel>Stream</FormLabel>
									<FormControl>
										<Switch
											checked={field.value}
											onCheckedChange={field.onChange}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Temperature */}
						<FormField
							control={form.control}
							name="temperature"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Temperature</FormLabel>
									<FormControl>
										<Slider
											min={0}
											max={2}
											step={0.01}
											value={[field.value]}
											onValueChange={(val) => field.onChange(val[0])}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Top P */}
						<FormField
							control={form.control}
							name="topP"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Top P</FormLabel>
									<FormControl>
										<Slider
											min={0}
											max={1}
											step={0.01}
											value={[field.value]}
											onValueChange={(val) => field.onChange(val[0])}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Submit Button */}
						<Button
							type="submit"
							className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
						>
							Save Settings
						</Button>
					</form>
				</Form>
			</SidebarContent>
		</Sidebar>
	);
}
