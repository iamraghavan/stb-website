<script>

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
  
    let mapSrc = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15544.240881138434!2d80.1373213!3d13.09537!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5262341e297f37%3A0x1f696ee53a7e128d!2sSri%20Thiruthani%20Foundation!5e0!3m2!1sen!2sin!4v1702042013601!5m2!1sen!2sin";


let testimonials = [
  {
    name: 'Arun',
    title: 'Happy Resident',
    review: 'Sri Thiruthani Builders and Foundation made my dream home a reality. The attention to detail and commitment to quality are unmatched. I am grateful for their excellent service.',
  },
  {
    name: 'Ram Kumar',
    title: 'Satisfied Homeowner',
    review: 'Choosing Sri Thiruthani Builders and Foundation was the best decision for my family. The construction process was smooth, and the end result exceeded our expectations. Highly recommended!',
  },

  {
    name: 'Sudhakaran Govindrajan',
    title: 'Proud Homeowner',
    review: 'Thanks to Sri Thiruthani Builders and Foundation, I now own a beautiful home. The craftsmanship and design are impressive. I couldn’t be happier with the results.',
  },
  {
    name: 'Kavitha',
    title: 'Happy Resident',
    review: 'Living in a Sri Thiruthani Builders and Foundation home is a joy. The attention to detail and quality construction create a comfortable and luxurious living space.',
  },
  {
    name: 'Iniyan Tamizhamaran',
    title: 'Satisfied Customer',
    review: 'I had a positive experience with Sri Thiruthani Builders and Foundation. Their team is knowledgeable, and the construction process was hassle-free. Highly recommended for anyone looking for a reliable builder.',
  },
  {
    name: 'Abdul Rahman',
    title: 'Delighted Homeowner',
    review: 'My experience with Sri Thiruthani Builders and Foundation has been fantastic. From design to completion, they were attentive to my needs, and the final result is my dream home.',
  },
];

  </script>
  
  <style>
    /* Add your styles here */
  </style>
  
  <div id="rs-testimonial" class="rs-testimonial testimonial-style3 bg3 pt-120 pb-120 md-pt-80 md-pb-80">
    <div class="container">
      <div class="sec-title2 text-center mb-55 md-mb-35">
        <span class="sub-title">Testimonials</span>
        <h2 class="title pb-25">
          Customers reviews
        </h2>
        <div class="heading-border-line"></div>
      </div>
  
      <div class="rs-carousel owl-carousel owl-loaded owl-drag" data-loop="true" data-items="3" data-margin="30" data-autoplay="true" data-hoverpause="true" data-autoplay-timeout="5000" data-smart-speed="800" data-dots="false" data-nav="false" data-nav-speed="false" data-center-mode="false" data-mobile-device="1" data-mobile-device-nav="false" data-mobile-device-dots="false" data-ipad-device="2" data-ipad-device-nav="false" data-ipad-device-dots="true" data-ipad-device2="2" data-ipad-device-nav2="false" data-ipad-device-dots2="true" data-md-device="3" data-md-device-nav="false" data-md-device-dots="true">
        {#each testimonials as { name, title, review } (name)}
          <div class="owl-item">
            <div class="testi-item">
              <div class="testi-wrap">
                <div class="item-contents">
                  <p>{review}</p>
                </div>
                <div class="testi-information">
                  <div class="testi-name">{name}</div>
                  <span class="testi-title">{title}</span>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
  


  
  <div class="rs-contact contact-style1 bg3">
    <div class="row">
      <div class="col-lg-4 offset-2 con-left-6">
        <div class="contact-section">
          <div class="contact-map">
  <iframe src={mapSrc} title="Google Map"></iframe>

          </div>
        </div>
      </div>
      <div class="col-lg-4 pr-50 md-pr-15 con-right-6 md-mt-50">
        <div class="contact-box-item">
          {#each contactDetails as { title, address, emails, phoneNumbers, icon } (title)}
          <div class="contact-box mb-20">
            <div class="contact-icon">
              <img src={icon} alt="images">
            </div>
            <div class="content-text">
              <h4 class="title"><a href="/">{title}</a></h4>
              {#if address}
                <p class="services-txt">{address}</p>
              {/if}
              {#if emails}
                <p class="services-txt">
                  {#each emails as email (email)}
                    <a href={"mailto:" + email}>{email}</a><br>
                  {/each}
                </p>
              {/if}
              {#if phoneNumbers}
                <p class="services-txt">
                  {#each phoneNumbers as phoneNumber (phoneNumber)}
                    <a href={"tel:" + phoneNumber}>{phoneNumber}</a><br>
                  {/each}
                </p>
              {/if}
            </div>
          </div>
          {/each}
        </div>
      </div>
      <div class="col-lg-4 contact-right-img"></div>
    </div>
  </div>
  