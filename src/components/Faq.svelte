<script>
    const faqItems = [
      {
        title: "We are a global family that values diversity.",
        content: "Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure steady growth.",
      },
      {
        title: "We own and shape our future.",
        content: "Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure steady growth.",
      },
      {
        title: "We create sustainable growth.",
        content: "Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure steady growth.",
      },
    ];
  </script>
  
  <div class="rs-faq faq-style1">
    <div class="row">
      <div class="col-lg-4 offset-2 faq-offset6 md-mb-50">
        <div class="faq-content">
          <div class="sec-title mb-40">
            <span class="sub-text">
              <img src="assets/images/shape-1.png" alt="Images">
              Your Benefit
            </span>
            <h2 class="title">
              Build better futures with<br>
              steady focus on quality
            </h2>
          </div>
          <div id="accordion" class="accordion">
            {#each faqItems as { title, content, id } (id)}
            <div class="card">
              <div class="card-header">
                <a class="card-link" href="/" data-bs-toggle="collapse" data-bs-target={`#collapse${id}`} aria-expanded="true">{title}</a>
              </div>
              <div id={`collapse${id}`} class="collapse show" data-bs-parent="#accordion">
                <div class="card-body">
                  {content}
                </div>
              </div>
            </div>
            {/each}
          </div>
        </div>
      </div>
      <div class="col-lg-6 faq-images md-offset-2">

        
      </div>
    </div>
  </div>
  