export const useGalleryImages = () => {
	const getImagesFromFolder = (folder: string) => {
		// Genera 8 immagini casuali per ogni palestra
		const dummyImages = Array.from({ length: 8 }, (_, i) => {
			// Usiamo categorie diverse per ogni palestra per simulare foto diverse
			const category = folder === "carbonera" ? "sport" : "fitness"
			return `https://source.unsplash.com/800x600/?${category}&sig=${i}`
		})

		return dummyImages
	}

	return {
		getImagesFromFolder,
	}
}
