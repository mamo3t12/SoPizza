// بيانات البيتزا والصورة الخاصة بكل منتج.
// مهم: أسماء الملفات هنا مطابقة للأسماء الموجودة داخل فولدر Images.

const pizzas = [
    { name: "ميكس جبن", medium: 190, large: 220, image: "Images/بيتزا ميكس جبن.jpg" },
    { name: "خضراوات", medium: 180, large: 220, image: "Images/بيتزا خضروات.jpg" },
    { name: "مارجريتا", medium: 150, large: 180, image: "Images/بيتزا مارجريتا.jpg" },
    { name: "برجر لحم", medium: 210, large: 250, image: "Images/بيتزا برجر لحم.webp" },
    { name: "هوت دوج", medium: 180, large: 220, image: "Images/بيتزا هوت دوج.jpg" },
    { name: "سوبريم", medium: 220, large: 260, image: "Images/بيتزا سوبريم.jpg" },
    { name: "ميكس فراخ", medium: 230, large: 270, image: "Images/بيتزا ميكس فراخ.jpg" },
    { name: "بيستو", medium: 220, large: 260, image: "Images/بيتزا بيستو.webp" },
    { name: "بسطرمة", medium: 220, large: 260, image: "Images/بيتزا بسطرمة.jpg" },
    { name: "بسطرمة كيري", medium: 260, large: 300, image: "Images/بيتزا بسطرمة كيري .jpg" },
    { name: "سجق", medium: 200, large: 240, image: "Images/بيتزا سجق.jpg" },
    { name: "سجق كيري", medium: 255, large: 295, image: "Images/بيتزا سجق كيري.jpg" },
    { name: "سلامي", medium: 190, large: 230, image: "Images/بيتزا سلامي.jpg" },
    { name: "تشيكن رانش", medium: 220, large: 260, image: "Images/بيتزا تشيكن رانش.jpg" },
    { name: "تشيكن باربكيو", medium: 220, large: 260, image: "Images/بيتزا تشكين باربيكيو .jpg" },
    { name: "كرسبي", medium: 220, large: 260, image: "Images/بيتزا كرسبي.jpg" },
    { name: "تونة", medium: 220, large: 270, image: "Images/بيتزا تونه.jpg" },
    { name: "سي فود", price: 400, image: "Images/بيتزا سي فود.jpg" }
];

// الإضافات
const additions = [
    { name: "موتزاريلا", price: 40 },
    { name: "ريكفورد", price: 50 },
    { name: "كيري", price: 50 },
    { name: "رومي أو شيدر", price: 30 },
    { name: "مشروم", price: 30 },
    { name: "فراخ", price: 40 },
    { name: "لحم", price: 40 },
    { name: "جمبري", price: 80 },
    { name: "أصابع كابوريا", price: 80 },
    { name: "خضروات", price: 20 }
];

// الصوصات
const sauces = [
    { name: "سويت تشيلي", price: 40 },
    { name: "هوت صوص", price: 15 },
    { name: "كاتشب", price: 15 },
    { name: "باربيكيو", price: 20 },
    { name: "شيدر", price: 25 },
    { name: "رانش", price: 25 }
];

// المقبلات
const appetizers = [
    { name: "حلقات بصل" },
    { name: "استربس" },
    { name: "أصابع موتزاريلا" },
    { name: "كولسلو" },
    { name: "هالبينو" },
    { name: "خيار مخلل" }
];

// البطاطس
const potatoes = [
    { name: "بطاطس سادة", price: 50 },
    { name: "بطاطس جامبو سادة", price: 85 },
    { name: "بطاطس جبنة", price: 70 },
    { name: "بطاطس جامبو جبنة", price: 110 },
    { name: "بطاطس فرايد تشيكن", price: 130 }
];

// عرض البيتزا
function renderPizzas() {
    const pizzaList = document.getElementById("pizza-list");
    if (!pizzaList) return;

    pizzaList.innerHTML = pizzas.map((pizza) => {
        const priceHTML = pizza.price !== undefined
            ? `
                <div class="price-box">
                    <span>السعر</span>
                    <strong>${pizza.price} جنيه</strong>
                </div>
            `
            : `
                <div class="price-box">
                    <span>وسط</span>
                    <strong>${pizza.medium} جنيه</strong>
                </div>
                <div class="price-box">
                    <span>كبير</span>
                    <strong>${pizza.large} جنيه</strong>
                </div>
            `;

        return `
            <article class="pizza-card">
                <div class="pizza-image">
                    <img
                        src="${pizza.image}"
                        alt="بيتزا ${pizza.name}"
                        loading="lazy"
                        onerror="this.style.display='none'; this.parentElement.classList.add('image-missing');"
                    >
                </div>
                <div class="pizza-info">
                    <h4>${pizza.name}</h4>
                    <div class="prices">
                        ${priceHTML}
                    </div>
                </div>
            </article>
        `;
    }).join("");
}

// عرض الإضافات والصوصات والمقبلات والبطاطس
function renderSimpleMenu(items, elementId) {
    const container = document.getElementById(elementId);
    if (!container) return;

    container.innerHTML = items.map(item => {
        const priceHTML = item.price !== undefined
            ? `<strong>${item.price} جنيه</strong>`
            : `<span class="no-price">اسأل عن السعر</span>`;

        return `
            <article class="simple-card">
                <h4>${item.name}</h4>
                ${priceHTML}
            </article>
        `;
    }).join("");
}

// تشغيل عرض المنيو
renderPizzas();
renderSimpleMenu(additions, "additions-list");
renderSimpleMenu(sauces, "sauces-list");
renderSimpleMenu(appetizers, "appetizers-list");
renderSimpleMenu(potatoes, "potatoes-list");

// قائمة الموبايل
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("show");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "إغلاق القائمة" : "فتح القائمة");
    });

    // إغلاق القائمة بعد اختيار أي رابط
    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("show");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "فتح القائمة");
        });
    });
}

// تمييز القسم المختار
document.querySelectorAll(".category-link").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelectorAll(".category-link").forEach(item => {
            item.classList.remove("active");
        });
        link.classList.add("active");
    });
});
