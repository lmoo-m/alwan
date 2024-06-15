const order = (product) => {
    const linkToWhatsapp = `https://wa.me/62882008937262?text=Halo, saya ingin membeli paket ${product}`;

    window.open(linkToWhatsapp, "_blank");
};

export default order;
