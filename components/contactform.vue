<template>
	<div class="z-[200] w-screen min-h-screen bg-darkalptha/50 flex justify-center items-center fixed top-0 left-0">
		<div class="relative py-8 px-8 border border-darkborder rounded-2xl bg-darkbg">
			<button 
				@click="emit('closeclicked')"
				class="px-1 py-1 bg-red-500/30 rounded-md absolute right-2 top-2 cursor-pointer"
			>
				<NuxtImg src="/icons/x.svg" alt="X" class="h-4 cursor-pointer" />
			</button>

			<div>
				<h3 class="text-light">Contact form</h3>
				<hr/>

				

				<form class="max-w-sm mx-auto mt-8">
					<div class="mb-5">
						<label for="email" class="block mb-2 text-sm font-medium text-white">Your email</label>
						<input type="email" id="email" class="cursor-text shadow-sm border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring focus:ring-blue-500 focus:border-blue-500 shadow-sm-light" placeholder="name@mail.com" required />
					</div>
					<div class="mb-5">
						<label for="name" class="block mb-2 text-sm font-medium text-white">Full Name</label>
						<input type="text" id="name" class="cursor-text shadow-sm border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring focus:ring-blue-500 focus:border-blue-500 shadow-sm-light" placeholder="John Kowalski" required />
					</div>
					<div class="mb-5">
						<label for="message" class="block mb-2 text-sm font-medium text-white">Message</label>
						<textarea rows="4" id="message" class="cursor-text shadow-sm border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring focus:ring-blue-500 focus:border-blue-500 shadow-sm-light" placeholder="Message" required />
					</div>
					<div class="flex items-start mb-5">
						<div class="flex items-center h-5">
						<input id="terms" type="checkbox" value="" class="cursor-pointer w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
						</div>
						<label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="/privacypolicy" class="text-blue-600 hover:underline dark:text-blue-500">privacy policy</a></label>
					</div>
					<button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
				</form>

			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

const emit = defineEmits(['closeclicked'])
</script>