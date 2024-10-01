<template>
	<div class="w-screen relative">
		<NuxtImg  alt="bg" src="/img/bg/pion.png" class="-z-0 absolute right-0 bottom-0 w-[40rem] translate-y-1/2 translate-x-1/2" />

		<div class="container mx-auto grid grid-cols-2">
			<div class="flex flex-col gap-4 justify-center items-start">
				<div data-aos="fade-right" data-aos-delay="400"  class="flex flex-col gap-2">
					<p class="text-text">Sam Volont</p>
					<h1 class="text-white font-medium tracking-wider"><span class="text-primary font-['Space_Grotesk'] font-medium">Code</span> is My <br/> Creative Outlet</h1>
				</div>

				<p data-aos="fade-right" data-aos-delay="500"  class="text-text max-w-2xl">I’m a {{datediff}}-year-old Belgian developer who began coding in 2022. What started as a hobby has grown into a passion for creating software and solving problems. Since then, I’ve been developing projects and learning new technologies, turning coding into my creative outlet and ambition.</p>
				<button data-aos="fade-right" data-aos-delay="500"  class="bg-secondary py-2 px-6 rounded-full text-light hover:bg-secondary/60 duration-150">Contact me</button>
			</div>
			<div class="flex justify-end items-start">
				<NuxtImg  alt="boy image" data-aos="fade-left" data-aos-delay="750" src="/img/boy.png" :placeholder="[15, 25, 50, 75]"  class="h-[40rem] object-contain" />
			</div>
		</div>
		

	</div>
</template>

<script lang="ts" setup>
	let datenow = new Date();
	let dateborn = new Date(2006,1,1);
	let datediff = datenow.getFullYear() - dateborn.getFullYear()
</script>