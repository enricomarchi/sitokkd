<template>
	<Teleport to="body">
		<div
			v-if="isOpen"
			@click="close"
			class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center cursor-pointer"
		>
			<img
				:src="imageSrc"
				:alt="imageAlt"
				class="max-h-[90vh] max-w-[90vw] object-contain"
			/>
			<button
				@click="close"
				class="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
			>
				&times;
			</button>
		</div>
	</Teleport>
</template>

<script setup>
const props = defineProps({
	isOpen: Boolean,
	imageSrc: String,
	imageAlt: String,
})

const emit = defineEmits(["close"])

const close = () => {
	emit("close")
}
</script>
