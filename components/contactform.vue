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

				

				<form @submit.prevent="submitForm"  class="max-w-sm mx-auto mt-8">
					<div class="mb-5">
						<label for="email" class="block mb-2 text-sm font-medium text-white">Your email</label>
						<input v-model="email" type="email" id="email" class="cursor-text shadow-sm border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring focus:ring-blue-500 focus:border-blue-500 shadow-sm-light" placeholder="name@mail.com" required />
					</div>
					<div class="mb-5">
						<label for="name" class="block mb-2 text-sm font-medium text-white">Full Name</label>
						<input v-model="name" type="text" id="name" class="cursor-text shadow-sm border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring focus:ring-blue-500 focus:border-blue-500 shadow-sm-light" placeholder="John Kowalski" required />
					</div>
					
					<div class="mb-5">
						<label for="message" class="block mb-2 text-sm font-medium text-white">Message</label>
						<textarea v-model="message" rows="4" id="message" class="cursor-text shadow-sm border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring focus:ring-blue-500 focus:border-blue-500 shadow-sm-light" placeholder="Message" required />
					</div>
					<div class="flex items-start mb-5">
						<div class="flex items-center h-5">
						<input v-model="terms" id="terms" type="checkbox" value="" class="cursor-pointer w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
						</div>
						<label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="/privacypolicy" class="text-blue-600 hover:underline dark:text-blue-500">privacy policy</a></label>
					</div>

					<NuxtTurnstile v-if="pageReady" v-model="token" :options="{theme: 'dark', language: 'en'}" />


					<div>
						<Alert v-if="sendsucces" text="Success send message!" type="success" />
						<Alert v-if="senderror" text="Captcha is required" type="error" />
						<Alert v-if="error" :text="error" type="error" />
					</div>

					<button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
				</form>

			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const emit = defineEmits(['closeclicked'])

const WEB3FORMS_ACCESS_KEY = "2836bf95-f9db-4252-bdbe-6eb90cd09a87"

const token = ref("");
const pageReady = ref(false);


onMounted(() => {
	pageReady.value = true
})


const email = ref('')
const name = ref('')
const message = ref('')
const terms = ref(false)

const error = ref("");
let senderror = ref(false)
let sendsucces = ref(false)

let submitForm = async () => {

	if (token.value == '') {
		setTimeout(() => {
			error.value = 'Cpatcha not resolved, try again'
			senderror.value = false
		}, 8000)
	} else {

		if (email.value != "contact@samvolvo.com" && email.value != "business@samvolvo.com" && email.value != "support@samvolvo.com") {
		
			const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				access_key: WEB3FORMS_ACCESS_KEY,
				subject: 'Message from contact form - Website',
				name: name.value,
				email: email.value,
				message: message.value,
			}),
			});
			const result = await response.json();
			if (result.success) {
				console.log(result);
				console.log('Message send')
				sendsucces.value = true


				name.value = ''
				email.value = ''
				message.value = ''
				terms.value = false
			} else if(result.error) {
				console.log('Form Error')
				console.log(error.value)
				senderror.value = true
			}
		
		}
	}
}
</script>