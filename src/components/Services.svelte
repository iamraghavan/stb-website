<script>
   const services = [
  {
    title: "All Type of Building Construction",
    image: "/assets/images/s1.JPG",
    icon: "assets/images/services/main-home/main-icons/service-icon1.png",
    link: "building-construction.html",
    description: "We provide comprehensive building construction services to bring your vision to life.",
  },
  {
    title: "Interiors",
    image: "/assets/images/s2.jpg",

    link: "interiors.html",
    description: "Transform your spaces with our expert interior design and decoration solutions.",
  },
  {
    title: "Renovation",
    image: "data:image/jpeg;base64,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",

    link: "renovation.html",
    description: "Upgrade and renovate your existing structures with our high-quality renovation services.",
  },
  {
    title: "Architectural Planning (2D & 3D)",
    image: "https://cdn-ihikf.nitrocdn.com/dQKaeWDZTGcWYXItNwGrQzGQMgtWnmrp/assets/images/optimized/rev-20b2a55/www.tejjy.com/wp-content/uploads/2022/09/2d-to-3d-floor-plan.jpg",
   
    link: "architectural-planning.html",
    description: "Our architectural planning includes both 2D and 3D designs for a detailed and visualized understanding.",
  },
  {
    title: "Bank Loan Estimation",
    image: "https://img.freepik.com/premium-photo/house-top-table-with-mortgage-application-form-calculator-blueprints-etc_190619-1259.jpg?w=826",
 
    link: "bank-loan-estimation.html",
    description: "Get accurate and reliable bank loan estimations for your construction projects.",
  },
];

  </script>
  
  <div class="rs-services services-main-home gray-bg pt-120 pb-120 md-pt-80 md-pb-80">
    <div class="container">
        <div class="sec-title text-center mb-55 md-mb-35">
            <span class="sub-text">
                <img src="assets/images/shape-1.png" alt="Images">
                What We Do
            </span>
            <h2 class="title">
                Develop comprehensive solutions<br>
                for each project
            </h2>
        </div>
        
      <div class="row">
        {#each services as service (service.title)}
          <div class="col-xl-4 col-md-6 mb-30">
            <div class="services-item">
              <div class="services-wrap">
                <div class="services-image">
                  <img src={service.image} alt="Services">
                </div>
                <div class="services-content">
                  <div class="service-inner">
                    
                    <div class="services-titles">
                      <h3 class="title"><a href={service.link}>{service.title}</a></h3>
                    </div>
                    <p class="services-txt">{service.description}</p>
                    <div class="services-btn">
                      <a class="btn-text" href={service.link}>Read More</a>
                    </div>
                  </div>
                </div>
                <div class="normarl-text-area">
                  <div class="services-titles">
                    <h3 class="title"><a href={service.link}>{service.title}</a></h3>
                  </div>
                  <div class="icon-image">
                    <img src="/assets/images/next.png" alt="Services">
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
  