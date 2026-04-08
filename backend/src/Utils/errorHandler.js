//!Modulo estandarizado para el manejo de errores en la aplicación

/*
@param {object} res - Objeto de respuesta
@param {error} error - Objeto de error
@param {string} message - Mensaje de error
@param {number} statusCode - Código de estado
*/

export const errorHandler = (res, error, customMessage = 'Error interno en el servidor', statusCode = 500) => {
    console.error(`Error: ${error}`);
    const message = customMessage;
    return res.status(statusCode).json({
        success: false,
        message,
        details: process.env.NODE_ENV === 'development' ? error.message : null
    });
}