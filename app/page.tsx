// import Hero from "@/components/landing/hero";

export default function Home() {
	return (
		<div className="grid grid-cols-9 w-full h-screen">
			<section className="bg-violet-100 w-full h-full col-span-9 md:col-span-3 lg:col-span-2"></section>
			<section className="bg-red-100 w-full h-full col-span-9 md:col-span-6 lg:col-span-5"></section>
			<section className="bg-green-100 w-full h-full col-span-9 md:col-span-3 lg:col-span-2"></section>
		</div>
	);
}
