// Diccionario de textos multi idioma
const LANGS = {
  es: {
          feliz_cumple: "¡Hoy es el cumpleaños de",
        fecha_nacimiento: "Fecha de nacimiento",
        fecha_nacimiento_desc: "Selecciona la fecha de nacimiento. Se usará para recordatorio de cumpleaños.",
      empresa_desc: "Nombre de la empresa a la que perteneces.",
      logo_empresa_desc: "Selecciona el logo de tu empresa (opcional).",
      foto_perfil_desc: "Sube una foto tuya para tu perfil.",
      nombre_completo_desc: "Introduce tu nombre completo tal como deseas que aparezca.",
      cargo_desc: "Tu puesto o cargo en la empresa.",
      whatsapp_desc: "Número de WhatsApp para contacto rápido (opcional).",
      telefono_desc: "Número de teléfono principal de contacto.",
      email_desc: "Correo electrónico de contacto.",
      facebook_desc: "Enlace a tu perfil de Facebook (opcional).",
      instagram_desc: "Enlace a tu perfil de Instagram (opcional).",
      linkedin_desc: "Enlace a tu perfil de LinkedIn (opcional).",
    guardar: "Guardar",
    empezar: "Empezar",
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
    bienvenido: "BIENVENIDO A ID DM",
    contactos: "Contactos",
    perfil: "Perfil",
    idioma: "Idioma",
    contactosImportados: "Contactos importados",
    noSeleccionados: "No se seleccionaron contactos.",
    noImportados: "No se pudo importar contactos",
    soloDisponibleMovil: "La importación de contactos solo está disponible en algunos navegadores móviles."
  },
  en: {
          feliz_cumple: "Today is the birthday of",
        fecha_nacimiento: "Birth date",
        fecha_nacimiento_desc: "Select the birth date. It will be used for birthday reminders.",
      empresa_desc: "Name of the company you belong to.",
      logo_empresa_desc: "Select your company's logo (optional).",
      foto_perfil_desc: "Upload a photo of yourself for your profile.",
      nombre_completo_desc: "Enter your full name as you want it to appear.",
      cargo_desc: "Your position or job title in the company.",
      whatsapp_desc: "WhatsApp number for quick contact (optional).",
      telefono_desc: "Main contact phone number.",
      email_desc: "Contact email address.",
      facebook_desc: "Link to your Facebook profile (optional).",
      instagram_desc: "Link to your Instagram profile (optional).",
      linkedin_desc: "Link to your LinkedIn profile (optional).",
    guardar: "Save",
    empezar: "Start",
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
    bienvenido: "WELCOME TO ID DM",
    contactos: "Contacts",
    perfil: "Profile",
    idioma: "Language",
    contactosImportados: "Contacts imported",
    noSeleccionados: "No contacts selected.",
    noImportados: "Could not import contacts",
    soloDisponibleMovil: "Contact import is only available on some mobile browsers."
  },
  fr: {
          feliz_cumple: "C'est l'anniversaire de",
        fecha_nacimiento: "Date de naissance",
        fecha_nacimiento_desc: "Sélectionnez la date de naissance. Elle sera utilisée pour les rappels d'anniversaire.",
      empresa_desc: "Nom de l'entreprise à laquelle vous appartenez.",
      logo_empresa_desc: "Sélectionnez le logo de votre entreprise (optionnel).",
      foto_perfil_desc: "Téléchargez une photo de vous pour votre profil.",
      nombre_completo_desc: "Entrez votre nom complet tel que vous souhaitez qu'il apparaisse.",
      cargo_desc: "Votre poste ou fonction dans l'entreprise.",
      whatsapp_desc: "Numéro WhatsApp pour contact rapide (optionnel).",
      telefono_desc: "Numéro de téléphone principal de contact.",
      email_desc: "Adresse e-mail de contact.",
      facebook_desc: "Lien vers votre profil Facebook (optionnel).",
      instagram_desc: "Lien vers votre profil Instagram (optionnel).",
      linkedin_desc: "Lien vers votre profil LinkedIn (optionnel).",
    guardar: "Enregistrer",
    empezar: "Commencer",
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
    bienvenido: "BIENVENUE À ID DM",
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
