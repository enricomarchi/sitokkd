import { ref, onMounted } from "vue"

const COOKIE_NAME = "kkd_cookie_consent"
const COOKIE_DAYS = 365

const consent = ref<"accepted" | "rejected" | null>(null)

function getCookie(name: string): string | null {
	if (!import.meta.client) return null
	const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"))
	return match ? decodeURIComponent(match[2]) : null
}

function setCookie(name: string, value: string, days: number) {
	const expires = new Date(Date.now() + days * 86400000).toUTCString()
	document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`
}

export function useCookieConsent() {
	function init() {
		const stored = getCookie(COOKIE_NAME)
		if (stored === "accepted" || stored === "rejected") {
			consent.value = stored
		}
	}

	function accept() {
		consent.value = "accepted"
		setCookie(COOKIE_NAME, "accepted", COOKIE_DAYS)
	}

	function reject() {
		consent.value = "rejected"
		setCookie(COOKIE_NAME, "rejected", COOKIE_DAYS)
	}

	if (import.meta.client) {
		init()
	}

	return {
		consent,
		accept,
		reject,
	}
}
