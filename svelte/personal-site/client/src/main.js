import App from './App.svelte';

const app = new App({
	target: document.body,
	// hydrate: true
});

window.app = app

export default app;