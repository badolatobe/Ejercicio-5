function verificarEmail() {
    const email = document.getElementById('emailInput').value;
    const validar = email.includes('@') && email.includes('.');
    const resul = document.getElementById('result');
    resul.textContent = validar ? 'Correo electrónico válido' : 'Correo electrónico no válido';
}

//presionar Alt+z para leer el siguiente texto:

//-textContent es una propiedad de un elemento DOM (Documento Object Model) que permite establecer o recuperar el contenido de texto dentro de un elemento HTML. En este caso específico, se utiliza para actualizar el contenido de un párrafo con el resultado de la verificación del correo electrónico por operador ternario.

//-el operador ternario es una forma eficiente y concisa de asignar valores basados en una condición (true false buleano)