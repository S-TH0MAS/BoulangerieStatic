import './hero.css';

class AppHero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="relative w-full">
        <div class="max-w-[1280px] mx-auto p-4 sm:p-8 lg:p-12">
          <div class="relative overflow-hidden rounded-2xl min-h-[560px] flex items-center justify-center text-center bg-cover bg-center" data-alt="Close up of freshly baked golden brown bread loaves on a rustic wooden table" style='background-image: linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBg83rt0_e2g8vGSYVLY5k-MMzt215yrnBbHmrRxJPjb3Z5XWUG_svWIKGPkMQVAaSr8ylvSww9vtOH3auiaIcA2E_93pZ-S9gz4dnLk2ZIdh4YGSVkPVQHCi3wo38FupuYSdGeGZNYwvIyJRL8MBA-T355MJAb7ZRVLFDkum5LDyxkFFDjxZ_J6eVM0gMwgxlD9uGb5k120y3h5bn86aq-QaY54GzUb9LDr-klJhq_13Lm24VPqTP8pnuSBfYh_hrZKao66nSgDA");'>
            <div class="relative z-10 max-w-3xl px-6 flex flex-col gap-6 items-center">
              <span class="inline-block px-3 py-1 bg-primary/90 text-white text-xs font-bold tracking-wider uppercase rounded-full backdrop-blur-sm">
                Since 1985
              </span>
              <h1 class="text-white text-5xl sm:text-6xl md:text-7xl font-black leading-tight tracking-[-0.033em] drop-shadow-lg">
                Bienvenue à <br/><span class="text-primary">Boulangerie Dupont</span>
              </h1>
              <p class="text-gray-100 text-lg sm:text-xl font-normal leading-relaxed max-w-xl mx-auto drop-shadow-md">
                Experience the aroma of authentic French baking. Freshly baked artisan breads and custom cakes made daily in the heart of the city.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 mt-4">
                <button class="bg-primary hover:bg-[#d66e0d] text-white h-12 px-8 rounded-full text-base font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2" id="reservations">
                  <span class="material-symbols-outlined text-xl">cake</span>
                  <span>Reserve a Cake</span>
                </button>
                <button class="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 h-12 px-8 rounded-full text-base font-bold transition-all flex items-center justify-center gap-2">
                  <span>View Menu</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('app-hero', AppHero);
