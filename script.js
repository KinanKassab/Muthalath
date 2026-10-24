const products = [
  {name:'إسبريسو',en:'Espresso',category:'hot',price:9,desc:'شوت قهوة مركّز، غني بالنكهة وبداية قوية ليومك.',tag:'كلاسيك',image:'photo-1510707577719-ae7c14805e3a'},
  {name:'كابتشينو',en:'Cappuccino',category:'hot',price:16,desc:'إسبريسو مع حليب مخملي ورغوة غنية ومتوازنة.',tag:'الأكثر طلباً',image:'photo-1534778101976-62847782c213'},
  {name:'كافيه لاتيه',en:'Caffè Latte',category:'hot',price:17,desc:'إسبريسو ناعم مع حليب مبخّر بطعم كريمي.',tag:'مفضل',image:'photo-1461023058943-07fcbe16d735'},
  {name:'فلات وايت',en:'Flat White',category:'hot',price:17,desc:'نكهة إسبريسو واضحة مع طبقة حليب حريرية.',tag:'',image:'photo-1570968915860-54d5c301fa9f'},
  {name:'أمريكانو',en:'Americano',category:'hot',price:12,desc:'إسبريسو مع ماء ساخن لنكهة خفيفة وواضحة.',tag:'',image:'photo-1497515114629-f71d768fd07c'},
  {name:'موكا',en:'Mocha',category:'hot',price:19,desc:'لقاء الشوكولاتة الغنية مع الإسبريسو والحليب.',tag:'',image:'photo-1578314675249-a6910f80cc4e'},
  {name:'آيس لاتيه',en:'Iced Latte',category:'cold',price:18,desc:'حليب بارد وإسبريسو وثلج لانتعاش كل يوم.',tag:'بارد',image:'photo-1461023058943-07fcbe16d735'},
  {name:'آيس أمريكانو',en:'Iced Americano',category:'cold',price:14,desc:'إسبريسو منعش مع ماء بارد ومكعبات الثلج.',tag:'بارد',image:'photo-1517701604599-bb29b565090c'},
  {name:'كولد برو',en:'Cold Brew',category:'cold',price:20,desc:'قهوة تُنقع ببطء لنكهة ناعمة ومنعشة.',tag:'',image:'photo-1517701604599-bb29b565090c'},
  {name:'سبانش لاتيه',en:'Spanish Latte',category:'special',price:21,desc:'إسبريسو وحليب مع لمسة حلاوة مميزة.',tag:'سيغنتشر',image:'photo-1570968915860-54d5c301fa9f'},
  {name:'كراميل ماكياتو',en:'Caramel Macchiato',category:'special',price:22,desc:'فانيلا وحليب وإسبريسو مع صوص الكراميل.',tag:'سيغنتشر',image:'photo-1534778101976-62847782c213'},
  {name:'آيس وايت موكا',en:'Iced White Mocha',category:'special',price:23,desc:'شوكولاتة بيضاء كريمية مع قهوة وثلج.',tag:'سيغنتشر',image:'photo-1517701604599-bb29b565090c'}
];
const grid = document.getElementById('productGrid');
const filters = document.querySelectorAll('.filter');
const toast = document.getElementById('toast');
let toastTimeout;
function renderProducts(filter='all') {
  const visible = filter === 'all' ? products : products.filter(p=>p.category===filter);
  grid.innerHTML = visible.map(p=>`<article class="product-card"><div class="product-photo"><img src="https://images.unsplash.com/${p.image}?auto=format&fit=crop&w=650&q=80" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=650&q=80'" />${p.tag?`<span class="product-tag">${p.tag}</span>`:''}</div><div class="product-info"><div class="product-name-row"><div><h3>${p.name}</h3><div class="english-name">${p.en}</div></div><span class="price">${p.price} ر.س</span></div><p>${p.desc}</p><div class="product-bottom"><span>☕ يُحضّر بكل حب</span><button type="button" data-name="${p.name}" aria-label="تفاصيل ${p.name}">+</button></div></div></article>`).join('');
}
filters.forEach(button=>button.addEventListener('click',()=>{filters.forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false')});button.classList.add('active');button.setAttribute('aria-pressed','true');renderProducts(button.dataset.filter)}));
grid.addEventListener('click',e=>{const button=e.target.closest('button[data-name]');if(!button)return;toast.textContent=`${button.dataset.name} ☕ — الطلب الإلكتروني قريباً!`;toast.classList.add('show');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>toast.classList.remove('show'),3000)});
const menuToggle=document.getElementById('menuToggle');const nav=document.getElementById('mainNav');menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'إغلاق القائمة':'فتح القائمة')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false')}));
document.getElementById('year').textContent=new Date().getFullYear();renderProducts();
