import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderHead, a as renderComponent, f as renderSlot, b as createAstro } from './astro/server_D4E0edJp.mjs';
import 'kleur/colors';
import 'clsx';
import { Toaster } from 'sonner';
/* empty css                         */

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const menuItems = [
    {
      name: "News",
      href: "/news"
    },
    {
      name: "Ranking",
      href: "/ranking",
      submenu: [
        {
          name: "Submenu 1",
          href: "/submenu1",
          target: "_self"
        },
        {
          name: "Submenu 2",
          href: "/submenu2",
          target: "_self"
        }
      ]
    },
    {
      name: "Feature",
      href: "/feature"
    },
    {
      name: "Download",
      href: "/download"
    },
    {
      name: "Tournaments",
      href: "/tournaments"
    },
    {
      name: "Status",
      href: "https://status.evolutionygo.com",
      target: "_blank"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="navbar bg-base-100 sticky top-0 z-50"> <div class="navbar-start"> <div class="dropdown"> <div tabindex="0" role="button" class="btn btn-ghost lg:hidden"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path> </svg> </div> <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"> ${menuItems.map(
    (item) => item.submenu ? renderTemplate`<li> <a>${item.name}</a> <ul class="p-2"> ${item.submenu.map((subitem) => renderTemplate`<li> <a${addAttribute(subitem.href, "href")}${addAttribute(subitem?.target, "target")}>${subitem.name}</a> </li>`)} </ul> </li>` : renderTemplate`<li> <a${addAttribute(item.href, "href")}${addAttribute(item?.target, "target")}>${item.name}</a> </li>`
  )} </ul> </div> <!-- <img src='/logo.svg' alt='logo' class='hidden sm:block h-16 w-auto cursor-pointer' onclick={\`window.location.href = '/'\`}/> --> <img src="/logo.svg" alt="logo" class="h-16 w-auto cursor-pointer"${addAttribute(`window.location.href = '/'`, "onclick")}> </div> <div class="navbar-center hidden lg:flex"> <ul class="menu menu-horizontal px-1"> ${menuItems.map(
    (item) => item.submenu ? renderTemplate`<li> <details> <summary>${item.name}</summary> <ul class="p-2 w-48"> ${item.submenu.map((subitem) => renderTemplate`<li> <a${addAttribute(subitem.href, "href")}${addAttribute(subitem?.target, "target")}>${subitem.name}</a> </li>`)} </ul> </details> </li>` : renderTemplate`<li> <a${addAttribute(item.href, "href")}${addAttribute(item?.target, "target")}>${item.name}</a> </li>`
  )} </ul> </div> <div class="navbar-end"> <button class="btn btn-ghost btn-circle"> <div class="indicator"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path> </svg> <span class="badge badge-xs badge-primary indicator-item"></span> </div> </button> <div class="dropdown dropdown-end"> <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar"> <div class="w-8 rounded-full ring-primary ring-offset-base-100 ring ring-offset-2"> <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"> </div> </div> <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-48 p-2 shadow"> <li> <a class="justify-between">
Profile
<span class="badge badge-sm badge-primary">New</span> </a> </li> <li><a>Settings</a></li> <li><a>Logout</a></li> </ul> </div> </div> </div>`;
}, "/Users/diego/personal/ygopro/evolutionygo-web-ranking/src/components/Navbar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer bg-base-200 text-base-content p-10"> <nav> <h6 class="footer-title">Services</h6> <a class="link link-hover">Branding</a> <a class="link link-hover">Design</a> <a class="link link-hover">Marketing</a> <a class="link link-hover">Advertisement</a> </nav> <nav> <h6 class="footer-title">Company</h6> <a class="link link-hover">About us</a> <a class="link link-hover">Contact</a> <a class="link link-hover">Jobs</a> <a class="link link-hover">Press kit</a> </nav> <nav> <h6 class="footer-title">Legal</h6> <a class="link link-hover">Terms of use</a> <a class="link link-hover">Privacy policy</a> <a class="link link-hover">Cookie policy</a> </nav> </footer> <footer class="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4"> <aside class="grid-flow-col items-center"> <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current"> <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path> </svg> <p>
ACME Industries Ltd.
<br>
Providing reliable tech since 1992
</p> </aside> <nav class="md:place-self-center md:justify-self-end"> <div class="grid grid-flow-col gap-4"> <a> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"> <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path> </svg> </a> <a> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"> <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path> </svg> </a> <a> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"> <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path> </svg> </a> </div> </nav> </footer>`;
}, "/Users/diego/personal/ygopro/evolutionygo-web-ranking/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "Toaster", Toaster, { "richColors": true, "closeButton": true, "duration": 5e3, "position": "bottom-right", "client:load": true, "client:component-hydration": "load", "client:component-path": "sonner", "client:component-export": "Toaster" })} </body></html>`;
}, "/Users/diego/personal/ygopro/evolutionygo-web-ranking/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
