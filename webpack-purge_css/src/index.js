import './main.scss'

// Import only the Bootstrap components we need
// Alternatively, you could `import * as bootstrap from 'bootstrap'`.
import { Offcanvas, Popover } from 'bootstrap';
// import Offc from 'bootstrap/js/dist/offcanvas';

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach(popover => {
        new Popover(popover)
    })
