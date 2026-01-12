import './specials.css';

const products = [
  {
    title: "Sourdough Loaf",
    description: "Naturally leavened with a crispy crust and chewy interior.",
    price: "$8.50",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCu-9o6iuge3NcxHuvWcQpvbxEHnFKFkfYK5h6m61ApBBNG-4IfDDIu31Ut86jd-LeKxQdEOlmlLIqwI3IRr3IaPG1micNmbE7AIm6eS7ReP_YRrRjD75JBMqteFbcuGfTMCPV3phjUs1woNbDmsJJSGdrYf4HjYQMHAtFVFQNep_yBsIjZAJzNd2agpT0sStB7pmoJkb_g5LNP-p5LCkfWsfmdfUTdboNkMGaUD_qUOx2KElGP9gwFSAp-bFJVVNPi3QJhHdmTKQ",
    imageAlt: "Rustic sourdough loaf with flour dusting on a wooden board"
  },
  {
    title: "Classic Croissants",
    description: "Layers of pure butter for the perfect flaky texture.",
    price: "$4.00",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlQZhvSlottbiJIin9GISBVR8SqpXdsyZLTWKUd4dAJ0qWf9SEY65J3xCKJYI3GqaBT2yrnAVPFiDL81Y04-Le5PamRm526fZjp4_9CBHwHJ7Ns8CADPwTkXp5gvzu0aX8g0iKmQ7qw4QNsZ6dUseVcqRITsRh7Dpz-10QDx13i-JkTY7Oe4_rwCNYiWIhD4vAqFKB4SEf32R4XmZV4mEmVq1MF37g7Pvb8RGQgcBPE8KD-V4_LUc_LfiVKghPZGysiu-w2ZsmSQ",
    imageAlt: "Golden buttery croissants stacked on a wire cooling rack"
  },
  {
    title: "Pain au Chocolat",
    description: "Rich dark chocolate batons wrapped in buttery pastry.",
    price: "$4.50",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBulCx2FU58oYsInnZ6pxqzPuxsg87FU_NfZIMgGCp1aSQ5DT14vCZJsSub4BoO9I_2g1IfSK5lUHMHZLIsQ3I2UxxNaSsavUxvdmLbHsWn9Lz65HQ9A0WFA_gI9E3-W6PiEgLN9D6juplQW8SUCwDDkyFySD9uu_kfyc0NY1ub8TOS7tDzyit2sLX17DoMxJHbwfoRNGqIEeTuzRhIAt9Q_vfl738HCvNzWkWY9EzKZHjW5MtwmMGTEJi0SHn-5A7syG5YO2fHDg",
    imageAlt: "Chocolate filled pastry dusted with powdered sugar"
  },
  {
    title: "Seasonal Fruit Tart",
    description: "Vanilla crème pâtissière topped with fresh local berries.",
    price: "$6.00",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCjFSod3As16znkiPCNdV2VcCYG1HxUptCFPFo1RtUTptAascmueETqlwR0cGvEmQoeG-2Z6PeH9paqET2FwC2R9vjP9yXgLxh-0kA2LOtzyiUjey8rBNA03FFSqt8gHFwfER1zr1Z_a2UC6scye2ViiniQx2kBmfGc3w9vccre8gln-607bVZZmLawPe0VwxtMRP_muhT89VBxZUv2QBi23wDMrEUVPe2jLvA_y_8EBE9vJ_sYVBAbj1JzJur1ipBGdqZ1wEAeA",
    imageAlt: "Close up of a fruit tart with fresh strawberries and blueberries"
  }
];

class AppSpecials extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <!-- Specials Header -->
      <section class="max-w-[1280px] mx-auto w-full px-4 sm:px-8 lg:px-12 pt-12 pb-6" id="products">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#e6dccf] dark:border-[#3a2d20] pb-6">
          <div>
            <span class="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">Our Menu</span>
            <h2 class="text-[#1b140d] dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em]">Daily Specials</h2>
          </div>
          <p class="text-[#6b5a4a] dark:text-[#a89a8d] max-w-md text-base md:text-right">
            Baked fresh every morning using traditional methods and locally sourced ingredients.
          </p>
        </div>
      </section>

      <!-- Image Grid / Products -->
      <section class="max-w-[1280px] mx-auto w-full px-4 sm:px-8 lg:px-12 pb-16">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" id="products-grid">
            ${products.map(product => `
            <div class="group flex flex-col gap-4">
                <div class="overflow-hidden rounded-xl aspect-[4/5] relative">
                    <div class="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110" 
                        data-alt="${product.imageAlt}" 
                        style='background-image: url("${product.imageUrl}");'>
                    </div>
                    <div class="absolute top-3 right-3 bg-white dark:bg-[#3a2d20] px-3 py-1 rounded-full text-sm font-bold shadow-md text-[#1b140d] dark:text-white">
                        ${product.price}
                    </div>
                </div>
                <div>
                    <h3 class="text-[#1b140d] dark:text-white text-lg font-bold leading-tight mb-1 group-hover:text-primary transition-colors">${product.title}</h3>
                    <p class="text-[#6b5a4a] dark:text-[#a89a8d] text-sm leading-normal">${product.description}</p>
                </div>
            </div>
            `).join('')}
        </div>
      </section>
    `;
  }
}

customElements.define('app-specials', AppSpecials);
