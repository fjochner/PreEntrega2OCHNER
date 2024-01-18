const productos = [
    {
        id: `bib001`,
        nombre: `Biblioteca "Agustina"`,
        precio: 30000,
        descripcion: "Biblioteca hecha con madera Pitiribi",
        medidas: "Alto: 1,70m - Ancho: 0,90m - Profundidad: 0,30m",
        categoria: "biblioteca",
        imagen: "/img/Biblioteca1.webp",
    },
    {
        id: `bib002`,
        nombre: `Biblioteca "Delfina"`,
        precio: 32000,
        descripcion: "Biblioteca hecha con madera Pitiribi",
        medidas: "Alto: 1,70m - Ancho: 1,00m - Profundidad: 0,30m",
        categoria: "biblioteca",
        imagen: "/img/Biblioteca2.webp",
    },
    {
        id: `bib003`,
        nombre: `Biblioteca "Camila"`,
        precio: 40000,
        descripcion: "Biblioteca hecha con madera Pitiribi",
        medidas: "Alto: 1,80m - Ancho: 1,20m - Profundidad: 0,40m",
        categoria: "biblioteca",
        imagen: "/img/Biblioteca3.webp",
    },
    {
        id: `rac101`,
        nombre: `Rack "Alfonsina"`,
        precio: 45000, descripcion: "Rack para TV hecho con madera Pitiribi",
        medidas: "Alto: 0,50m - Ancho: 2,10m - Profundidad: 0,35m",
        categoria: "rack",
        imagen: "/img/Rack1.webp",
    },
    {
        id: `rac103`,
        nombre: `Rack "Juli"`,
        precio: 60000,
        descripcion: "Rack para TV hecho con madera Pitiribi",
        medidas: "Alto: 0,60m - Ancho: 2,50m - Profundidad: 0,40m",
        categoria: "rack",
        imagen: "/img/Rack2.webp",
    },
    {
        id: `rac102`,
        nombre: `Rack "Cala"`,
        precio: 45000,
        descripcion: "Rack para TV hecho con madera Pitiribi",
        medidas: "Alto: 0,60m - Ancho: 2,00m - Profundidad: 0,35m",
        categoria: "rack",
        imagen: "/img/Rack3.webp",
    },
    {
        id: `esc203`,
        nombre: `Escritorio "Vanesa"`,
        precio: 35000,
        descripcion: "Escritorio hecho con madera Pitiribi",
        medidas: "Alto: 0,70m - Ancho: 1,80m - Profundidad: 0,70m",
        categoria: "escritorio",
        imagen: "/img/Escritorio1.webp"
    },
    {
        id: `esc202`,
        nombre: `Escritorio "Pablo"`,
        precio: 38000,
        descripcion: "Escritorio hecho con madera Pitiribi",
        medidas: "Alto: 0,70m - Ancho: 2,10m - Profundidad: 0,70m",
        categoria: "escritorio",
        imagen: "/img/Escritorio2.webp"
    },
    {
        id: `esc201`,
        nombre: `Escritorio "Vitto"`,
        precio: 32000,
        descripcion: "Escritorio hecho con madera Pitiribi",
        medidas: "Alto: 0,70m - Ancho: 1,80m - Profundidad: 0,50m",
        categoria: "escritorio",
        imagen: "/img/Escritorio3.webp "
    },
    ]

    const obtenerProductos = new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });

    export default obtenerProductos