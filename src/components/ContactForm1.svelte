<script>
   import { onMount } from "svelte";

let inputValue = "";
let suggestions = [];

const fetchLocationSuggestions = async () => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${inputValue}&format=json&addressdetails=1`
      );

      if (response.ok) {
        const data = await response.json();
        suggestions = data;
      } else {
        console.error("Failed to fetch location suggestions");
      }
    } catch (error) {
      console.error("Error fetching location suggestions:", error);
    }
  };

  // Optional: Clear suggestions when the input is empty
  $: if (inputValue === "") {
    suggestions = [];
  }

  // Optional: Handle selection of a suggestion (you can customize this part)
  const handleSuggestionClick = (suggestion) => {
    inputValue = suggestion.display_name;
    suggestions = []; // Clear suggestions after selection
  };

  // Optional: Fetch suggestions on component mount
  onMount(() => {
    fetchLocationSuggestions();
  });
  
    let name = '';
    let phoneNumber = '';
    let email = '';
    let yourAddress = '';
    let selectedService = '';
  
    function handleSubmit() {
  // Make a POST request to your backend with form data
  fetch('/submit-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      phoneNumber,
      email,
      yourAddress,
      selectedService,
    }),
  })
    .then(response => {
      if (response.ok) {
        return response.json(); // Assuming your server returns JSON
      } else {
        throw new Error('Form submission failed.');
      }
    })
    .then(data => {
      // Handle successful response, if needed
      alert('Form submitted successfully!');
    })
    .catch(error => {
      console.error('Error submitting form:', error);
      alert('Form submission failed.');
    });
}

  </script>
  <div class="rs-contact contact-style2">
    <div class="container">
        <div class="requset-contact">
            <div class="sec-title mb-40 md-mb-30">
                <h2 class="title title2">
                    Request A Services
                </h2>
            </div>
            <div class="row">

                <div class="col-lg-4 col-sm-6 mb-30">
                    <span class="wpcf7-form-control-wrap">
                        <input type="text" id="name" name="name" placeholder=" Name" required="">
                    </span>
                </div>
                <div class="col-lg-4 col-sm-6 mb-30">
                    <span class="wpcf7-form-control-wrap arrow2">
                        <input type="text" id="phone-number" name="phone-number" placeholder="Phone Number" required="">
                    </span>
                </div>
                <div class="col-lg-4 col-sm-6 mb-30">
                    <span class="wpcf7-form-control-wrap">
                        <input type="text" id="email" name="email" placeholder="Email" required="">
                    </span>
                </div>
                <div class="col-lg-4 col-sm-6 md-mb-30">
                    <span class="wpcf7-form-control-wrap arrow3">
                        <input type="text" id="your-address" name="your-address" placeholder="Your Address" required="">
                    </span>
                </div>
                <div class="col-lg-4 col-sm-6 sm-mb-30">
                    <span class="wpcf7-form-control-wrap arrow4 Services services_select">
                        <select name="Services select" id="default_hide">
                            <option disabled value="">Select a Service</option>
                            <option>All Type of Building Construction</option>
                            <option>Interiors</option>
                            <option>Renovation</option>
                            <option>Architectural Planning (2D & 3D)</option>
                            <option>Bank Loan Estimation</option>
                        </select>
                    
                    <div class="select-selected">Services</div><div class="select-items select-hide"><div>General construction</div><div>Modified Roofing</div><div>Metal Roofing</div><div>Vegetative Roofing</div><div>Inspections</div><div>Siding &amp; Gutters</div></div></span>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="services-btn">
                        <p class="submit-btn">
                            <input type="submit" value="Submit Services Request" class="Submit Services Request">
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  