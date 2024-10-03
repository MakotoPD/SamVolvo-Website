<template>
	<div class="z-50 w-screen flex justify-between items-center container mx-auto py-6 relative px-4 sm:px-0">
		<NuxtImg alt="bg"  src="/img/bg/poziom.png" class="-z-0 w-[100rem] h-[60rem] absolute left-0 top-0 -translate-x-1/3 -translate-y-1/2" />

		<NuxtLink to="/" class="cursor-pointer">
			<NuxtImg alt="SamVolvo" src="/logo/light.svg" class="z-10 h-4 cursor-pointer" data-aos="fade-right" />
		</NuxtLink>
		<div data-aos="fade-left" class="hidden text-light px-2 py-1 border border-darkborderalptha rounded-full bg-darkalptha sm:flex items-center gap-6">
			<NuxtLink to="/#BobTheMod" class="cursor-pointer font-light duration-200 hover:bg-darkborderalptha px-2 rounded-full">
				BobTheMod
			</NuxtLink>
			<button 
				@mouseover="openSmMenu" 
				@mouseleave="closeSmMenu" 
				class="cursor-pointre relative font-light duration-200 hover:bg-darkborderalptha px-2 rounded-full flex items-center">
				Social Media
				<NuxtImg title="\/" alt="\/" src="/icons/arrow.svg" class="h-6 w-6" />

				<div id="smMenu" class="hidden absolute right-0 top-6 py-4 px-2 flex flex-col gap-2 bg-darkborder/50 rounded-xl border border-darkborder">
					<NuxtLink to="https://discord.gg/HJP69Sx2yU" target="_blank"  class="flex gap-1 cursor-pointer hover:bg-darkborder/40 duration-75 rounded-full px-2 py-0.5">
						<NuxtImg class="h-6 cursor-pointer" src="/icons/discord.svg" title="dc" alt="discord" loading="lazy" />
						<p class="cursor-pointer">Discord</p>
					</NuxtLink>
					<NuxtLink to="https://www.youtube.com/@SamVolvoMusic" target="_blank"  class="flex gap-1 cursor-pointer hover:bg-darkborder/40 duration-75 rounded-full px-2 py-0.5">
						<NuxtImg class="h-6 cursor-pointer" src="/icons/youtube.svg" title="yt" alt="youtube" loading="lazy" />
						<p class="cursor-pointer">Youtube</p>
					</NuxtLink>
					<NuxtLink to="https://www.instagram.com/SamVolont/" target="_blank"  class="flex gap-1 cursor-pointer hover:bg-darkborder/40 duration-75 rounded-full px-2 py-0.5">
						<NuxtImg class="h-6 cursor-pointer" src="/icons/instagram.svg" title="ig" alt="instagram" loading="lazy" />
						<p class="cursor-pointer">Instagram</p>
					</NuxtLink>
					<NuxtLink to="https://www.facebook.com/SamVolvotje/" target="_blank"  class="flex gap-1 cursor-pointer hover:bg-darkborder/40 duration-75 rounded-full px-2 py-0.5">
						<NuxtImg class="h-6 cursor-pointer" src="/icons/facebook.svg" title="fb" alt="facebook" loading="lazy" />
						<p class="cursor-pointer">Facebook</p> 
					</NuxtLink>
					<NuxtLink to="https://on.soundcloud.com/NkHKANd2DJSVnnSu5" target="_blank" class="w-36 flex gap-1 cursor-pointer hover:bg-darkborder/40 duration-75 rounded-full px-2 py-0.5">
						<NuxtImg class="h-6 cursor-pointer" src="/icons/soundcloud.svg" title="soundcloud" alt="soundcloud" loading="lazy" />
						<p class="cursor-pointer">Soundcloud</p>
					</NuxtLink>

				</div>
			</button>
		</div>
		
		<div data-aos="fade-left"  class="flex sm:hidden">
			<div class="bg-darkborderalptha p-2 rounded-lg py-3">
				<button id="hamburger" class="tham tham-e-squeeze tham-w-6">
					<div class="tham-box">
						<div class="tham-inner bg-light" />
					</div>
				</button>
			</div>
		</div>

	</div>

	<div id="smMenuMobile" class="z-[500] hidden absolute right-4 top-[4.5rem] px-6 py-4 backdrop-blur-sm bg-darkborderalptha rounded-lg border border-darkborder text-light">
			<p class="relative -left-2 text-xs text-light/60 mb-1">Projects</p>
			<NuxtLink @click="closeSmMenuMobile" to="/#BobTheMod" class="cursor-pointer">
				BobTheMod
			</NuxtLink>

			<div class="border-t border-darkborder mt-2 pt-2">
				<p class="relative -left-2 text-xs text-light/60 mb-1">Social Media</p>
				
				<div class="flex flex-col gap-2">
					<NuxtLink @click="closeSmMenuMobile" to="https://discord.gg/HJP69Sx2yU" target="_blank"  class="flex gap-1">
						<NuxtImg class="h-6 cursor-pointer" src="/icons/discord.svg" title="dc" alt="discord" loading="lazy" />
						<p class="cursor-pointer">Discord</p>
					</NuxtLink>
					<NuxtLink @click="closeSmMenuMobile" to="https://www.youtube.com/@SamVolvoMusic" target="_blank"  class="flex gap-1">
						<NuxtImg class="h-6 cursor-pointer" src="/icons/youtube.svg" title="yt" alt="youtube" loading="lazy" />
						<p class="cursor-pointer">Youtube</p>
					</NuxtLink>
					<NuxtLink @click="closeSmMenuMobile" to="https://www.instagram.com/SamVolont/" target="_blank"  class="flex gap-1">
						<NuxtImg class="h-6 cursor-pointer" src="/icons/instagram.svg" title="ig" alt="instagram" loading="lazy" />
						<p class="cursor-pointer">Instagram</p>
					</NuxtLink>
					<NuxtLink @click="closeSmMenuMobile" to="https://www.facebook.com/SamVolvotje/" target="_blank"  class="flex gap-1">
						<NuxtImg class="h-6 cursor-pointer" src="/icons/facebook.svg" title="fb" alt="facebook" loading="lazy" />
						<p class="cursor-pointer">Facebook</p> 
					</NuxtLink>
					<NuxtLink @click="closeSmMenuMobile" to="https://on.soundcloud.com/NkHKANd2DJSVnnSu5" target="_blank" class="w-36 flex gap-1">
						<NuxtImg class="h-6 cursor-pointer" src="/icons/soundcloud.svg" title="soundcloud" alt="soundcloud" loading="lazy" />
						<p class="cursor-pointer">Soundcloud</p>
					</NuxtLink>
				</div>

			</div>
		</div>
</template>

<script setup lang="ts">

onMounted(() => {
	const tham = document.querySelector("#hamburger");
	const smMenuMobile = document.querySelector('#smMenuMobile')

	tham?.addEventListener('click', () => {
		tham.classList.toggle('tham-active');

		smMenuMobile?.classList.toggle('hidden')
	});
})

let closeSmMenuMobile = () => {
	document.querySelector("#hamburger")?.classList.remove('tham-active');
	document.querySelector('#smMenuMobile')?.classList.remove('hidden')

}



let openSmMenu = () => {
	document.querySelector('#smMenu')?.classList.remove('hidden')
}

let closeSmMenu = () => {
	document.querySelector('#smMenu')?.classList.add('hidden')
}
</script>