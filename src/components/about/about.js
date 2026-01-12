import './about.css';

class AppAbout extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="w-full bg-[#f3ede7] dark:bg-[#2a2016] py-16">
        <div class="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="order-2 md:order-1 relative rounded-2xl overflow-hidden shadow-xl aspect-video md:aspect-square lg:aspect-video" data-alt="Baker kneading dough on a floured surface with hands" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCuYvb6ku16Y6QXJolBWyLVodl3R1XcWSdg2Pcw-wNvK5kLnfT4V_NO9np8VDeyUcvP8st5pGqKSPLaqjdHOd7TxXvAiIoBVtizBjWxYHSx8xIn7WeNqY5Pjx5i97TsqYuhrUAgXxqxV4x7WlVaDkdDlBMSHWuacLvDQVIc7cFsvOXWdg_8tSU81KUmWtVHixhprfWHeVGl3Ux5F9bXrnPZt--MdGm12IynMaOvZD12L8DP75RcHzv6NAKSaflome2eeJSPR-V3HA"); background-size: cover; background-position: center;'>
            </div>
            <div class="order-1 md:order-2 flex flex-col gap-6">
              <h2 class="text-3xl font-bold text-[#1b140d] dark:text-white">Tradition in Every Bite</h2>
              <p class="text-[#6b5a4a] dark:text-[#a89a8d] text-lg leading-relaxed">
                Since 1985, Boulangerie Dupont has been serving the community with recipes passed down through generations. We believe that great bread requires time, patience, and the finest ingredients.
              </p>
              <ul class="flex flex-col gap-3 mt-2">
                <li class="flex items-center gap-3 text-[#1b140d] dark:text-white font-medium">
                  <span class="material-symbols-outlined text-primary">check_circle</span>
                  100% Organic Flour
                </li>
                <li class="flex items-center gap-3 text-[#1b140d] dark:text-white font-medium">
                  <span class="material-symbols-outlined text-primary">check_circle</span>
                  No Artificial Preservatives
                </li>
                <li class="flex items-center gap-3 text-[#1b140d] dark:text-white font-medium">
                  <span class="material-symbols-outlined text-primary">check_circle</span>
                  Baked Fresh Twice Daily
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('app-about', AppAbout);
