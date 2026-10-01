# Project: RetailBoost website (static HTML/CSS/JS, no backend)

Hosted on GitHub Pages with custom domain retailboost.in (CNAME file).
File and folder names are case-sensitive on the live site.

## Files
- index.html: landing page (customer shop categories first, then B2B EMI pitch for retailers)
- style.css: shared design system (CSS variables at the top)
- script.js: welcome screen, nav, counters, hero slider
- mobiles.html: customer mobile shop (search, Brand dropdown with multi-select, sort)
- cart.html: cart, mobile+OTP login, saved addresses, order sent to WhatsApp
- admin.html: DEMO admin dashboard (sample data only, see below)
- loan-application.html: 6-step loan form (not edited, still exists)
- Images/: category photos (capital I). Mobiles.jpeg, Accessories.jpeg, Smart Watch.jpeg,
  Laptop.jpeg, Tablets.jpeg, Gadgets.jpeg. Round badge on black square background,
  category name printed inside the image.

## Theme
Orange theme (shop colour). Main orange #EA580C / #F97316, amber accent #F59E0B,
cream background #FFF7ED, dark brown text #2B1305, footer #7C2D12. Font: Poppins.
Always use the CSS variables in style.css (--primary, --accent, --surface-3 ...).
The navbar is bright orange, so buttons on it are white with orange text.

## Decisions already made
- Welcome screen (script.js) must not be modified.
- The "Apply Loan" buttons (navbar + loan banner on index.html) do NOT open
  loan-application.html. They open a "Coming Soon" popup (openComingSoon in index.html).
  Do not re-enable them unless asked.
- index.html order: welcome screen -> navbar -> "Shop by Category" -> hero slideshow -> rest.
  Category cards use the photos from Images/ (round crop). Only Mobiles links to
  mobiles.html (highlighted orange card with "Shop now"). Other categories and the
  4 feature tiles show "Coming Soon". Category pop-in animation starts after the
  welcome screen closes.
- mobiles.html: no price filter. Brand filter is a dropdown with checkboxes
  (multi-select). Sort by: Popularity, Price low/high, Rating, Discount.
- Product list is the P array at the top of the script in mobiles.html. All names,
  prices, ratings are SAMPLE data; product images are emoji placeholders.
- Cart/login state is in localStorage (keys rb_cart, rb_session, rb_users).
- The OTP is a DEMO: the code is shown on screen, no SMS is sent. Do not present
  it as real security.
- Place Order opens WhatsApp (919187627737) with the order and address.
  There is no payment gateway. Orders are NOT saved anywhere yet.
- admin.html is a DEMO: demo login (admin@retailboost.in / demo1234, shown on screen,
  not secure), sample orders generated in the page, status changes saved only in the
  browser (localStorage key rb_admin_demo_status). "Sold"/revenue = Delivered orders only.
  All data goes through the Auth and DataAPI objects at the top of its script; only
  those get replaced when moving to AWS.
- No admin button/link anywhere on the public site. Open admin.html directly.

## Working rules
- Make only the changes I ask for. Do not touch or refactor anything else.
- Do not break existing functionality. Tell me what you plan to change before
  you edit, then show me what changed.
- Keep it plain HTML/CSS/JS (no frameworks) unless I say otherwise.

## Likely next steps
- Replace sample products with my real phones, prices and photos
- Move backend to AWS (not Firebase): DynamoDB for orders, API Gateway + Lambda,
  Cognito for real admin login and real customer OTP. cart.html will save each order
  before opening WhatsApp; admin.html will read real orders.
- More shop categories (Accessories, Smart Watch, Laptops, Tablets, Gadgets)
