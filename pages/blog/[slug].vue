<template>
  <main class="min-h-[calc(100vh-var(--header-height))]">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div class="relative border-b border-gray-200 dark:border-gray-800 py-8">
        <div
          class="mb-3 text-sm/6 font-semibold text-primary flex items-center gap-1.5"
        >
          <span
            class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10 text-primary-500 dark:text-primary-400 ring-1 ring-inset ring-primary-500 dark:ring-primary-400 ring-opacity-25 dark:ring-opacity-25"
            >Economy, Information Technology</span
          ><span class="text-gray-500 dark:text-gray-400">·</span
          ><time class="text-gray-500 dark:text-gray-400">Feb 1, 2024</time>
        </div>
        <div class="flex flex-col lg:flex-row items-start gap-6">
          <div class="flex-1">
            <div
              class="flex flex-col lg:flex-row lg:items-center lg:justify-between"
            >
              <h1
                class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight"
              >
                The Rise of Cryptocurrencies
              </h1>
            </div>
            <div class="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Transforming Finance and Economy
            </div>

            <div class="flex flex-wrap items-center gap-3 mt-4">
              <a
                class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
                href="https://twitter.com/benjamincanac"
                rel="noopener noreferrer"
                target="_blank"
                ><span
                  class="relative inline-flex items-center justify-center flex-shrink-0 rounded-full h-5 w-5 text-[10px]"
                  ><img
                    class="rounded-full h-5 w-5 text-[10px]"
                    alt="Emily pasek"
                    src="https://i.pravatar.cc/128?u=5"
                /></span>
                Emily pasek</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8">
        <BlogContent/>

        <BlogNavigation />
      </div>
    </div>
  </main>
</template>

<style>
:root {
  --header-height: 4rem;
}

.prose {
  color: var(--tw-prose-body);
}

.prose :where(p):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  margin-bottom: 1.25em;
  margin-top: 1.25em;
}

.prose
  :where([class~="lead"]):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  color: var(--tw-prose-lead);
  font-size: 1.25em;
  line-height: 1.6;
  margin-bottom: 1.2em;
  margin-top: 1.2em;
}

.prose :where(a):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  border-bottom: 1px solid #0000;
  color: var(--tw-prose-links);
  font-weight: 500;
  text-decoration: none;
}

.prose
  :where(strong):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  color: var(--tw-prose-bold);
  font-weight: 600;
}

.prose
  :where(a strong):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  color: inherit;
}

.prose
  :where(blockquote strong):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  color: inherit;
}

.prose
  :where(thead th strong):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  color: inherit;
}

.prose :where(ol):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  list-style-type: decimal;
  margin-bottom: 1.25em;
  margin-top: 1.25em;
  padding-inline-start: 1.625em;
}

.prose
  :where(ol[type="A"]):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  list-style-type: upper-alpha;
}

.prose
  :where(ol[type="a"]):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  list-style-type: lower-alpha;
}

.prose
  :where(ol[type="A s"]):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  list-style-type: upper-alpha;
}

.prose
  :where(ol[type="a s"]):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  list-style-type: lower-alpha;
}

.prose
  :where(ol[type="I"]):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  list-style-type: upper-roman;
}

.prose
  :where(ol[type="i"]):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  list-style-type: lower-roman;
}

.prose
  :where(ol[type="I s"]):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  list-style-type: upper-roman;
}

.prose
  :where(ol[type="i s"]):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  list-style-type: lower-roman;
}

.prose
  :where(ol[type="1"]):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  list-style-type: decimal;
}

.prose :where(ul):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  list-style-type: disc;
  margin-bottom: 1.25em;
  margin-top: 1.25em;
  padding-inline-start: 1.625em;
}

.prose
  :where(ol > li):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  )::marker {
  color: var(--tw-prose-counters);
  font-weight: 400;
}

.prose
  :where(ul > li):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  )::marker {
  color: var(--tw-prose-bullets);
}

.prose :where(dt):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  color: var(--tw-prose-headings);
  font-weight: 600;
  margin-top: 1.25em;
}

.prose :where(hr):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  border-color: var(--tw-prose-hr);
  border-top-width: 1px;
  margin-bottom: 3em;
  margin-top: 3em;
}

.prose
  :where(blockquote):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  border-inline-start-color: var(--tw-prose-quote-borders);
  border-inline-start-width: 0.25rem;
  color: var(--tw-prose-quotes);
  font-style: italic;
  font-weight: 500;
  margin-bottom: 1.6em;
  margin-top: 1.6em;
  padding-inline-start: 1em;
  quotes: "\201C""\201D""\2018""\2019";
}

