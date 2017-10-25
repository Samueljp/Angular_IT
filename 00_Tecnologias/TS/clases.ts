

class Libro {
    public autor: string;
    public titulo: string;
    constructor(autor: string, titulo: string) {
        this.autor = autor;
        this.titulo = titulo;
    }
}

class Libro2 {
    constructor(public autor: string, public titulo: string) { };
}


class LibroTecnico extends Libro {
    public tematica: string;
    public paginas: number;
    public precio: number;
    protected capitulos: Array<string>;
    //protected capitulos: string[];

    constructor(autor, titulo, tematica, paginas) {
        super(autor, titulo);
        this.tematica = tematica;
        this.paginas = paginas;
        this.capitulos = [];
        this.precio = 10;
        // ...
    }
    public calcularPrecio(pValor = 1): number {
        this.precio *= pValor;
        console.log(this);
        return this.precio;
    }
}

let oLibro = new LibroTecnico('Pepe', 'Angular', 'Informatica', 200);
//oLibro.editorial = "PANINI";
oLibro.calcularPrecio(3);
