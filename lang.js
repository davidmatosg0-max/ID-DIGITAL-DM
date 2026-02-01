// Diccionario de textos multi idioma
const LANGS = {
  es: {
    guardar: "Guardar",
    editar: "Editar",
    eliminar: "Eliminar",
    nuevoContacto: "Nuevo contacto",
    empresa: "Empresa",
    nombre: "Nombre",
    cargo: "Cargo",
    telefono: "Teléfono",
    email: "Correo electrónico",
    facebook: "Facebook",
    instagram: "Instagram",
    linkedin: "LinkedIn",
    foto: "Foto de perfil",
    logo: "Logo de empresa",
    bienvenido: "Bienvenido",
    contactos: "Contactos",
    perfil: "Perfil",
    idioma: "Idioma",
    contactosImportados: "Contactos importados",
    noSeleccionados: "No se seleccionaron contactos.",
    noImportados: "No se pudo importar contactos",
    soloDisponibleMovil: "La importación de contactos solo está disponible en algunos navegadores móviles."
  },
  en: {
    guardar: "Save",
    editar: "Edit",
    eliminar: "Delete",
    nuevoContacto: "New contact",
    empresa: "Company",
    nombre: "Name",
    cargo: "Position",
    telefono: "Phone",
    email: "Email",
    facebook: "Facebook",
    instagram: "Instagram",
    linkedin: "LinkedIn",
    foto: "Profile photo",
    logo: "Company logo",
    bienvenido: "Welcome",
    contactos: "Contacts",
    perfil: "Profile",
    idioma: "Language",
    contactosImportados: "Contacts imported",
    noSeleccionados: "No contacts selected.",
    noImportados: "Could not import contacts",
    soloDisponibleMovil: "Contact import is only available on some mobile browsers."
  },
  fr: {
    guardar: "Enregistrer",
    editar: "Modifier",
    eliminar: "Supprimer",
    nuevoContacto: "Nouveau contact",
    empresa: "Entreprise",
    nombre: "Nom",
    cargo: "Poste",
    telefono: "Téléphone",
    email: "E-mail",
    facebook: "Facebook",
    instagram: "Instagram",
    linkedin: "LinkedIn",
    foto: "Photo de profil",
    logo: "Logo d'entreprise",
    bienvenido: "Bienvenue",
    contactos: "Contacts",
    perfil: "Profil",
    idioma: "Langue",
    contactosImportados: "Contacts importés",
    noSeleccionados: "Aucun contact sélectionné.",
    noImportados: "Impossible d'importer les contacts",
    soloDisponibleMovil: "L'importation de contacts n'est disponible que sur certains navigateurs mobiles."
  }
};

function getLang() {
  // Detectar idioma navegador o usar localStorage
  let lang = localStorage.getItem('lang') || navigator.language.slice(0,2);
  if (!['es','en','fr'].includes(lang)) lang = 'es';
  return lang;
}

function setLang(lang) {
  if(['es','en','fr'].includes(lang)) {
    localStorage.setItem('lang', lang);
    location.reload();
  }
}

function t(key) {
  const lang = getLang();
  return LANGS[lang][key] || key;
}

// Para usar: t('guardar'), t('nombre'), etc.
