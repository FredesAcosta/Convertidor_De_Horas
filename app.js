// Agrega un evento al botón de conversión para que ejecute la función cuando se haga clic
document.getElementById('convert-btn').addEventListener('click', () => {
    // Obtiene el valor de la hora ingresada en el campo de hora de Colombia
    const colombiaTime = document.getElementById('colombia-time').value;
    // Obtiene el valor del país seleccionado en el menú desplegable
    const selectedCountry = document.getElementById('country').value;

    // Verifica si no se ingresó una hora válida
    if (!colombiaTime) {
        alert('Por favor, ingresa una hora válida en Colombia.'); // Muestra una alerta al usuario
        return; // Detiene la ejecución de la función
    }

    // Divide la hora ingresada en horas y minutos, y los convierte a números
    const [hours, minutes] = colombiaTime.split(':').map(Number);
    let convertedHours; // Variable para almacenar la hora convertida

    // Determina la conversión de la hora según el país seleccionado
    switch (selectedCountry) {
        case 'usa': // Estados Unidos (EST): Colombia - 1 hora
            convertedHours = (hours - 1 + 24) % 24; // Ajusta la hora para evitar valores negativos
            break;
        case 'spain': // España (CET): Colombia + 6 horas
            convertedHours = (hours + 6) % 24; // Ajusta la hora para que no exceda 24
            break;
        case 'japan': // Japón (JST): Colombia + 14 horas
            convertedHours = (hours + 14) % 24; // Ajusta la hora para que no exceda 24
            break;
        default: // Si no se selecciona un país válido
            alert('Selecciona un país válido.'); // Muestra una alerta al usuario
            return; // Detiene la ejecución de la función
    }

    // Formatea la hora convertida para que siempre tenga dos dígitos
    const formattedTime = `${String(convertedHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    // Muestra la hora convertida en el elemento con el ID "converted-time"
    document.getElementById('converted-time').textContent = formattedTime;
});