.prose :where(h1):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  color: var(--tw-prose-headings);
  font-size: 2.25em;
  font-weight: 800;
  line-height: 1.1111111;
  margin-bottom: 0.8888889em;
  margin-top: 0;
}

.prose
  :where(h1 strong):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  color: inherit;
  font-weight: 900;
}

.prose :where(h2):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  color: var(--tw-prose-headings);
  font-size: 1.5em;
  font-weight: 700;
  line-height: 1.3333333;
  margin-bottom: 1em;
  margin-top: 2em;
}

.prose
  :where(h2 strong):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  color: inherit;
  font-weight: 800;
}

.prose :where(h3):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  color: var(--tw-prose-headings);
  font-size: 1.25em;
  font-weight: 600;
  line-height: 1.6;
  margin-bottom: 0.6em;
  margin-top: 1.6em;
}

.prose
  :where(h3 strong):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  color: inherit;
  font-weight: 700;
}

.prose :where(h4):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  color: var(--tw-prose-headings);
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 0.5em;
  margin-top: 1.5em;
}

.prose
  :where(h4 strong):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  color: inherit;
  font-weight: 700;
}

.prose :where(img):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  margin-bottom: 2em;
  margin-top: 2em;
}

.prose
  :where(picture):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  display: block;
  margin-bottom: 2em;
  margin-top: 2em;
}

.prose :where(video):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  margin-bottom: 2em;
  margin-top: 2em;
}

.prose :where(kbd):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  border-radius: 0.3125rem;
  box-shadow: 0 0 0 1px rgb(var(--tw-prose-kbd-shadows) / 10%),
    0 3px 0 rgb(var(--tw-prose-kbd-shadows) / 10%);
  color: var(--tw-prose-kbd);
  font-family: inherit;
  font-size: 0.875em;
  font-weight: 500;
  padding-inline-end: 0.375em;
  padding-bottom: 0.1875em;
  padding-top: 0.1875em;
  padding-inline-start: 0.375em;
}

.prose :where(code):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  background-color: var(--tw-prose-pre-bg);
  border: 1px solid var(--tw-prose-pre-border);
  border-radius: 0.375rem;
  color: var(--tw-prose-code);
  display: inline-block;
  font-size: 0.875em;
  font-weight: 600;
  padding: 0 0.375rem;
}

.prose
  :where(a code):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  border: 1px dashed var(--tw-prose-pre-border);
  color: var(--tw-prose-code);
}

.prose
  :where(h1 code):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  color: inherit;
}

.prose
  :where(h2 code):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  color: inherit;
  font-size: 0.875em;
}

.prose
  :where(h3 code):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  color: inherit;
  font-size: 0.9em;
}

.prose
  :where(h4 code):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  color: inherit;
}

.prose
  :where(blockquote code):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  color: inherit;
}

.prose
  :where(thead th code):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  color: inherit;
}

.prose :where(pre):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  background-color: var(--tw-prose-pre-bg) !important;
  border: 1px solid var(--tw-prose-pre-border);
  border-radius: 0.375rem;
  color: var(--tw-prose-pre-code) !important;
  font-size: 0.875em;
  font-weight: 400;
  line-height: 1.7142857;
  margin-bottom: 1.7142857em;
  margin-top: 1.7142857em;
  overflow-x: auto;
  padding-inline-end: 1.1428571em;
  padding-bottom: 0.8571429em;
  padding-top: 0.8571429em;
  padding-inline-start: 1.1428571em;
  white-space: pre-wrap;
  word-break: break-word;
}

.prose
  :where(pre code):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  background-color: initial;
  border-radius: 0;
  border-width: 0;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  padding: 0;
}

.prose
  :where(pre code):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ):before {
  content: none;
}

.prose
  :where(pre code):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ):after {
  content: none;
}

.prose :where(table):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  display: block;
  font-size: 0.875em;
  line-height: 1.7142857;
  margin-bottom: 2em;
  margin-top: 2em;
  overflow-x: auto;
  table-layout: auto;
  width: 100%;
}

.prose :where(thead):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  border-bottom-color: var(--tw-prose-th-borders);
  border-bottom-width: 1px;
}

.prose
  :where(thead th):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  color: var(--tw-prose-headings);
  font-weight: 600;
  padding-inline-end: 0.5714286em;
  padding-bottom: 0.5714286em;
  padding-inline-start: 0.5714286em;
  vertical-align: bottom;
}

.prose
  :where(tbody tr):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  border-bottom-color: var(--tw-prose-td-borders);
  border-bottom-width: 1px;
}

.prose
  :where(tbody tr:last-child):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  border-bottom-width: 0;
}

.prose
  :where(tbody td):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  vertical-align: initial;
}

