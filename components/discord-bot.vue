<template>
	<div id="BobTheMod" class="container mx-auto py-16 relative">
		<NuxtImg src="/img/bg/pion.png" class="-z-0 absolute left-0 top-1/3 w-[40rem] -translate-y-1/2 -translate-x-1/2" />


		<div class="grid grid-cols-2">
			<div>
				<NuxtImg src="/img/discord.png" class="w-3/4 drop-shadow-2xl shadow-secondary" />
			</div>
			<div>
				<p class="text-text">Discord Server Moderation Bot</p>
				<h2 class="text-light font-semibold mb-4">BobTheMod</h2>
				<div class="text-light/80">
					<p>My Discord moderation bot is a reliable tool designed to 
						manage the community and maintain order on the server. 
						With advanced features such as automatic moderation, 
						abuse detection and the ability to monitor user activity, 
						it provides a safe and friendly environment for all members.
					</p>
					<p>Main bot features:</p>
					<ul class="list-disc list-inside">
						<li><span class="font-semibold">Automatic content filtering - </span>
							real-time elimination of vulgarity, spam and inappropriate content.
						</li>
						<li><span class="font-semibold">Surveillance and reporting  - </span>
							detailed monitoring of user activity with the ability to generate reports.						</li>
						<li><span class="font-semibold">Warning system - </span>
							automatic warnings and temporary bans for users breaking the rules.						</li>
						<li><span class="font-semibold">Role management - </span>
							facilitated assignment and management of roles on the server.						</li>
						<li><span class="font-semibold">Logging of actions - </span>
							all moderation actions are recorded, allowing full control over the history of actions.						</li>
					</ul>
					<p>
						With my bot, server moderation becomes simpler, faster and more efficient, allowing you to focus on building an engaged community.</p>
				</div>

			</div>
		</div>
		<div class="relative flex justify-center items-cetner gap-12 py-12 text-light">
			<NuxtImg src="/img/bg/poziom.png" class="-z-[10] absolute left-1/2 top-1/2 h-[40rem] -translate-y-1/2 -translate-x-1/2" />

			<button class="shadow-xl py-2 px-6 rounded-lg bg-darkalptha border border-darkborderalptha hover:scale-110 duration-100">Terms Of Service</button>
			<button class="py-2 px-6 mainButton font-semibold hover:scale-110 duration-100"><p class="mainButtonText">Invite BobTheMod</p></button>
			<button class="shadow-xl py-2 px-6 rounded-lg bg-darkalptha border border-darkborderalptha hover:scale-110 duration-100">Privacy Policy</button>

			
		</div>

	</div>
</template>