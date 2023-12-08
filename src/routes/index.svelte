<script>
  import ContactForm1 from "../components/ContactForm1.svelte";
import Faq from "../components/Faq.svelte";
import Services from "../components/Services.svelte";
  import Testimonials from "../components/Testimonials.svelte";
import GoogleOneTapLogin from "./GoogleOneTapLogin.svelte";


let bannerContent = {
    subheading: "Welcome to Sri Thiruthani Builder & Foundation",
    heading: "Building Dreams,\nConstructing Foundations.",
    description: "",
    buttonText: "Discover More",
    buttonLink: "contact.html",
    imageUrl: "assets/images/slidimg.png",
  };


    let aboutContent = {
        imageUrl: "assets/images/about-stbf.webp",
    title: "Your Trusted Partner in Construction",
    subtitle: "Who We Are",
    description: "Sri Thiruthani Builders and Foundation, based in Chennai, is your premier partner in construction. With a commitment to excellence, we specialize in providing future-ready construction solutions tailored to your needs. Our dedicated team leverages agile frameworks to ensure a robust and collaborative approach, delivering high-level overviews that empower your vision. As a trusted name in the industry, we pride ourselves on fostering collaborative thinking and delivering strong foundations for your projects. Discover the reliability and expertise that define Sri Thiruthani Builders and Foundation as your go-to construction partner in Chennai.",
    buttonLink: "/about",
    buttonText: "Learn More",
    };


    const counters = [
      { count: 20, title: 'Completed Projects' },
      { count: 20, title: 'Happy Clients' },
      { count: 10, title: 'Qualified Engineers' },
      { count: 35, title: 'Years Experience' },
    ];

  </script>

  <GoogleOneTapLogin/>


<div class="rs-banner banner-style3">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="content-wrap">
            <span class="sub-title wow fadeInDown ">{bannerContent.subheading}</span>
            <h1 class="title wow fadeInLeft">
              {bannerContent.heading}
            </h1>
            <div class="description wow fadeInLeft2">
              <p>
                {bannerContent.description}
              </p>
            </div>
            <div class="banner-btn mt-40 wow fadeInUp">
              <a class="readon more orange-btn2" href={bannerContent.buttonLink}>{bannerContent.buttonText}</a>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="banner-images">
            <img src={bannerContent.imageUrl} alt="Images">
          </div>
        </div>
      </div>
    </div>
  </div>

  <ContactForm1/>
  
 
  <!-- <div class="rs-contact contact-style2">
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
                            <option>Services</option>
                            <option>General construction</option>
                            <option>Modified Roofing</option>
                            <option>Metal Roofing</option>
                            <option>Vegetative Roofing</option>
                            <option>Inspections</option>
                            <option>Siding & Gutters</option>
                        </select>
                    
                    </span>
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
</div> -->



  <div class="rs-about about-style1 bg1 pt-120 pb-120 md-pt-80 md-pb-80">
    <div class="container">
      <div class="row y-middle">
        <div class="col-lg-6 md-mb-50">
          <div class="images-part">
            <img src={aboutContent.imageUrl} alt="About">
          </div>
        </div>
        <div class="col-lg-6 pl-50 md-pl-15">
          <div class="sec-title">
            <span class="sub-text">
              <img src="assets/images/shape-1.png" alt="Images">
              {aboutContent.subtitle}
            </span>
            <h2 class="title pb-20">
              {aboutContent.title}
            </h2>
            <p style="text-align: justify;
            text-justify: inter-word;" class="desc pb-37">
              {aboutContent.description}
            </p>
            <div class="row mt-47 md-mt-25">
              <div class="col-lg-6 col-md-4 sm-mb-30">
                <div class="btn-part">
                  <a class="readon more know" href={aboutContent.buttonLink}>{aboutContent.buttonText}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <Services/>

 
  
  <div class="rs-counter counter-style1 bg2 pt-120 pb-120 md-pt-80 md-pb-80">
    <div class="container">
      <div class="row y-middle">
        <div class="col-lg-6 md-mb-50">
            <div class="sec-title">
                <span class="sub-text yellow-color">
                  <img src="assets/images/shape-1.png" alt="Images">
                  Building Dreams Together
                </span>
                <h2 class="title white-color pb-20">
                  Sri Thiruthani Builders and Foundation<br>
                  Transforming Visions into Reality
                </h2>
                <p class="desc desc2 pb-45">
                  Sri Thiruthani Builders and Foundation is committed to providing top-notch construction solutions.
                  With a focus on quality, innovation, and client satisfaction, we turn your dreams into tangible structures.
                  Let's build a better future together!
                </p>
                <div class="btn-part">
                  <a class="readon more contact" href="contact.html">Contact Now</a>
                </div>
              </div>
              
        </div>
        <div class="col-lg-6">
          <div class="row">
            {#each counters as { count, title }}
              <div class="col-xl-6 col-md-6 col-sm-6 mb-30">
                <div class="rs-counter-list">
                  <div class="count-text">
                    <div class="count-number">
                      <span class="rs-count">{count}</span>
                      <span class="prefix">+</span>
                    </div>
                    <span class="title">{title}</span>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
  

  <Faq/>

  <Testimonials/>