.prose :where(tfoot):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  border-top-color: var(--tw-prose-th-borders);
  border-top-width: 1px;
}

.prose
  :where(tfoot td):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  vertical-align: top;
}

.prose
  :where(th, td):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  text-align: start;
}

.prose
  :where(figure > *):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  margin-bottom: 0;
  margin-top: 0;
}

.prose
  :where(figcaption):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  color: var(--tw-prose-captions);
  font-size: 0.875em;
  line-height: 1.4285714;
  margin-top: 0.8571429em;
}

.prose {
  --tw-prose-body: #374151;
  --tw-prose-headings: #111827;
  --tw-prose-lead: #4b5563;
  --tw-prose-links: #111827;
  --tw-prose-bold: #111827;
  --tw-prose-counters: #6b7280;
  --tw-prose-bullets: #d1d5db;
  --tw-prose-hr: #e5e7eb;
  --tw-prose-quotes: #111827;
  --tw-prose-quote-borders: #e5e7eb;
  --tw-prose-captions: #6b7280;
  --tw-prose-kbd: #111827;
  --tw-prose-kbd-shadows: 17 24 39;
  --tw-prose-code: #111827;
  --tw-prose-pre-code: #e5e7eb;
  --tw-prose-pre-bg: #1f2937;
  --tw-prose-th-borders: #d1d5db;
  --tw-prose-td-borders: #e5e7eb;
  --tw-prose-invert-body: #d1d5db;
  --tw-prose-invert-headings: #fff;
  --tw-prose-invert-lead: #9ca3af;
  --tw-prose-invert-links: #fff;
  --tw-prose-invert-bold: #fff;
  --tw-prose-invert-counters: #9ca3af;
  --tw-prose-invert-bullets: #4b5563;
  --tw-prose-invert-hr: #374151;
  --tw-prose-invert-quotes: #f3f4f6;
  --tw-prose-invert-quote-borders: #374151;
  --tw-prose-invert-captions: #9ca3af;
  --tw-prose-invert-kbd: #fff;
  --tw-prose-invert-kbd-shadows: 255 255 255;
  --tw-prose-invert-code: #fff;
  --tw-prose-invert-pre-code: #d1d5db;
  --tw-prose-invert-pre-bg: #00000080;
  --tw-prose-invert-th-borders: #4b5563;
  --tw-prose-invert-td-borders: #374151;
  font-size: 1rem;
  line-height: 1.75;
}

.prose
  :where(picture > img):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  margin-bottom: 0;
  margin-top: 0;
}

.prose :where(li):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  margin-bottom: 0.5em;
  margin-top: 0.5em;
}

.prose
  :where(ol > li):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  padding-inline-start: 0.375em;
}

.prose
  :where(ul > li):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  padding-inline-start: 0.375em;
}

.prose
  :where(.prose > ul > li p):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  margin-bottom: 0.75em;
  margin-top: 0.75em;
}

.prose
  :where(.prose > ul > li > p:first-child):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  margin-top: 1.25em;
}

.prose
  :where(.prose > ul > li > p:last-child):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  margin-bottom: 1.25em;
}

.prose
  :where(.prose > ol > li > p:first-child):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  margin-top: 1.25em;
}

.prose
  :where(.prose > ol > li > p:last-child):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  margin-bottom: 1.25em;
}

.prose
  :where(ul ul, ul ol, ol ul, ol ol):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  margin-bottom: 0.75em;
  margin-top: 0.75em;
}

.prose :where(dl):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  margin-bottom: 1.25em;
  margin-top: 1.25em;
}

.prose :where(dd):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  margin-top: 0.5em;
  padding-inline-start: 1.625em;
}

.prose
  :where(hr + *):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  margin-top: 0;
}

.prose
  :where(h2 + *):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  margin-top: 0;
}

.prose
  :where(h3 + *):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  margin-top: 0;
}

.prose
  :where(h4 + *):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  margin-top: 0;
}

.prose
  :where(thead th:first-child):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  padding-inline-start: 0;
}

.prose
  :where(thead th:last-child):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  padding-inline-end: 0;
}

.prose
  :where(tbody td, tfoot td):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  padding-inline-end: 0.5714286em;
  padding-bottom: 0.5714286em;
  padding-top: 0.5714286em;
  padding-inline-start: 0.5714286em;
}

.prose
  :where(tbody td:first-child, tfoot td:first-child):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  padding-inline-start: 0;
}

.prose
  :where(tbody td:last-child, tfoot td:last-child):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  padding-inline-end: 0;
}

.prose
  :where(figure):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  margin-bottom: 2em;
  margin-top: 2em;
}

.prose
  :where(.prose > :first-child):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  margin-top: 0;
}

