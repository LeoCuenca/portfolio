// Función para manejar el inicio del toque
function handleTouchStart(event) {
    // Añadir una clase para indicar que el elemento está siendo tocado
    event.currentTarget.classList.add('tapped');
}

// Función para manejar el final del toque
function handleTouchEnd(event) {
    // Quitar la clase al finalizar el toque
    event.currentTarget.classList.remove('tapped');
}
