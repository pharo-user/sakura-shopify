<script>
	export let name;
	import Login from './components/Login.svelte';
	import Dashboard from './components/Dashboard.svelte';

	let show_panels = '';
	let shop = '';

	function handleMessage(event) {
		console.log(event);
		if (event.detail.text == 'login') {
			show_panels = 'login';
		} else if (event.detail.text == 'dashboard') {
			show_panels = 'dashboard';
		} else if ( event.detail.text == 'login_ok') {
			show_panels = 'dashboard';
		} else if ( event.detail.text == 'login_fail') {
			show_panels = '';
		}
	}

	function go2login() { show_panels = 'login'}

</script>

<main>
	<title>SAKURA NETWORK Shopify App</title>

	<h2>SAKURA NETWORK App is installed</h2>
	<h3>shop id :  {$shop}</h3>
	
	<a href='.\login'>Access Sakura.eco</a>
	<button on:click|once={go2login}>
		Access Sakura.eco
	</button>

	{#if show_panels == "login"}
	<section class="section">
		<Login on:message={handleMessage}></Login>
	</section>
	{/if}
	
	{#if show_panels == "dashboard"}
	<section class="section">
		<Dashboard on:message={handleMessage}></Dashboard>
	</section>
	{/if}
	
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>