.prose
  :where(.prose > :last-child):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  margin-bottom: 0;
}

.prose
  :where(h1, h2, h3, h4):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  font-weight: 700;
  scroll-margin-top: var(--scroll-mt);
}

.prose
  :where(h1 a, h2 a, h3 a, h4 a):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  border-bottom: none !important;
  color: inherit;
  font-weight: inherit;
}

.prose
  :where(a:hover):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  border-color: var(--tw-prose-links);
}

.prose
  :where(a:has(> code)):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  border-color: #0000 !important;
}

.prose
  :where(a:hover code):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  border-color: var(--tw-prose-links);
  color: var(--tw-prose-links);
}

.prose
  :where(input[type="checkbox"]):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  border-color: rgb(var(--color-gray-300));
  border-radius: 0.25rem;
  color: rgb(var(--color-primary-500));
  height: 1rem;
  margin-bottom: 0 !important;
  margin-top: -3.5px !important;
  width: 1rem;
}

.prose
  :where(input[type="checkbox"]):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ):focus {
  --tw-ring-offset-width: 0;
}

.prose
  :where(input[type="checkbox"]:checked):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  border-color: rgb(var(--color-primary-500));
}

.prose
  :where(input[type="checkbox"]:disabled):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  cursor: not-allowed;
  opacity: 0.5;
}

.prose
  :where(ul.contains-task-list):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  margin-left: -1.625em;
}

.prose :where(ul ul):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  padding-left: 1.5rem;
}

.prose :where(ul ol):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  padding-left: 1.5rem;
}

.prose
  :where(ul > li.task-list-item):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  padding-left: 0 !important;
}

.prose
  :where(ul > li.task-list-item input):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  margin-right: 7px;
}

.prose
  :where(ul > li.task-list-item > ul.contains-task-list):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  margin-left: 0;
}

.prose
  :where(ul > li.task-list-item a):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  margin-bottom: 0;
}

.prose
  :where(ul > li.task-list-item):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  )::marker {
  content: none;
}

.prose
  :where(ul > li > p):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  margin: 0;
}

.prose
  :where(ul > li > span.issue-badge, p > span.issue-badge):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  margin: 0 !important;
  vertical-align: text-top;
}

.prose
  :where(ul > li > button):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  ) {
  vertical-align: initial !important;
}

.prose
  :where(table code):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  display: inline-flex;
}

.prose-primary {
  --tw-prose-body: rgb(var(--color-gray-700));
  --tw-prose-headings: rgb(var(--color-gray-900));
  --tw-prose-lead: rgb(var(--color-gray-600));
  --tw-prose-links: rgb(var(--color-primary-500));
  --tw-prose-bold: rgb(var(--color-gray-900));
  --tw-prose-counters: rgb(var(--color-gray-500));
  --tw-prose-bullets: rgb(var(--color-gray-300));
  --tw-prose-hr: rgb(var(--color-gray-200));
  --tw-prose-quotes: rgb(var(--color-gray-900));
  --tw-prose-quote-borders: rgb(var(--color-gray-200));
  --tw-prose-captions: rgb(var(--color-gray-500));
  --tw-prose-code: rgb(var(--color-gray-900));
  --tw-prose-pre-code: rgb(var(--color-gray-900));
  --tw-prose-pre-bg: rgb(var(--color-gray-50));
  --tw-prose-pre-border: rgb(var(--color-gray-200));
  --tw-prose-th-borders: rgb(var(--color-gray-300));
  --tw-prose-td-borders: rgb(var(--color-gray-200));
  --tw-prose-invert-body: rgb(var(--color-gray-200));
  --tw-prose-invert-headings: #fff;
  --tw-prose-invert-lead: rgb(var(--color-gray-400));
  --tw-prose-invert-links: rgb(var(--color-primary-400));
  --tw-prose-invert-bold: #fff;
  --tw-prose-invert-counters: rgb(var(--color-gray-400));
  --tw-prose-invert-bullets: rgb(var(--color-gray-600));
  --tw-prose-invert-hr: rgb(var(--color-gray-800));
  --tw-prose-invert-quotes: rgb(var(--color-gray-100));
  --tw-prose-invert-quote-borders: rgb(var(--color-gray-700));
  --tw-prose-invert-captions: rgb(var(--color-gray-400));
  --tw-prose-invert-code: #fff;
  --tw-prose-invert-pre-code: #fff;
  --tw-prose-invert-pre-bg: rgb(var(--color-gray-800));
  --tw-prose-invert-pre-border: rgb(var(--color-gray-700));
  --tw-prose-invert-th-borders: rgb(var(--color-gray-700));
  --tw-prose-invert-td-borders: rgb(var(--color-gray-800));
}
</style>
