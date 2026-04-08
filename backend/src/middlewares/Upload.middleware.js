import multer from "multer";
import path from "path";

//* Configuración de almacenamiento
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        // Genera un nombre de archivo único con la fecha, un número aleatorio y la extensión del archivo
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1000000);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

//* Configuración de filtro de archivos
const fileFilter = (req, file, cb) => {
    const allowedExtensions = [".jpg", ".jpeg", ".png", ".gif"];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedExtensions.includes(ext)) {
        cb(null, true);
    } else {
        cb(new Error("Tipo de archivo no permitido, solo se permiten archivos de imagen"), false);
    }
};

//* Configuración de Multer
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 5 // Límiete de 5MB
    }
});

export default upload;