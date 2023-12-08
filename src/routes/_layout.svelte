<script>
	import Footer from '../components/Footer.svelte';
import Nav from '../components/Nav.svelte';


	

</script>


<Nav/>

<main>
	<body class="defult-home">
		<div class="main-content">
	<slot></slot>
</div>
	</body>
</main>

<Footer/>