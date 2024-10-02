<template>
	<div class="z-50 w-screen flex justify-between container mx-auto py-6 relative">
		<NuxtImg alt="bg"  src="/img/bg/poziom.png" class="-z-0 w-[100rem] h-[60rem] absolute left-0 top-0 -translate-x-1/3 -translate-y-1/2" />

		<NuxtImg alt="SamVolvo" src="/logo/light.svg" class="z-10 h-4" data-aos="fade-right" />
		<div data-aos="fade-left" class="text-light px-2 py-1 border border-darkborderalptha rounded-full bg-darkalptha flex items-center gap-6">
			<a href="#BobTheMod" class="cursor-pointer font-light duration-200 hover:bg-darkborderalptha px-2 rounded-full">
				BobTheMod
			</a>
			<button 
				@mouseover="openSmMenu" 
				@mouseleave="closeSmMenu" 
				class="cursor-pointre relative font-light duration-200 hover:bg-darkborderalptha px-2 rounded-full flex items-center">
				Social Media
				<NuxtImg title="\/" alt="\/" src="/icons/arrow.svg" class="h-6 w-6" />

				<div id="smMenu" class=" absolute right-0 top-6 py-4 px-2 flex flex-col gap-2 bg-darkborder/50 rounded-xl border border-darkborder">
					<a href="https://discord.gg/HJP69Sx2yU" target="_blank"  class="flex gap-1 cursor-pointer hover:bg-darkborder/40 duration-75 rounded-full px-2 py-0.5">
						<NuxtImg class="h-6 cursor-pointer" src="/icons/discord.svg" title="dc" alt="discord" loading="lazy" />
						<p class="cursor-pointer">Discord</p>
					</a>
					<a href="https://www.youtube.com/@SamVolvoMusic" target="_blank"  class="flex gap-1 cursor-pointer hover:bg-darkborder/40 duration-75 rounded-full px-2 py-0.5">
						<NuxtImg class="h-6 cursor-pointer" src="/icons/youtube.svg" title="yt" alt="youtube" loading="lazy" />
						<p class="cursor-pointer">Youtube</p>
					</a>
					<a href="https://www.instagram.com/SamVolont/" target="_blank"  class="flex gap-1 cursor-pointer hover:bg-darkborder/40 duration-75 rounded-full px-2 py-0.5">
						<NuxtImg class="h-6 cursor-pointer" src="/icons/instagram.svg" title="ig" alt="instagram" loading="lazy" />
						<p class="cursor-pointer">Instagram</p>
					</a>
					<a href="https://www.facebook.com/SamVolvotje/" target="_blank"  class="flex gap-1 cursor-pointer hover:bg-darkborder/40 duration-75 rounded-full px-2 py-0.5">
						<NuxtImg class="h-6 cursor-pointer" src="/icons/facebook.svg" title="fb" alt="facebook" loading="lazy" />
						<p class="cursor-pointer">Facebook</p> 
					</a>
					<a href="https://on.soundcloud.com/NkHKANd2DJSVnnSu5" target="_blank" class="w-36 flex gap-1 cursor-pointer hover:bg-darkborder/40 duration-75 rounded-full px-2 py-0.5">
						<NuxtImg class="h-6 cursor-pointer" src="/icons/soundcloud.svg" title="soundcloud" alt="soundcloud" loading="lazy" />
						<p class="cursor-pointer">Soundcloud</p>
					</a>

				</div>
			</button>
		</div>
		
	</div>
</template>

<script setup lang="ts">



let openSmMenu = () => {
	document.querySelector('#smMenu')?.classList.remove('hidden')
}

let closeSmMenu = () => {
	document.querySelector('#smMenu')?.classList.add('hidden')
}
</script>