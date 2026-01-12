import './footer.css';

class AppFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-[#1b140d] text-[#e6dccf] py-16 mt-auto border-t-4 border-primary" id="contact">
        <div class="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <!-- Brand Column -->
            <div class="flex flex-col gap-4">
              <div class="flex items-center gap-2 text-white mb-2">
                <span class="material-symbols-outlined text-primary text-3xl">bakery_dining</span>
                <h3 class="text-xl font-bold">Boulangerie Dupont</h3>
              </div>
              <p class="text-[#a89a8d] text-sm leading-relaxed">
                Bringing the warmth of fresh baking to your table since 1985. Visit us for a taste of authentic tradition.
              </p>
              <div class="flex gap-4 mt-4">
                <a class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" href="#">
                  <span class="font-bold">X</span>
                </a>
                <a class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" href="#">
                  <span class="font-bold">In</span>
                </a>
                <a class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" href="#">
                  <span class="font-bold">Fb</span>
                </a>
              </div>
            </div>
            <!-- Hours Column -->
            <div class="flex flex-col gap-4" id="hours">
              <h4 class="text-white text-lg font-bold">Opening Hours</h4>
              <ul class="space-y-2 text-sm text-[#a89a8d]">
                <li class="flex justify-between border-b border-white/10 pb-2">
                  <span>Monday - Friday</span>
                  <span class="text-white">7:00 AM - 7:00 PM</span>
                </li>
                <li class="flex justify-between border-b border-white/10 pb-2">
                  <span>Saturday</span>
                  <span class="text-white">8:00 AM - 6:00 PM</span>
                </li>
                <li class="flex justify-between border-b border-white/10 pb-2">
                  <span>Sunday</span>
                  <span class="text-primary font-bold">Closed</span>
                </li>
              </ul>
            </div>
            <!-- Contact Column -->
            <div class="flex flex-col gap-4">
              <h4 class="text-white text-lg font-bold">Contact Us</h4>
              <ul class="space-y-4 text-sm text-[#a89a8d]">
                <li class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-primary shrink-0">location_on</span>
                  <span>123 Baker Street, <br/>Culinary District, NY 10012</span>
                </li>
                <li class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-primary shrink-0">call</span>
                  <a class="hover:text-primary transition-colors" href="tel:+1234567890">+1 (555) 123-4567</a>
                </li>
                <li class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-primary shrink-0">mail</span>
                  <a class="hover:text-primary transition-colors" href="mailto:hello@boulangeriedupont.com">hello@boulangeriedupont.com</a>
                </li>
              </ul>
            </div>
            <!-- Map Column -->
            <div class="flex flex-col gap-4 h-full">
              <h4 class="text-white text-lg font-bold">Find Us</h4>
              <div class="bg-white/5 rounded-lg w-full h-40 relative overflow-hidden group">
                <div class="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity" data-alt="Map showing location in New York City" data-location="New York City" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBrjZlDEh8MeUUyAibBBGQ5WyIkuOoJLmkh9mlzWGipkH4CrsxyjBafx9FagKNpEc2dE4jtuXggDqmYGVE8OhAmPFXzSEgDgAeRBWW1FNothtIzlotkWKNVAjyfcQWbzcsIV-GHxti2j24QPhkjRIoxX6HHfyj-GJHLeZaguUNpqVzDqk1kWTXtlqXwhQ4CjstKU920cejL32WHO6W6KFTunp7AHnAewKNobZaD8QDalqiHGd-GruL2C51U8f5XXqwKkBGgsyHBkw");'>
                </div>
                <a class="absolute inset-0 flex items-center justify-center" href="#">
                  <span class="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                    <span class="material-symbols-outlined text-sm">directions</span>
                    Get Directions
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="mt-12 pt-8 border-t border-white/10 text-center text-xs text-[#6b5a4a]">
            <p>© 2024 Boulangerie Dupont. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('app-footer', AppFooter);
