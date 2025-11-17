import "./MobileMenu.css";

export default function MobileMenu({ active, onActivePage }) {
  return (
    <div class="md:hidden flex h-full flex-col justify-between border-e border-gray-100 bg-AshGray/50 rounded-xl px-4 py-2 m-3 text-theme">
      <div class="px-4 py-6 ">
        <ul class="mt-1 space-y-1">
          <li>
            <a
              href="#"
              className={`block rounded-lg px-4 py-2 text-sm font-medium ${
                active === "Home" ? "mobile-active" : ""
              }`}
              onClick={() => onActivePage("Home")}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#"
              className={`block rounded-lg px-4 py-2 text-sm font-medium ${
                active === "Calendar" ? "mobile-active" : ""
              }`}
              onClick={() => onActivePage("Calendar")}
            >
              Calendar
            </a>
          </li>

          <li>
            <a
              href="#"
              className={`block rounded-lg px-4 py-2 text-sm font-medium ${
                active === "Contact" ? "mobile-active" : ""
              }`}
              onClick={() => onActivePage("Contact")}
            >
              Contact
            </a>
          </li>

          <li>
            <details class="group [&amp;_summary::-webkit-details-marker]:hidden">
              <summary
                class={`flex items-center justify-between rounded-lg px-4 py-2 ${
                  active === "Account" ? "mobile-active" : ""
                }`}
              >
                <span class="text-sm font-medium"> Account </span>

                <span class="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </summary>

              <ul class="mt-2 space-y-1 px-4">
                <li>
                  <a
                    href="#"
                    class="block rounded-lg px-4 py-2 text-sm font-medium "
                  >
                    Details
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    class="block rounded-lg px-4 py-2 text-sm font-medium "
                  >
                    Security
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    class="w-full rounded-lg px-4 py-2 [text-align:_inherit] text-sm font-medium "
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
