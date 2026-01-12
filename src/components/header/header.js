import './header.css';

class AppHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="w-full bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-[#e6dccf] dark:border-[#3a2d20]">
        <div class="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 py-4 flex items-center justify-between">
          <div class="flex items-center gap-3 text-[#1b140d] dark:text-white">
            <div class="size-8 text-primary flex items-center justify-center">
              <span class="material-symbols-outlined text-3xl">bakery_dining</span>
            </div>
            <h2 class="text-xl font-bold leading-tight tracking-[-0.015em] hidden sm:block">Boulangerie Dupont</h2>
          </div>
          <nav class="hidden md:flex items-center gap-8">
            <a class="text-[#1b140d] dark:text-[#e6dccf] text-sm font-medium hover:text-primary transition-colors" href="#products">Products</a>
            <a class="text-[#1b140d] dark:text-[#e6dccf] text-sm font-medium hover:text-primary transition-colors" href="#reservations">Reservations</a>
            <a class="text-[#1b140d] dark:text-[#e6dccf] text-sm font-medium hover:text-primary transition-colors" href="#hours">Hours</a>
            <a class="text-[#1b140d] dark:text-[#e6dccf] text-sm font-medium hover:text-primary transition-colors" href="#contact">Contact</a>
          </nav>
          <div class="flex items-center gap-4">
            <button class="md:hidden p-2 text-[#1b140d] dark:text-white">
              <span class="material-symbols-outlined">menu</span>
            </button>
            <a class="hidden sm:flex bg-primary hover:bg-[#d66e0d] text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm hover:shadow-md" href="#reservations">
              Order Online
            </a>
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define('app-header', AppHeader);
