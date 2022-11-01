class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre= nombre;
        this.apellido= apellido;
        this.libros= libros;
        this.mascotas= mascotas;
    }

    countMascotas(){
        return (this.mascotas.length);
    }
    
    getBookNames(){
        return (this.libros.map(doc=>doc.nombre))
    }

    getFullName (){
        return (`${this.nombre}, ${this.apellido}`)
    }

    addMascotas(mascotas){
        const newMascota= mascotas
        this.mascotas.push(newMascota)
        return (this.mascotas)
    }
    
    addBook(nombre, autor){
        const newLibro={nombre: nombre, autor:autor};
        this.libros.push(newLibro)
        return(this.libros)
    }
}

const ejercicio = new Usuario("Silvana", "Vega", [{nombre: 'El señor de las moscas', autor: 'William Golding'}, {nombre:'Fundacion', autor:'Isaac Asimov'}],['perro', 'gato'])
console.log (ejercicio.countMascotas())
console.log (ejercicio.getBookNames())
console.log (ejercicio.getFullName())
console.log (ejercicio.addMascotas('vaca'))
console.log (ejercicio.addBook('El señor de los anillos', 'J. R. R. Tolkien'))