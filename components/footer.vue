<template>
	<div class="bg-darkbg px-16">
		<div class="py-16 flex flex-col gap-3 items-center">
			<div>
				<NuxtImg alt="SamVolvo" src="/logo/light.svg" :placeholder="[25, 50, 75]" loading="lazy"  class="h-6" />
			</div>
			<div class="flex gap-2 justify-center">
				<NuxtImg class="h-6" src="/icons/discord.svg" alt="discord" loading="lazy" />
				<NuxtImg class="h-6" src="/icons/youtube.svg" alt="youtube" loading="lazy" />
				<NuxtImg class="h-6" src="/icons/instagram.svg" alt="instagram" loading="lazy" />
				<NuxtImg class="h-6" src="/icons/facebook.svg" alt="facebook" loading="lazy" />
				<NuxtImg class="h-6" src="/icons/soundcloud.svg" alt="soundcloud" loading="lazy" />
			</div>
		</div>
		<div class="py-4 flex justify-between text-darkborder border-t border-darkborder">
			<p>© 2023-{{ nowdate.getFullYear() }} SamVolvo. MIT.</p>
			<p>Designed & Development by <a href="https://makoto.com.pl" target="_blank"  class="underline cursor-pointer">Makoto.</a></p>
		</div>
	</div>
</template>

<script lang="ts" setup>
let nowdate = new Date()
</script>