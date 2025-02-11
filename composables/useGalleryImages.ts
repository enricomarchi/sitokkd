export const useGalleryImages = () => {
	const getImagesFromFolder = (folder: string) => {
		try {
			// Importa tutte le immagini dalla cartella public/images
			const images = import.meta.glob(
				"/public/images/**/*.{jpg,jpeg,png,gif}",
				{
					eager: true,
					import: "default",
				}
			)

			// Filtra solo le immagini della cartella richiesta
			const filteredImages = Object.keys(images)
				.filter((path) => path.includes(folder))
				.map((path) => {
					// Converte il percorso per l'uso nel browser
					const browserPath = path.replace("/public", "")
					return browserPath
				})

			return filteredImages
		} catch (error) {
			console.error("Errore nel caricamento delle immagini:", error)
			return []
		}
	}

	return {
		getImagesFromFolder,
	}
}
