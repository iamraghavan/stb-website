<svelte:head>
    <script src="https://cdn.jsdelivr.net/npm/jwt-decode@2.2.0/build/jwt-decode.min.js"></script>
    <script src="https://accounts.google.com/gsi/client" async defer></script>
</svelte:head>

<script>
    import { onMount } from 'svelte';

    onMount(() => {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;
        script.onload = initializeGoogleOneTap;
        document.head.appendChild(script);
    });

    function initializeGoogleOneTap() {
        google.accounts.id.initialize({
            client_id: '296534124626-7lpa6e1b9jqdgcr0h7pbej1u1032tm65.apps.googleusercontent.com',
            callback: handleCredentialResponse,
        });
        google.accounts.id.prompt();
    }

    function handleCredentialResponse(response) {
        if (response.credential) {
            const decodedToken = jwt_decode(response.credential);

            if (decodedToken) {
                const googleName = decodedToken.name;
                const googleMail = decodedToken.email;
                const googlePicture = decodedToken.picture;
                const googleID = decodedToken.sub;

                console.log('Google User Name:', googleName);
                console.log('Google User Email:', googleMail);
                console.log('Google User Picture:', googlePicture);
                console.log('Google User ID:', googleID);

                // You can handle the user information here
            } else {
                console.error('Unable to decode the JWT token.');
            }
        } else {
            console.error('Unable to retrieve user credential.');
        }
    }
</script>

  
  <style>
    /* Add your styles here */
  </style>
  
  <div>
    <!-- Add your HTML structure here -->
  </div>
  