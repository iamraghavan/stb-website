<script>
    const services = [
    { name: "All Type of Building Construction", link: "construction.html" },
    { name: "Interiors", link: "interiors.html" },
    { name: "Renovation", link: "renovation.html" },
    { name: "Architectural Planning (2D & 3D)", link: "architectural-planning.html" },
    { name: "Bank Loan Estimation", link: "bank-loan-estimation.html" },
  ];
  
  let contactDetails = [
      {
        title: 'Chennai office',
        address: 'No :71/3 T.N.H.B Ayyappakam Chennai-77',
        icon: 'assets/images/contact/style1/icons/1.png',
      },
      {
        title: 'Email us',
        emails: ['srithiruthanifoundation@gmail.com', 'enquiry@srithiruthanifoundation.com'],
        icon: 'assets/images/contact/style1/icons/2.png',
      },
      {
        title: 'Call us',
        phoneNumbers: [' (+91) 86089 05570', '(+91) 86089 05570'],
        icon: 'assets/images/contact/style1/icons/3.png',
      },
    ];
  

  
    const navigationLinks = [
      { text: "Home", link: "index.html" },
      { text: "About", link: "about.html" },
      { text: "Services", link: "services.html" },
      { text: "Pages", link: "/" },
      { text: "Blog", link: "blog.html" },
      { text: "Contact", link: "contact.html" },
    ];
  </script>
  

<footer id="rs-footer" class="rs-footer footer-main-home">
    <div class="footer-top">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 pr-20 md-pr-15 md-mb-20">
                    <div class="footer-logo mb-51 md-mb-30">
                        <a href="index.html"><img src="assets/images/logo-white.png" alt="sri thiruthani builders and foundation"></a>
                    </div>
                    <div class="textwidget">
                        <p class="pb-20">Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor in cididunt ut labore.</p>
                        <p class="pb-25"><strong>Opening Hours</strong> : Monday – Sat: 9am to 6pm</p>
                    </div>
                    <ul class="footer-social md-mb-30">  
                        <li><a href="/"><i class="fa fa-facebook"></i></a></li>                     
                        <li><a href="/"><i class="fa fa-twitter"></i></a></li>                     
                        <li><a href="/"><i class="fa fa-pinterest-p"></i></a></li>                     
                        <li><a href="/"><i class="fa fa-instagram"></i></a></li>                     
                      </ul>
                </div>
                <div class="col-lg-4 md-mb-10">
                    <h3 class="footer-title">Contact Info</h3>
                    <ul class="address-widget">
                      {#each contactDetails as { title, address, emails, phoneNumbers, icon }}
                        <li>
                          <i class="fi fi-rr-map-marker-home"></i>
                          <div class="desc">
                            {#if address}
                              {address}
                            {/if}
                            {#if emails}
                              {#each emails as email}
                                <a href="mailto:{email}">{email}</a><br>
                              {/each}
                            {/if}
                            {#if phoneNumbers}
                              {#each phoneNumbers as phoneNumber}
                                <a href="tel:{phoneNumber}">{phoneNumber}</a><br>
                              {/each}
                            {/if}
                          </div>
                        </li>
                      {/each}
                    </ul>
                  </div>
                <div class="col-lg-3 md-mb-10">
                    <h3 class="footer-title">Our Services</h3>
                    <ul class="site-map">
                        {#each services as { name, link }}
    <li><a href={link}>{name}</a></li>
  {/each}
                    </ul>
                </div>
                <div class="col-lg-2">
                    <h3 class="footer-title">Newsletter</h3>
                    <p class="widget-desc">Tetur adipiscing elit, sed do eiusmod tempor in cididunt ut labore.</p>
                    <p>
                        <input type="email" name="email" placeholder="Your Email Address" required="">
                        <input type="submit" value="Subscribe Now">
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="container">                    
            <div class="row y-middle">
                <div class="col-lg-6 md-mb-10 text-lg-end text-center order-last">
                    <ul class="copy-right-menu">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="/">Pages</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="col-lg-6">
                    <div class="copyright text-lg-start text-center">
                        <p>© 2022 Konstruk.  Designed By <a href="https://devsdesign.net" target="blank">Devsdesign</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>