import React from "react"
import { Link } from "gatsby"
import { Linkedin } from "react-bootstrap-icons"
const Footer = () => {
  return (
    <footer class="container py-5">
      <div class="row">
        <div class="col-2">
          <h5>Site Map</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <Link to="/" class="nav-link p-0 text-muted">
                Home
              </Link>
            </li>
            <li class="nav-item mb-2">
              <Link to="/about" class="nav-link p-0 text-muted">
                About
              </Link>
            </li>
            <li class="nav-item mb-2">
              <Link to="/contact" class="nav-link p-0 text-muted">
                Contact
              </Link>
            </li>
            <li class="nav-item mb-2">
              <Link to="/features" class="nav-link p-0 text-muted">
                Features
              </Link>
            </li>
            <li class="nav-item mb-2">
              <Link to="/" class="nav-link p-0 text-muted">
                Accouncements
              </Link>
            </li>
          </ul>
        </div>

        <div class="col-2">
          <h5>Features</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <Link to="/blog/Post1" class="nav-link p-0 text-muted">
                Library
              </Link>
            </li>
            <li class="nav-item mb-2">
              <Link to="/blog/Post2" class="nav-link p-0 text-muted">
                Travel
              </Link>
            </li>
            <li class="nav-item mb-2">
              <Link to="/blog/Post3" class="nav-link p-0 text-muted">
                Canteens
              </Link>
            </li>
            <li class="nav-item mb-2">
              <Link to="/blog/Post4" class="nav-link p-0 text-muted">
                Hostels
              </Link>
            </li>
            <li class="nav-item mb-2">
              <Link to="/blog/Post5" class="nav-link p-0 text-muted">
                Senior-Junior conversation
              </Link>
            </li>
          </ul>
        </div>

        <div class="col-2">
          <h5>Features</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <Link to="/blog/Post6" class="nav-link p-0 text-muted">
                Five Fold Activities
              </Link>
            </li>
            <li class="nav-item mb-2">
              <Link to="/blog/Post7" class="nav-link p-0 text-muted">
                Certificate & Diploma Programmes
              </Link>
            </li>
            <li class="nav-item mb-2">
              <Link to="/blog/Post8" class="nav-link p-0 text-muted">
                Fest
              </Link>
            </li>
            <li class="nav-item mb-2">
              <Link to="/blog/Post9" class="nav-link p-0 text-muted">
                Departments
              </Link>
            </li>
          </ul>
        </div>

        <div class="col-4 offset-1">
          <form name="contact" netlify>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of whats new and exciting from us.</p>
            <div class="d-flex w-100 gap-2">
              <label for="newsletter1" class="visually-hidden">
                Email address
              </label>
              <input
                id="newsletter1"
                type="text"
                class="form-control"
                placeholder="Email address"
              />
              <button class="btn btn-primary" type="button">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="d-flex justify-content-between py-4 my-4 border-top">
        <p>&copy; 2021 Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
