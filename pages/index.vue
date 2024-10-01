<template>
	<Navbar/>
	<div class="w-screen">
		
		<div class="container mx-auto grid grid-cols-2">
			<div class="flex flex-col gap-4 justify-center items-start">
				<div class="flex flex-col gap-2">
					<p class="text-text">Sam Volont</p>
					<h1 class="text-white font-medium tracking-wider"><span class="text-primary font-['Space_Grotesk']">Code</span> is My <br/> Creative Outlet</h1>
				</div>

				<p class="text-text max-w-2xl">I’m a {{datediff}}-year-old Belgian developer who began coding in 2022. What started as a hobby has grown into a passion for creating software and solving problems. Since then, I’ve been developing projects and learning new technologies, turning coding into my creative outlet and ambition.</p>
				<button class="bg-secondary py-2 px-6 rounded-full text-light hover:bg-secondary/60 duration-150">Contact me</button>
			</div>
			<div class="flex justify-center items-start">
				<NuxtImg src="/img/boy.png" class="h-[40rem] object-contain" />
			</div>
		</div>
		
	</div>
</template>


<script lang="ts" setup>
	let datenow = new Date();
	let dateborn = new Date(2006,1,1);
	let datediff = datenow.getFullYear() - dateborn.getFullYear()
</script>
