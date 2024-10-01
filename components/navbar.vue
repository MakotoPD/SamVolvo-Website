<template>
	<div class="w-screen flex justify-between container mx-auto py-6 relative">
		<NuxtImg src="/img/bg/poziom.png" class="-z-0 w-[100rem] h-[60rem] absolute left-0 top-0 -translate-x-1/3 -translate-y-1/2" />

		<NuxtImg src="/logo/light.svg" class="z-10 h-4" data-aos="fade-right" />
		<div data-aos="fade-left" class="text-light px-2 py-1 border border-darkborderalptha rounded-full bg-darkalptha flex items-center gap-6">
			<button class="font-light duration-200 hover:bg-darkborderalptha px-2 rounded-full">
				BobTheMod
			</button>
			<button class="font-light duration-200 hover:bg-darkborderalptha px-2 rounded-full flex items-center">
				Social Media
				<NuxtImg src="/icons/arrow.svg" class="h-6 w-6" />
			</button>
		</div>
		
	</div>
</template>