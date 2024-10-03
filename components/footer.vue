<template>
	<div class="bg-darkbg px-4 sm:px-16">
		<div class="py-16 flex flex-col gap-3 items-center">
			<div>
				<NuxtImg title="SamVolvo" alt="SamVolvo" src="/logo/light.svg" :placeholder="[25, 50, 75]" loading="lazy"  class="h-6" />
			</div>
			<div class="flex gap-2 justify-center">
				<a href="https://discord.gg/HJP69Sx2yU" target="_blank" class="cursor-pointer">
					<NuxtImg class="h-6 cursor-pointer" src="/icons/discord.svg" title="dc" alt="discord" loading="lazy" />
				</a>
				<a href="https://www.youtube.com/@SamVolvoMusic" target="_blank" class="cursor-pointer">
					<NuxtImg class="h-6 cursor-pointer" src="/icons/youtube.svg" title="yt" alt="youtube" loading="lazy" />
				</a>
				<a href="https://www.instagram.com/SamVolont/" target="_blank" class="cursor-pointer">
					<NuxtImg class="h-6 cursor-pointer" src="/icons/instagram.svg" title="ig" alt="instagram" loading="lazy" />
				</a>
				<a href="https://www.facebook.com/SamVolvotje/" target="_blank" class="cursor-pointer">
					<NuxtImg class="h-6 cursor-pointer" src="/icons/facebook.svg" title="fb" alt="facebook" loading="lazy" />
				</a>
				<a href="https://on.soundcloud.com/NkHKANd2DJSVnnSu5" target="_blank" class="cursor-pointer">
					<NuxtImg class="h-6 cursor-pointer" src="/icons/soundcloud.svg" title="soundcloud" alt="soundcloud" loading="lazy" />
				</a>
			</div>
		</div>
		<div class="py-4 flex flex-col sm:flex-row justify-between text-darkborder border-t border-darkborder">
			<p>© 2023-{{ nowdate.getFullYear() }} SamVolvo. MIT.</p>
			<p>Designed & Development by <a href="https://makoto.com.pl" target="_blank"  class="underline cursor-pointer">Makoto.</a></p>
		</div>
	</div>
</template>

<script lang="ts" setup>
let nowdate = new Date()
</script>