console.log("Script loaded! ID is:", new URLSearchParams(window.location.search).get('id'));
// 1. Define your product data
const products = {
    'logos': {
        title: 'Logos Digitais',
        description: 'Oferecemos o serviço de criação de logos digitais com entrega em múltiplos formatos (PNG com fundo transparente, JPG e Vetor). Nossas artes são otimizadas para garantir nitidez máxima em dispositivos móveis e desktops. Ideal para novos empreendedores, criadores de conteúdo e empresas que buscam renovar sua presença online com agilidade e qualidade técnica.',
        image: 'src/assets/montanha1.jpg'
    },
    'digitais': {
        title: 'Cartões e Cardápios Digitais',
        description: 'Banners de alta resolução para eventos...',
        image: 'src/assets/montanha2.jpg'
    },
    'cartoes': {
        title: 'Cartões de Visita Profissionais',
        description: 'Cartões de visita de alta qualidade...',
        image: 'src/assets/montanha3.jpg'
    },
    'panfletos': {
        title: 'Panfletos Profissionais',
        description: 'Panfletos de alta resolução para eventos...',
        image: 'src/assets/montanha4.jpg'
    },
    'adesivos': {
        title: 'Adesivos Profissionais',
        description: 'Adesivos de alta resolução para eventos...',
        image: 'src/assets/montanha1.jpg'
    },
    'banners': {
        title: 'Banners Profissionais',
        description: 'Banners de alta resolução para eventos...',
        image: 'src/assets/montanha2.jpg'
    },
    // Add the rest of your products here...
};

// 2. Get the ID from the URL (e.g., ?id=logos)
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// 3. Update the page content
if (productId && products[productId]) {
    const item = products[productId];
    
    // Make sure these IDs exist on your product page elements!
    document.getElementById('product-title').innerText = item.title;
    document.getElementById('product-desc').innerText = item.description;
    document.getElementById('product-img').src = item.image;
} else {
    // Optional: What to show if no product is found
    document.body.innerHTML = "<h1>Produto não encontrado</h1>";
}