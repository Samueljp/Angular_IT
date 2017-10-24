class Libro {
    constructor(autor, titulo) {
        this.autor = autor;
        this.titulo = titulo;
    }
}
class LibroTecnico extends Libro {
    constructor(autor, titulo, tematica, paginas) {
        super(autor, titulo);
        this.tematica = tematica;
        this.paginas = paginas;
        this.capitulos = [];
        this.precio = 10;
        // ...
    }
    calcularPrecio(pValor = 1) {
        this.precio *= pValor;
        console.log(this);
    }
}

oLibro = new LibroTecnico('Pepe', 'Angular', 'Informatica', 200);
oLibro.calcularPrecio(3);