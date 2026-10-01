# Project: RetailBoost website (static HTML/CSS/JS, no backend)

## Files
- index.html: B2B landing page for mobile retailers (EMI financing pitch)
- style.css: shared design system (CSS variables at the top)
- script.js: welcome screen, nav, counters, hero slider
- mobiles.html: customer mobile shop (brand filter, sort, price filter, search)
- cart.html: cart, mobile+OTP login, saved addresses, order sent to WhatsApp
- loan-application.html: 6-step loan form (not edited, still exists)

## Theme
Orange theme (shop colour). Main orange #EA580C / #F97316, amber accent #F59E0B,
cream background #FFF7ED, dark brown text #2B1305, footer #7C2D12. Font: Poppins.
Always use the CSS variables in style.css (--primary, --accent, --surface-3 ...).
The navbar is bright orange, so buttons on it are white with orange text.

## Decisions already made
- The "Apply Loan" buttons (navbar + loan banner on index.html) do NOT open
  loan-application.html. They open a "Coming Soon" popup (openComingSoon in index.html).
  Do not re-enable them unless asked.
- index.html has a "Shop by Category" section under the hero. Only Mobiles links
  to mobiles.html. Other categories and the 4 feature tiles show "Coming Soon".
- Product list is the P array at the top of the script in mobiles.html. All names,
  prices, ratings are SAMPLE data; images are emoji placeholders.
- Cart/login state is in localStorage (keys rb_cart, rb_session, rb_users).
- The OTP is a DEMO: the code is shown on screen, no SMS is sent. Do not present
  it as real security.
- Place Order opens WhatsApp (919187627737) with the order and address.
  There is no payment gateway.

## Working rules
- Make only the changes I ask for. Do not touch or refactor anything else.
- Do not break existing functionality. Tell me what you plan to change before
  you edit, then show me what changed.
- Keep it plain HTML/CSS/JS (no frameworks) unless I say otherwise.

## Likely next steps
- Replace sample products with my real phones, prices and photos
- Real OTP login (Firebase Phone Auth) and saved addresses in a database
- More shop categories (Accessories, Smart Watch, Laptops, Tablets, Gadgets)