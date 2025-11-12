// translate.js

// 1. Create a dictionary for all your translations
const translations = {
  // English translations
  en: {
    page_title: "VillageMart - Your Local Market, Online",
    logo: "VillageMart",
    nav_home: "Home",
    nav_about: "About Us",
    nav_products: "Products",
    nav_contact: "Contact",
    nav_cart: "Cart",
    hero_title: "Your Local Market,<br> Now Online.",
    hero_slogan: "Connecting rural vendors with nearby buyers. Fresh products, local community, trusted relationships—all in one marketplace.",
    hero_tagline: "Serving your local community in English | Marathi | Hindi",
    hero_btn_shop: "Start Shopping Now",
    hero_btn_vendor: "Become a Vendor",
    how_it_works_title: "How VillageMart Works",
    how_it_works_subtitle: "Simple, local, and community-focused. We bring rural vendors and buyers together in just a few easy steps.",
    step1_title: "Vendors List Products",
    step1_desc: "Local farmers and artisans showcase their fresh produce, handmade goods, and services on our platform.",
    step2_title: "Buyers Discover Locally",
    step2_desc: "Community members browse and discover products from trusted vendors in their area.",
    step3_title: "Easy Pickup & Delivery",
    step3_desc: "Convenient pickup locations or local delivery options make getting your products simple.",
    step4_title: "Community Grows",
    step4_desc: "Every purchase supports local vendors and strengthens the community economy.",
    categories_title: "Shop by Category",
    categories_subtitle: "Explore a variety of items from local vendors",
    cat_essentials_title: "Daily Essentials",
    cat_essentials_desc: "Fresh groceries and everyday items delivered to your doorstep.",
    cat_garments_title: "Garments",
    cat_garments_desc: "Clothing for all ages, sourced from local markets.",
    cat_electronics_title: "Electronics",
    cat_electronics_desc: "Gadgets and devices available from trusted local sellers.",
    cat_textiles_title: "Textiles",
    cat_textiles_desc: "Traditional clothing, fabrics, and home textiles.",
    cat_tools_title: "Tools & Equipment",
    cat_tools_desc: "Farming tools, household items, and rural equipment.",
    cat_dairy_title: "Dairy & Breakfast",
    cat_dairy_desc: "find everything you need for a perfect morning.",
    explore_btn: "Explore All Categories",
    vendors_title: "Our Local Vendors",
    vendors_subtitle: "Meet the trusted sellers bringing their shops online with VillageMart.",
    vendor1_name: "Shree Fresh Mart",
    vendor1_cat: "Groceries & Daily Essentials",
    vendor2_name: "Laxmi Garments",
    vendor2_cat: "Traditional & Modern Wear",
    vendor3_name: "TechBazaar",
    vendor3_cat: "Electronics & Gadgets",
    testimonials_title: "What People Say",
    testimonial1_text: "\"VillageMart made it easy to buy fresh vegetables from local farmers. Very convenient!\"",
    testimonial1_name: "Ramesh Patil",
    testimonial2_text: "\"I uploaded my handmade garments and got my first order within 2 days. Great for small vendors!\"",
    testimonial2_name: "Sunita Joshi",
    testimonial3_text: "\"The pre-order feature for mangoes is amazing. Got fresh Alphonso delivered on time!\"",
    testimonial3_name: "Rahul Deshmukh",
    cta_text: "Join hundreds of happy buyers & vendors on VillageMart!",
    cta_btn: "Get Started",
    footer_tagline: "Connecting rural vendors with local buyers. Fresh from the village, to your home.",
    footer_quick_links_title: "Quick Links",
    footer_shop_all: "Shop All Products",
    footer_shop_by_cat_title: "Shop by Category",
    footer_cat_fruits_veg: "Fruits & Vegetables",
    footer_cat_grains: "Grains",
    footer_cat_dairy: "Dairy",
    footer_cat_handicrafts: "Handicrafts",
    footer_newsletter_title: "Stay Updated",
    footer_newsletter_text: "Subscribe to our newsletter for the latest products and offers.",
    footer_newsletter_placeholder: "Your email address",
    footer_newsletter_button: "Subscribe"
  },
  // Marathi translations
  mr: {
    page_title: "व्हिलेजमार्ट - तुमची स्थानिक बाजारपेठ, आता ऑनलाइन",
    logo: "व्हिलेजमार्ट",
    nav_home: "होम",
    nav_about: "आमच्याबद्दल",
    nav_products: "उत्पादने",
    nav_contact: "संपर्क",
    nav_cart: "कार्ट",
    hero_title: "तुमची स्थानिक बाजारपेठ,<br> आता ऑनलाइन.",
    hero_slogan: "ग्रामीण विक्रेत्यांना जवळच्या खरेदीदारांशी जोडणे. ताजी उत्पादने, स्थानिक समुदाय, विश्वसनीय संबंध - सर्व एकाच बाजारपेठेत.",
    hero_tagline: "तुमच्या स्थानिक समुदायाची सेवा इंग्रजी | मराठी | हिंदी मध्ये",
    hero_btn_shop: "आता खरेदी सुरू करा",
    hero_btn_vendor: "विक्रेता बना",
    how_it_works_title: "व्हिलेजमार्ट कसे कार्य करते",
    how_it_works_subtitle: "सोपे, स्थानिक आणि समुदाय-केंद्रित. आम्ही ग्रामीण विक्रेते आणि खरेदीदारांना काही सोप्या चरणांमध्ये एकत्र आणतो.",
    step1_title: "विक्रेते उत्पादने सूचीबद्ध करतात",
    step1_desc: "स्थानिक शेतकरी आणि कारागीर त्यांची ताजी उत्पादने, हस्तनिर्मित वस्तू आणि सेवा आमच्या प्लॅटफॉर्मवर प्रदर्शित करतात.",
    step2_title: "खरेदीदार स्थानिक पातळीवर शोधतात",
    step2_desc: "समुदायाचे सदस्य त्यांच्या क्षेत्रातील विश्वसनीय विक्रेत्यांकडून उत्पादने ब्राउझ करतात आणि शोधतात.",
    step3_title: "सुलभ पिकअप आणि डिलिव्हरी",
    step3_desc: "सोयीस्कर पिकअप स्थाने किंवा स्थानिक वितरण पर्याय तुमची उत्पादने मिळवणे सोपे करतात.",
    step4_title: "समुदाय वाढतो",
    step4_desc: "प्रत्येक खरेदी स्थानिक विक्रेत्यांना समर्थन देते आणि समुदाय अर्थव्यवस्था मजबूत करते.",
    categories_title: "श्रेणीनुसार खरेदी करा",
    categories_subtitle: "स्थानिक विक्रेत्यांकडून विविध वस्तूंचे अन्वेषण करा",
    cat_essentials_title: "दैनंदिन आवश्यक वस्तू",
    cat_essentials_desc: "ताज्या किराणा आणि रोजच्या वस्तू तुमच्या दारापर्यंत पोहोचवल्या जातात.",
    cat_garments_title: "कपडे",
    cat_garments_desc: "सर्व वयोगटांसाठी कपडे, स्थानिक बाजारातून मिळवलेले.",
    cat_electronics_title: "इलेक्ट्रॉनिक्स",
    cat_electronics_desc: "विश्वसनीय स्थानिक विक्रेत्यांकडून उपलब्ध गॅझेट्स आणि उपकरणे.",
    cat_textiles_title: "वस्त्रोद्योग",
    cat_textiles_desc: "पारंपारिक कपडे, कापड आणि घरातील कापड.",
    cat_tools_title: "साधने आणि उपकरणे",
    cat_tools_desc: "शेतीची साधने, घरगुती वस्तू आणि ग्रामीण उपकरणे.",
    cat_dairy_title: "सेवा",
    cat_dairy_desc: "दुरुस्ती, सल्ला आणि अधिक सारख्या स्थानिक सेवा.",
    explore_btn: "सर्व श्रेणी एक्सप्लोर करा",
    vendors_title: "आमचे स्थानिक विक्रेते",
    vendors_subtitle: "व्हिलेजमार्टसह त्यांची दुकाने ऑनलाइन आणणाऱ्या विश्वसनीय विक्रेत्यांना भेटा.",
    vendor1_name: "श्री फ्रेश मार्ट",
    vendor1_cat: "किराणा आणि दैनंदिन आवश्यक वस्तू",
    vendor2_name: "लक्ष्मी गारमेंट्स",
    vendor2_cat: "पारंपारिक आणि आधुनिक पोशाख",
    vendor3_name: "टेकबाजार",
    vendor3_cat: "इलेक्ट्रॉनिक्स आणि गॅझेट्स",
    testimonials_title: "लोक काय म्हणतात",
    testimonial1_text: "\"व्हिलेजमार्टमुळे स्थानिक शेतकऱ्यांकडून ताज्या भाज्या खरेदी करणे सोपे झाले. खूप सोयीस्कर!\"",
    testimonial1_name: "रमेश पाटील",
    testimonial2_text: "\"मी माझे हस्तनिर्मित कपडे अपलोड केले आणि मला 2 दिवसात माझी पहिली ऑर्डर मिळाली. लहान विक्रेत्यांसाठी उत्तम!\"",
    testimonial2_name: "सुनीता जोशी",
    testimonial3_text: "\"आंब्यांसाठी प्री-ऑर्डर वैशिष्ट्य आश्चर्यकारक आहे. ताजे हापूस वेळेवर वितरित झाले!\"",
    testimonial3_name: "राहुल देशमुख",
    cta_text: "व्हिलेजमार्टवर शेकडो आनंदी खरेदीदार आणि विक्रेत्यांमध्ये सामील व्हा!",
    cta_btn: "सुरुवात करा",
    footer_tagline: "ग्रामीण विक्रेत्यांना स्थानिक खरेदीदारांशी जोडत आहे. थेट गावातून, तुमच्या घरापर्यंत.",
    footer_quick_links_title: "द्रुत दुवे",
    footer_shop_all: "सर्व उत्पादने खरेदी करा",
    footer_shop_by_cat_title: "श्रेणीनुसार खरेदी करा",
    footer_cat_fruits_veg: "फळे आणि भाज्या",
    footer_cat_grains: "धान्य",
    footer_cat_dairy: "दुग्धजन्य पदार्थ",
    footer_cat_handicrafts: "हस्तकला",
    footer_newsletter_title: "अपडेटेड रहा",
    footer_newsletter_text: "नवीनतम उत्पादने आणि ऑफर्ससाठी आमच्या वृत्तपत्राची सदस्यता घ्या.",
    footer_newsletter_placeholder: "तुमचा ईमेल पत्ता",
    footer_newsletter_button: "सदस्यता घ्या"
  },
  // Hindi translations
  hi: {
    page_title: "विलेजमार्ट - आपका स्थानीय बाज़ार, अब ऑनलाइन",
    logo: "विलेजमार्ट",
    nav_home: "होम",
    nav_about: "हमारे बारे में",
    nav_products: "उत्पाद",
    nav_contact: "संपर्क",
    nav_cart: "कार्ट",
    hero_title: "आपका स्थानीय बाज़ार,<br> अब ऑनलाइन।",
    hero_slogan: "ग्रामीण विक्रेताओं को आस-पास के खरीदारों से जोड़ना। ताज़ा उत्पाद, स्थानीय समुदाय, विश्वसनीय संबंध - सब एक ही बाज़ार में।",
    hero_tagline: "आपके स्थानीय समुदाय की सेवा अंग्रेजी | मराठी | हिंदी में",
    hero_btn_shop: "अभी खरीदारी शुरू करें",
    hero_btn_vendor: "विक्रेता बनें",
    how_it_works_title: "विलेजमार्ट कैसे काम करता है",
    how_it_works_subtitle: "सरल, स्थानीय और समुदाय-केंद्रित। हम ग्रामीण विक्रेताओं और खरीदारों को कुछ ही आसान चरणों में एक साथ लाते हैं।",
    step1_title: "विक्रेता उत्पाद सूचीबद्ध करते हैं",
    step1_desc: "स्थानीय किसान और कारीगर हमारे मंच पर अपने ताजे उत्पाद, हस्तनिर्मित सामान और सेवाएं प्रदर्शित करते हैं।",
    step2_title: "खरीदार स्थानीय रूप से खोजते हैं",
    step2_desc: "समुदाय के सदस्य अपने क्षेत्र के विश्वसनीय विक्रेताओं से उत्पादों को ब्राउज़ और खोजते हैं।",
    step3_title: "आसान पिकअप और डिलीवरी",
    step3_desc: "सुविधाजनक पिकअप स्थान या स्थानीय डिलीवरी विकल्प आपके उत्पादों को प्राप्त करना आसान बनाते हैं।",
    step4_title: "समुदाय बढ़ता है",
    step4_desc: "हर खरीद स्थानीय विक्रेताओं का समर्थन करती है और समुदाय की अर्थव्यवस्था को मजबूत करती है।",
    categories_title: "श्रेणी के अनुसार खरीदारी करें",
    categories_subtitle: "स्थानीय विक्रेताओं से विभिन्न प्रकार की वस्तुओं का अन्वेषण करें",
    cat_essentials_title: "दैनिक आवश्यकताएं",
    cat_essentials_desc: "ताजा किराने का सामान और रोजमर्रा की वस्तुएं आपके दरवाजे पर पहुंचाई जाती हैं।",
    cat_garments_title: "वस्त्र",
    cat_garments_desc: "स्थानीय बाजारों से प्राप्त सभी उम्र के लिए कपड़े।",
    cat_electronics_title: "इलेक्ट्रानिक्स",
    cat_electronics_desc: "विश्वसनीय स्थानीय विक्रेताओं से उपलब्ध गैजेट्स और उपकरण।",
    cat_textiles_title: "कपड़ा",
    cat_textiles_desc: "पारंपरिक कपड़े, कपड़े, और घर के वस्त्र।",
    cat_tools_title: "उपकरण और उपकरण",
    cat_tools_desc: "खेती के उपकरण, घरेलू सामान, और ग्रामीण उपकरण।",
    cat_dairy_title: "सेवाएं",
    cat_dairy_desc: "मरम्मत, परामर्श, और बहुत कुछ जैसी स्थानीय सेवाएं।",
    explore_btn: "सभी श्रेणियां एक्सप्लोर करें",
    vendors_title: "हमारे स्थानीय विक्रेता",
    vendors_subtitle: "विलेजमार्ट के साथ अपनी दुकानें ऑनलाइन लाने वाले विश्वसनीय विक्रेताओं से मिलें।",
    vendor1_name: "श्री फ्रेश मार्ट",
    vendor1_cat: "किराना और दैनिक आवश्यकताएं",
    vendor2_name: "लक्ष्मी गारमेंट्स",
    vendor2_cat: "पारंपरिक और आधुनिक पहनावा",
    vendor3_name: "टेकबाजार",
    vendor3_cat: "इलेक्ट्रॉनिक्स और गैजेट्स",
    testimonials_title: "लोग क्या कहते हैं",
    testimonial1_text: "\"विलेजमार्ट ने स्थानीय किसानों से ताजी सब्जियां खरीदना आसान बना दिया। बहुत सुविधाजनक!\"",
    testimonial1_name: "रमेश पाटिल",
    testimonial2_text: "\"मैंने अपने हस्तनिर्मित वस्त्र अपलोड किए और 2 दिनों के भीतर अपना पहला ऑर्डर प्राप्त किया। छोटे विक्रेताओं के लिए बढ़िया!\"",
    testimonial2_name: "सुनीता जोशी",
    testimonial3_text: "\"आमों के लिए प्री-ऑर्डर सुविधा अद्भुत है। ताजा अल्फांसो समय पर वितरित किया गया!\"",
    testimonial3_name: "राहुल देशमुख",
    cta_text: "विलेजमार्ट पर सैकड़ों खुश खरीदारों और विक्रेताओं से जुड़ें!",
    cta_btn: "शुरू हो जाओ",
    footer_tagline: "ग्रामीण विक्रेताओं को स्थानीय खरीदारों से जोड़ना। सीधे गाँव से, आपके घर तक।",
    footer_quick_links_title: "क्विक लिंक्स",
    footer_shop_all: "सभी उत्पाद खरीदें",
    footer_shop_by_cat_title: "श्रेणी के अनुसार खरीदें",
    footer_cat_fruits_veg: "फल और सब्जियां",
    footer_cat_grains: "अनाज",
    footer_cat_dairy: "डेयरी",
    footer_cat_handicrafts: "हस्तशिल्प",
    footer_newsletter_title: "अपडेटेड रहें",
    footer_newsletter_text: "नवीनतम उत्पादों और ऑफ़र के लिए हमारे न्यूज़लेटर की सदस्यता लें।",
    footer_newsletter_placeholder: "आपका ईमेल पता",
    footer_newsletter_button: "सब्सक्राइब करें"
    
  }
};

// 2. Get the language selector element
const languageSelector = document.querySelector(".language-select");

// 3. Function to update the content based on the selected language
const setLanguage = (lang) => {
  const elementsToTranslate = document.querySelectorAll("[data-translate]");
  const placeholderElements = document.querySelectorAll("[data-translate-placeholder]");

  // Translate regular text content
  elementsToTranslate.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });
  placeholderElements.forEach((element) => {
    const key = element.getAttribute("data-translate-placeholder");
    if (translations[lang] && translations[lang][key]) {
      element.placeholder = translations[lang][key];
    }
  });
  // Update the lang attribute of the <html> tag for accessibility
  document.documentElement.lang = lang;

  // Save the selected language to localStorage to remember the user's choice
  localStorage.setItem("language", lang);
};

// 4. Add an event listener to the language selector
languageSelector.addEventListener("change", (event) => {
  setLanguage(event.target.value);
});

// 5. Check for a saved language in localStorage when the page loads
document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("language") || "en"; // Default to English
  setLanguage(savedLanguage);
  
  // Make sure the dropdown shows the correct saved language
  languageSelector.value = savedLanguage;
});