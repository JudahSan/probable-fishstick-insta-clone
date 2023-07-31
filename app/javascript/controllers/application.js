import { Application } from "@hotwired/stimulus"

// app/javascript/packs/application.js

import 'swiper/swiper-bundle.css';
import Swiper from 'swiper';
window.Swiper = Swiper;

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
