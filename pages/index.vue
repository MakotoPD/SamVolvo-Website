<template>
	<Contactform v-if="contactFormPopup" @closeclicked="contactFormPopup = false"/>
	<Navbar/>
	<Hero @opencontactform="contactFormPopup = true"/>
	<DiscordBot/>
	<Footer/>
</template>

<script setup lang="ts">


let contactFormPopup = ref(false);


</script>
