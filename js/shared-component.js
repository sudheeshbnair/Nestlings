/**
 * Shared site components (light DOM, so Bootstrap/site CSS apply as usual).
 * Edit the header or footer here once and every page picks it up.
 *
 * Usage:
 *   <site-header active="about.html"></site-header>   (active = href of current nav item)
 *   <site-footer></site-footer>
 *
 * Load this script BEFORE js/main.js so the markup exists when WOW/jQuery initialise.
 */
class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.style.display = 'block';
        this.innerHTML = `
        <!-- Spinner Start -->
        <div id="spinner" class="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50  d-flex align-items-center justify-content-center">
            <div class="spinner-grow text-primary" role="status"></div>
        </div>
        <!-- Spinner End -->


        <!-- Navbar start -->
        <div class="container-fluid border-bottom bg-light wow fadeIn fixed-top" data-wow-delay="0.1s">
            <div class="container topbar bg-primary d-none d-lg-block py-2" style="border-radius: 0 40px">
                <div class="d-flex justify-content-between">
                    <div class="top-info ps-2">
                        <small class="me-3"><i class="fas fa-map-marker-alt me-2 text-secondary"></i> <a href="#" class="text-white">NGO Quarters, Kakkanad, Kochi</a></small>
                        <!--<small class="me-3"><i class="fas fa-envelope me-2 text-secondary"></i><a href="#" class="text-white">Email@Example.com</a></small>-->
                    </div>
                    <!--<div class="top-link pe-2">
                        <a href="" class="btn btn-light btn-sm-square rounded-circle"><i class="fab fa-facebook-f text-secondary"></i></a>
                        <a href="" class="btn btn-light btn-sm-square rounded-circle"><i class="fab fa-twitter text-secondary"></i></a>
                        <a href="" class="btn btn-light btn-sm-square rounded-circle"><i class="fab fa-instagram text-secondary"></i></a>
                        <a href="" class="btn btn-light btn-sm-square rounded-circle me-0"><i class="fab fa-linkedin-in text-secondary"></i></a>
                    </div>-->
                </div>
            </div>
            <div class="container px-0">
                <nav class="navbar navbar-light navbar-expand-xl py-3">
                    <a href="index.html" class="navbar-brand"><img src="img/logo.png" srcset="img/logo.png 1x, img/logo@2x.png 2x" width="300" height="75" alt="Nestlings Premium Preschool"></a>
                    <button class="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="fa fa-bars text-primary"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav mx-auto">
                            <a href="index.html" class="nav-item nav-link">Home</a>
                            <a href="about.html" class="nav-item nav-link">About</a>
                            <a href="curriculum.html" class="nav-item nav-link">Curriculum</a>
                            <a href="gallery.html" class="nav-item nav-link">Gallery</a>
                            <!--<a href="event.html" class="nav-item nav-link">Events</a>-->
                            <!--<div class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div class="dropdown-menu m-0 bg-secondary rounded-0">
                                    <a href="blog.html" class="dropdown-item">Our Blog</a>
                                    <a href="team.html" class="dropdown-item">Our Team</a>
                                    <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                                    <a href="404.html" class="dropdown-item">404 Page</a>
                                </div>
                            </div>-->
                            <a href="contact.html" class="nav-item nav-link">Contact</a>
                        </div>
                        <div class="d-flex me-4">
                            <div id="phone-tada" class="d-flex align-items-center justify-content-center">
                                <a href="tel:+917907822232" class="position-relative wow tada" data-wow-delay=".9s" >
                                    <i class="fa fa-phone-alt text-primary fa-2x me-4"></i>
                                    <div class="position-absolute" style="top: -7px; left: 20px;">
                                        <span><i class="fa fa-comment-dots text-secondary"></i></span>
                                    </div>
                                </a>
                            </div>
                            <div class="d-flex flex-column pe-3 border-end border-primary">
                                <span class="text-primary">Have any questions?</span>
                                <a href="tel:+917907822232"><span class="text-secondary">Call: +91-7907 82 22 32</span></a>
                            </div>
                        </div>
                        
                    </div>
                </nav>
            </div>
        </div>
        <!-- Navbar End -->
        `;

        const active = this.getAttribute('active');
        if (active) {
            const link = this.querySelector(`.navbar-nav a[href="${active}"]`);
            if (link) link.classList.add('active');
        }
    }
}

class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.style.display = 'block';
        this.innerHTML = `
        <!-- Footer Start -->
        <div class="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-md-6 col-lg-4 col-xl-4">
                        <div class="footer-item">
                            <a href="index.html" class="navbar-brand"><img src="img/logo.png" srcset="img/logo.png 1x, img/logo@2x.png 2x" width="300" height="75" alt="Nestlings Premium Preschool"></a><br><br>
                            
                            <div class="footer-icon d-flex">
                                    <a  href="https://www.facebook.com/profile.php?id=61581985345252" class="btn btn-primary btn-sm-square me-3 rounded-circle text-white" target="_blank"><i class="fab fa-facebook-f"></i></a>
                                    <a href="https://www.instagram.com/nestlings_kochi/" class="btn btn-primary btn-sm-square me-3 rounded-circle text-white" target="_blank"><i class="fab fa-instagram"></i></a>
<!--                                    <a href="#" class="btn btn-primary btn-sm-square me-3 rounded-circle text-white"><i class="fab fa-twitter"></i></a>
                                    
                                    <a href="#" class="btn btn-primary btn-sm-square rounded-circle text-white"><i class="fab fa-linkedin-in"></i></a>-->
                                </div>
                                
                        </div>
                    </div>
                    
                    
                    <div class="col-md-6 col-lg-4 col-xl-4">
                        <div class="footer-item">
                        <h4 class="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">TIMING</h4>
                            <div class="d-flex flex-column p-4 ps-5 text-dark border border-primary" 
                            style="border-radius: 50% 20% / 10% 40%;">
                                <p><b>Pre-School:</b> 09:00 AM to 01:30 PM<br>Monday to Friday</p>
                                <p>-----------------------------------------</p>
                                <p><b>Day Care:</b> 08:30 AM to 07:00 PM<br>Monday to Saturday<br></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 col-xl-4">
                        <div class="footer-item">
                            <h4 class="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">LOCATION</h4>
                            <div class="d-flex flex-column align-items-start">
                                <a class="text-body mb-4"><i class="fa fa-map-marker-alt text-primary me-2"></i>NGO Quarters, Kakkanad, Kochi</a>
                                <a href="tel:+917907822232" class="text-start rounded-0 text-body mb-4"><i class="fa fa-phone-alt text-primary me-2"></i>+91-7907 82 22 32</a>
                                <a href="mailto:nestlingskochi@gmail.com" target="_blank" class="text-start rounded-0 text-body mb-4"><i class="fas fa-envelope text-primary me-2"></i>nestlingskochi@gmail.com</a>
                                <a class="text-start rounded-0 text-body mb-4"><i class="fa fa-clock text-primary me-2"></i>Monday-Saturday</a>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <!-- Footer End -->


        <!-- Copyright Start -->
        <div class="container-fluid copyright bg-dark py-4">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        <span class="text-light"><a href="#"><i class="fas fa-copyright text-light me-2"></i>Nestlings Premium Preschool</a>, All rights reserved.</span>
                    </div>
                    <div class="col-md-6 my-auto text-center text-md-end text-white">
                    </div>
                </div>
            </div>
        </div>
        <!-- Copyright End -->


        <!-- Back to Top -->
        <a href="#" class="btn btn-primary border-3 border-primary rounded-circle back-to-top"><i class="fa fa-arrow-up"></i></a>   
        `;
    }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
