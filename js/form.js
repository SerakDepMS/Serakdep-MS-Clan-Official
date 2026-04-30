document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("KZquan0PhqC35uDYw");

  const inscriptionForm = document.getElementById("inscription-form");
  if (inscriptionForm) {
    setupInscriptionForm();
  }

  const reportForm = document.getElementById("report-form");
  if (reportForm) {
    setupReportForm();
  }

  const suggestionForm = document.getElementById("suggestion-form");
  if (suggestionForm) {
    setupSuggestionForm();
  }

  const adminForm = document.getElementById("admin-application-form");
  if (adminForm) {
    setupAdminApplicationForm();
  }

  setupCharacterCounter();
  setupAdminNavigation();
});


function showToast(message, type = "success") {
  let toastContainer = document.getElementById("toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toast-container";
    toastContainer.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 10000;
      display: flex;
      flex-direction: column;
      gap: 10px;
    `;
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.style.cssText = `
    background: ${type === "success" ? "#2ecc71" : type === "error" ? "#e74c3c" : "#3498db"};
    color: white;
    padding: 14px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    font-weight: 500;
    font-size: 1rem;
    transition: opacity 0.3s ease, transform 0.3s ease;
    opacity: 1;
    transform: translateX(0);
    max-width: 350px;
    display: flex;
    align-items: center;
    gap: 8px;
  `;
  toast.innerHTML = `<i class="fas ${type === "success" ? "fa-check-circle" : type === "error" ? "fa-times-circle" : "fa-info-circle"}"></i> ${message}`;
  
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100px)";
    setTimeout(() => {
      if (toast.parentNode) {
        toast.remove();
      }
    }, 300);
  }, 4000);
}

function setupCharacterCounter() {
  const whyJoinTextarea = document.getElementById("why-join");
  const charCount = document.getElementById("char-count");

  if (whyJoinTextarea && charCount) {
    whyJoinTextarea.addEventListener("input", function () {
      let count = this.value.length;
      charCount.textContent = count;

      if (count > 500) {
        this.value = this.value.substring(0, 500);
        charCount.textContent = 500;
        charCount.style.color = "#e74c3c";
      } else if (count > 450) {
        charCount.style.color = "#e67e22";
      } else {
        charCount.style.color = "#666";
      }
    });
  }
}


function setupAdminNavigation() {
  function smoothScrollToSection(sectionId, focusFirstInput = false) {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 0;
    const sectionTop = section.offsetTop - headerHeight - 20;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });

    section.classList.add("section-highlight");
    setTimeout(() => {
      section.classList.remove("section-highlight");
    }, 2000);

    if (focusFirstInput && sectionId === "aspirantes-admin") {
      setTimeout(() => {
        const firstInput = section.querySelector("input, textarea, select");
        if (firstInput) {
          firstInput.focus({ preventScroll: true });
        }
      }, 800);
    }
  }

  const continueBtn = document.querySelector(".requirements-continue-btn");
  if (continueBtn) {
    if (continueBtn.tagName === "A") {
      continueBtn.addEventListener("click", function (e) {
        e.preventDefault();
        smoothScrollToSection("aspirantes-admin", true);
      });
    } else if (continueBtn.tagName === "BUTTON") {
      continueBtn.addEventListener("click", function () {
        smoothScrollToSection("aspirantes-admin", true);
      });
    }
  }

  document.querySelectorAll('a[href*="#requisitos-admin"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      if (window.location.pathname.includes("contacto.html")) {
        e.preventDefault();
        smoothScrollToSection("requisitos-admin");
      }
    });
  });

  document.querySelectorAll('a[href*="#aspirantes-admin"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      if (window.location.pathname.includes("contacto.html")) {
        e.preventDefault();
        smoothScrollToSection("aspirantes-admin", true);
      }
    });
  });

  function handleHashOnLoad() {
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      setTimeout(() => {
        if (hash === "requisitos-admin" || hash === "aspirantes-admin") {
          smoothScrollToSection(hash, hash === "aspirantes-admin");
        }
      }, 300);
    }
  }

  handleHashOnLoad();
  window.addEventListener("hashchange", handleHashOnLoad);

  const adminForm = document.getElementById("aspirantes-admin");
  if (adminForm) {
    const existingBackBtn = adminForm.querySelector(".back-to-requisitos-btn");
    if (!existingBackBtn) {
      const backToRequisitosBtn = document.createElement("button");
      backToRequisitosBtn.type = "button";
      backToRequisitosBtn.className = "btn btn-small back-to-requisitos-btn";
      backToRequisitosBtn.innerHTML = '<i class="fas fa-arrow-up"></i> Volver a Requisitos';

      const submitBtn = adminForm.querySelector(".form-submit-btn");
      if (submitBtn) {
        submitBtn.parentNode.insertBefore(backToRequisitosBtn, submitBtn);
        backToRequisitosBtn.addEventListener("click", function () {
          smoothScrollToSection("requisitos-admin");
        });
      }
    }
  }
}


function setupInscriptionForm() {
  const form = document.getElementById("inscription-form");
  const submitBtn = document.getElementById("submit-btn");
  const successMessage = document.getElementById("success-message");

  if (!form || !submitBtn || !successMessage) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    if (!validateInscriptionForm()) {
      return;
    }

    submitBtn.disabled = true;
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

    try {
      const formData = {
        robloxName: document.getElementById("roblox-name").value.trim(),
        age: document.getElementById("age").value.trim(),
        country: document.getElementById("country").value,
        timezone: document.getElementById("timezone").value,
        games: document.getElementById("games").value.trim(),
        experience: document.getElementById("experience").value,
        playHours: document.getElementById("play-hours").value,
        whyJoin: document.getElementById("why-join").value.trim(),
        referral: document.getElementById("referral").value,
        whatsapp: document.getElementById("whatsapp").value.trim() || "No proporcionado",
        discordUser: document.getElementById("discord-user").value.trim() || "No proporcionado",
        whatsappConsent: document.getElementById("whatsapp-consent").checked,
        newsletter: document.getElementById("newsletter").checked,
        terms: document.getElementById("terms").checked,
        joinWhatsapp: document.getElementById("join-whatsapp").checked,
        joinDiscord: document.getElementById("join-discord").checked,
      };

      console.log("Datos del formulario capturados");

      await sendInscriptionEmailToAdmin(formData);
      console.log("Enviado con éxito");
      showToast("Solicitud enviada con éxito", "success");

      form.style.display = "none";
      successMessage.style.display = "block";
      successMessage.classList.add("success-highlight");

      const whatsappBtn = document.getElementById("whatsapp-success-btn");
      const discordBtn = document.getElementById("discord-success-btn");
      const successButtonsContainer = document.getElementById("success-buttons");

      if (formData.joinWhatsapp) {
        whatsappBtn.style.display = "flex";
      }
      if (formData.joinDiscord) {
        discordBtn.href = "https://discord.gg/vts4PTHR9K";
        discordBtn.style.display = "flex";
      }

      if (!formData.joinWhatsapp && !formData.joinDiscord) {
        successButtonsContainer.style.display = "none";
      } else {
        successButtonsContainer.style.display = "flex";
      }

      setTimeout(() => {
        successMessage.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 150);

    } catch (error) {
      console.error("Error general al enviar el formulario:", error);
      showMessage("Error al enviar la solicitud. Por favor, inténtalo de nuevo o contáctanos por WhatsApp directamente.", "error");
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  });
}

async function sendInscriptionEmailToAdmin(data) {
  console.log("Enviando solicitud al administrador...");

  const whatsappDisplay = data.whatsapp === "No proporcionado"
    ? '<span style="color: #e74c3c;">No proporcionado</span>'
    : `<a href="https://wa.me/${data.whatsapp.replace(/\D/g, '')}" style="color: #25D366; text-decoration: none; font-weight: bold;">${data.whatsapp}</a>`;

  const discordDisplay = data.discordUser === "No proporcionado"
    ? '<span style="color: #e74c3c;">No proporcionado</span>'
    : `<span style="color: #5865F2; font-weight: bold;">${data.discordUser}</span>`;

  const whatsappConsentDisplay = data.whatsappConsent
    ? '<span style="color: #27ae60; font-weight: bold;">✓ Aceptado</span>'
    : '<span style="color: #e74c3c;">✗ No aceptado</span>';

  const newsletterDisplay = data.newsletter
    ? '<span style="color: #27ae60; font-weight: bold;">✓ Suscrito</span>'
    : '<span style="color: #e74c3c;">✗ No suscrito</span>';

  const joinWhatsappCheck = data.joinWhatsapp
    ? '<span style="color: #25D366; font-weight: bold; margin-left: 10px;">✓ Quiere unirse al grupo</span>'
    : "";

  const joinDiscordCheck = data.joinDiscord
    ? '<span style="color: #5865F2; font-weight: bold; margin-left: 10px;">✓ Quiere unirse al servidor</span>'
    : "";

  const joinBothNote = (data.joinWhatsapp && data.joinDiscord)
    ? '<div style="background: #fff3cd; padding: 12px; border-radius: 5px; margin-top: 15px; border-left: 4px solid #ffc107;">' +
      "<strong>📝 NOTA:</strong> El jugador quiere unirse a <strong>AMBAS</strong> comunidades. Enviar invitaciones a WhatsApp y Discord." +
      "</div>"
    : "";

  const whatsappAction = data.joinWhatsapp && data.whatsapp !== "No proporcionado"
    ? '<div style="background: white; padding: 12px; border-radius: 5px; margin-bottom: 10px; border-left: 4px solid #25D366;">' +
      '<strong style="color: #25D366;">📱 WHATSAPP:</strong> Invitar al número <strong>' + data.whatsapp + '</strong> al grupo de nuevos miembros.' +
      "</div>"
    : "";

  const discordAction = data.joinDiscord && data.discordUser !== "No proporcionado"
    ? '<div style="background: white; padding: 12px; border-radius: 5px; margin-bottom: 10px; border-left: 4px solid #5865F2;">' +
      '<strong style="color: #5865F2;">🎮 DISCORD:</strong> Enviar invitación al servidor de Discord (Usuario: <strong>' + data.discordUser + '</strong>).' +
      "</div>"
    : "";

  const contactNote = (!data.joinWhatsapp && !data.joinDiscord)
    ? '<div style="background: white; padding: 12px; border-radius: 5px; margin-bottom: 10px; border-left: 4px solid #f39c12;">' +
      '<strong style="color: #f39c12;">ℹ️ CONTACTO:</strong> El jugador no seleccionó comunidades. Contactar por Roblox: <strong>' + data.robloxName + '</strong>' +
      "</div>"
    : "";

  const priority = data.joinWhatsapp
    ? '<span style="color: #e74c3c; font-weight: bold;">ALTA - Contactar inmediatamente</span>'
    : '<span style="color: #f39c12; font-weight: bold;">MEDIA - Contactar en 48 horas</span>';

  const priorityExplanation = data.joinWhatsapp
    ? "<strong>Contactar de inmediato</strong> vía WhatsApp para invitación al grupo."
    : "<strong>Contactar en 48 horas</strong> vía Roblox o Discord.";

  const classification = data.joinWhatsapp ? "Nueva Alta" : "Regular";

  const templateParams = {
    roblox_name: data.robloxName,
    age: data.age,
    country: data.country,
    timezone: data.timezone,
    games: data.games,
    experience: data.experience,
    play_hours: data.playHours,
    why_join: data.whyJoin,
    referral: data.referral,
    whatsapp_display: whatsappDisplay,
    discord_display: discordDisplay,
    whatsapp_consent_display: whatsappConsentDisplay,
    newsletter_display: newsletterDisplay,
    join_whatsapp_check: joinWhatsappCheck,
    join_discord_check: joinDiscordCheck,
    join_both_note: joinBothNote,
    whatsapp_action: whatsappAction,
    discord_action: discordAction,
    contact_note: contactNote,
    priority: priority,
    priority_explanation: priorityExplanation,
    classification: classification,
    date: new Date().toLocaleString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
    timestamp: Date.now().toString(),
    join_whatsapp: data.joinWhatsapp ? "Sí" : "No",
    join_discord: data.joinDiscord ? "Sí" : "No",
    whatsapp_consent: data.whatsappConsent ? "Sí" : "No",
    newsletter: data.newsletter ? "Sí" : "No",
  };

  console.log("Enviando a EmailJS");
  return emailjs.send("service_sjea029", "template_bso642c", templateParams);
}

function validateInscriptionForm() {
  if (!document.getElementById("terms").checked) {
    showMessage("Debes aceptar el reglamento del clan para continuar.", "error");
    return false;
  }

  const age = parseInt(document.getElementById("age").value, 10);
  if (isNaN(age) || age < 10) {
    showMessage("La edad mínima para unirse es 10 años.", "error");
    document.getElementById("age").focus();
    return false;
  }

  const whyJoin = document.getElementById("why-join").value.trim();
  if (whyJoin.length < 20) {
    showMessage("Por favor, explica con más detalle por qué quieres unirte (mínimo 20 caracteres).", "error");
    return false;
  }

  const requiredFields = [
    "roblox-name",
    "age",
    "country",
    "timezone",
    "games",
    "experience",
    "play-hours",
    "why-join",
    "referral"
  ];

  for (const fieldId of requiredFields) {
    const field = document.getElementById(fieldId);
    if (field && field.hasAttribute("required") && !field.value.trim()) {
      showMessage(`Por favor, completa el campo obligatorio.`, "error");
      field.focus();
      return false;
    }
  }

  return true;
}


function setupReportForm() {
  const form = document.getElementById("report-form");
  if (!form) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    if (!validateReportForm()) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

    try {
      const formData = {
        reportType: document.getElementById("report-type").value,
        reportDetails: document.getElementById("report-details").value.trim(),
        reportEvidence: document.getElementById("report-evidence").value.trim() || "No proporcionada",
        confidential: document.getElementById("report-confidential").checked,
      };
      await sendReportEmail(formData);
      console.log("Enviado con éxito");
      showToast("Reporte enviado con éxito", "success");
      form.reset();
    } catch (error) {
      console.error("Error al enviar reporte:", error);
      showMessage("Error al enviar el reporte. Inténtalo de nuevo.", "error", form);
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  });
}

async function sendReportEmail(data) {
  const contentHtml = `
    <strong>TIPO DE PROBLEMA:</strong> ${data.reportType}<br><br>
    <strong>DESCRIPCIÓN:</strong><br>${data.reportDetails.replace(/\n/g, "<br>")}<br><br>
    <strong>EVIDENCIA:</strong> ${data.reportEvidence}
  `;

  const templateParams = {
    roblox_name: "REPORTE DE PROBLEMA",
    age: "N/A",
    country: "N/A",
    timezone: "N/A",
    games: "N/A",
    experience: "N/A",
    play_hours: "N/A",
    why_join: contentHtml,
    referral: "Formulario de Reportes",
    whatsapp: "N/A",
    whatsapp_consent: "N/A",
    newsletter: "N/A",
    join_whatsapp: "N/A",
    join_discord: "N/A",
    whatsapp_display: '<span style="color: #e74c3c;">No proporcionado</span>',
    discord_display: '<span style="color: #e74c3c;">No proporcionado</span>',
    whatsapp_consent_display: '<span style="color: #e74c3c;">✗ No aceptado</span>',
    newsletter_display: '<span style="color: #e74c3c;">✗ No suscrito</span>',
    join_whatsapp_check: "",
    join_discord_check: "",
    join_both_note: "",
    whatsapp_action: "",
    discord_action: "",
    contact_note: "",
    priority: '<span style="color: #f39c12; font-weight: bold;">Reporte</span>',
    priority_explanation: "Revisar el reporte lo antes posible.",
    classification: "Reporte",
    date: new Date().toLocaleString("es-ES"),
    timestamp: Date.now().toString(),
  };

  return emailjs.send("service_sjea029", "template_bso642c", templateParams);
}

function validateReportForm() {
  if (!document.getElementById("report-confidential").checked) {
    showMessage("Debes confirmar que entiendes cómo se manejará tu reporte.", "error");
    return false;
  }
  const details = document.getElementById("report-details").value.trim();
  if (details.length < 10) {
    showMessage("Por favor, describe el problema con más detalle.", "error");
    return false;
  }
  return true;
}


function setupSuggestionForm() {
  const form = document.getElementById("suggestion-form");
  if (!form) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    if (!validateSuggestionForm()) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

    try {
      const formData = {
        suggestionType: document.getElementById("suggestion-type").value,
        suggestionDetails: document.getElementById("suggestion-details").value.trim(),
        anonymous: document.getElementById("suggestion-anonymous").checked,
      };
      await sendSuggestionEmail(formData);
      console.log("Enviado con éxito");
      showToast("Sugerencia enviada con éxito", "success");
      form.reset();
    } catch (error) {
      console.error("Error al enviar sugerencia:", error);
      showMessage("Error al enviar la sugerencia. Inténtalo de nuevo.", "error", form);
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  });
}

async function sendSuggestionEmail(data) {
  const contentHtml = `
    <strong>ÁREA DE MEJORA:</strong> ${data.suggestionType}<br><br>
    <strong>SUGERENCIA:</strong><br>${data.suggestionDetails.replace(/\n/g, "<br>")}<br><br>
    <strong>ANÓNIMO:</strong> ${data.anonymous ? "Sí" : "No"}
  `;

  const templateParams = {
    roblox_name: "SUGERENCIA PARA EL CLAN",
    age: "N/A",
    country: "N/A",
    timezone: "N/A",
    games: "N/A",
    experience: "N/A",
    play_hours: "N/A",
    why_join: contentHtml,
    referral: "Formulario de Sugerencias",
    whatsapp: "N/A",
    whatsapp_consent: "N/A",
    newsletter: "N/A",
    join_whatsapp: "N/A",
    join_discord: "N/A",
    whatsapp_display: '<span style="color: #e74c3c;">No proporcionado</span>',
    discord_display: '<span style="color: #e74c3c;">No proporcionado</span>',
    whatsapp_consent_display: '<span style="color: #e74c3c;">✗ No aceptado</span>',
    newsletter_display: '<span style="color: #e74c3c;">✗ No suscrito</span>',
    join_whatsapp_check: "",
    join_discord_check: "",
    join_both_note: "",
    whatsapp_action: "",
    discord_action: "",
    contact_note: "",
    priority: '<span style="color: #3498db; font-weight: bold;">Sugerencia</span>',
    priority_explanation: "Tomar en cuenta para futuras mejoras.",
    classification: "Sugerencia",
    date: new Date().toLocaleString("es-ES"),
    timestamp: Date.now().toString(),
  };

  return emailjs.send("service_sjea029", "template_bso642c", templateParams);
}

function validateSuggestionForm() {
  const details = document.getElementById("suggestion-details").value.trim();
  if (details.length < 10) {
    showMessage("Por favor, describe tu sugerencia con más detalle.", "error");
    return false;
  }
  return true;
}


function setupAdminApplicationForm() {
  const form = document.getElementById("admin-application-form");
  if (!form) return;

  const submitBtn = form.querySelector('button[type="submit"]');
  let messageContainer = form.querySelector(".admin-message-container");
  if (!messageContainer) {
    messageContainer = document.createElement("div");
    messageContainer.className = "admin-message-container";
    submitBtn.parentNode.insertBefore(messageContainer, submitBtn.nextSibling);
  }

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    if (!validateAdminForm()) return;

    submitBtn.disabled = true;
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

    try {
      const formData = {
        robloxName: document.getElementById("admin-roblox-name").value.trim(),
        age: document.getElementById("admin-age").value.trim(),
        country: document.getElementById("admin-country").value,
        timezone: document.getElementById("admin-timezone").value,
        whatsapp: document.getElementById("admin-whatsapp").value.trim(),
        experience: document.getElementById("admin-experience").value.trim() || "No especificada",
        whyAdmin: document.getElementById("admin-why").value.trim(),
        availability: document.getElementById("admin-availability").value,
        improvements: document.getElementById("admin-improvements").value.trim(),
        terms: document.getElementById("admin-terms").checked,
        commitment: document.getElementById("admin-commitment").checked,
      };
      await sendAdminApplicationEmail(formData);
      console.log("Enviado con éxito");
      showToast("Solicitud de administrador enviada con éxito", "success");
      form.reset();
    } catch (error) {
      console.error("Error al enviar solicitud de admin:", error);
      showMessageInContainer("Error al enviar la solicitud. Inténtalo de nuevo o contacta directamente por WhatsApp.", "error", messageContainer);
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  });
}

function showMessageInContainer(text, type, container) {
  container.innerHTML = "";
  let alertClass = type === "success" ? "alert-success" : "alert-danger";
  const messageDiv = document.createElement("div");
  messageDiv.className = `alert ${alertClass}`;
  messageDiv.innerHTML = text;
  container.appendChild(messageDiv);
  setTimeout(() => { if (messageDiv.parentNode) messageDiv.remove(); }, 5000);
}

async function sendAdminApplicationEmail(data) {
  const whatsappDisplay = data.whatsapp
    ? `<a href="https://wa.me/${data.whatsapp.replace(/\D/g, '')}" style="color: #25D366; text-decoration: none; font-weight: bold;">${data.whatsapp}</a>`
    : '<span style="color: #e74c3c;">No proporcionado</span>';

  const discordDisplay = '<span style="color: #e74c3c;">No proporcionado</span>';

  const contentHtml = `
    <strong>MOTIVACIÓN PARA SER ADMIN:</strong><br>${data.whyAdmin.replace(/\n/g, "<br>")}<br><br>
    <strong>EXPERIENCIA PREVIA:</strong><br>${data.experience.replace(/\n/g, "<br>")}<br><br>
    <strong>MEJORAS PROPUESTAS:</strong><br>${data.improvements.replace(/\n/g, "<br>")}<br><br>
    <strong>DISPONIBILIDAD:</strong> ${data.availability} horas/semana
  `;

  const whatsappAction = data.whatsapp
    ? '<div style="background: white; padding: 12px; border-radius: 5px; margin-bottom: 10px; border-left: 4px solid #25D366;">' +
      '<strong style="color: #25D366;">📱 WHATSAPP:</strong> Contactar al número <strong>' + data.whatsapp + '</strong> para coordinar la entrevista.' +
      "</div>"
    : "";

  const contactNote = !data.whatsapp
    ? '<div style="background: white; padding: 12px; border-radius: 5px; margin-bottom: 10px; border-left: 4px solid #f39c12;">' +
      '<strong style="color: #f39c12;">ℹ️ CONTACTO:</strong> El aspirante no proporcionó WhatsApp. Contactar por Roblox: <strong>' + data.robloxName + '</strong>' +
      "</div>"
    : "";

  const priority = data.whatsapp
    ? '<span style="color: #e74c3c; font-weight: bold;">ALTA - Contactar para entrevista</span>'
    : '<span style="color: #f39c12; font-weight: bold;">MEDIA - Contactar por Roblox</span>';

  const priorityExplanation = data.whatsapp
    ? "<strong>Contactar de inmediato</strong> vía WhatsApp para coordinar entrevista."
    : "<strong>Contactar en 48 horas</strong> vía Roblox.";

  const templateParams = {
    roblox_name: `[ASPIRANTE ADMIN] ${data.robloxName}`,
    age: data.age,
    country: data.country,
    timezone: data.timezone,
    games: "No especificado",
    experience: data.experience,
    play_hours: "No especificado",
    why_join: contentHtml,
    referral: "Formulario Aspirantes a Admin",
    whatsapp: data.whatsapp || "No proporcionado",
    whatsapp_consent: "Sí",
    newsletter: "No",
    join_whatsapp: data.whatsapp ? "Sí" : "No",
    join_discord: "No",
    whatsapp_display: whatsappDisplay,
    discord_display: discordDisplay,
    whatsapp_consent_display: '<span style="color: #27ae60; font-weight: bold;">✓ Aceptado</span>',
    newsletter_display: '<span style="color: #e74c3c;">✗ No suscrito</span>',
    join_whatsapp_check: data.whatsapp ? '<span style="color: #25D366; font-weight: bold; margin-left: 10px;">✓ Teléfono registrado</span>' : "",
    join_discord_check: "",
    join_both_note: "",
    whatsapp_action: whatsappAction,
    discord_action: "",
    contact_note: contactNote,
    priority: priority,
    priority_explanation: priorityExplanation,
    classification: "Aspirante Admin",
    date: new Date().toLocaleString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
    timestamp: Date.now().toString(),
  };

  return emailjs.send("service_sjea029", "template_bso642c", templateParams);
}

function validateAdminForm() {
  if (!document.getElementById("admin-terms").checked) {
    showMessage("Debes aceptar haber leído el reglamento y comprender las responsabilidades.", "error");
    return false;
  }
  if (!document.getElementById("admin-commitment").checked) {
    showMessage("Debes comprometerte a mantener la confidencialidad de la información.", "error");
    return false;
  }
  const requiredFields = [
    "admin-roblox-name", "admin-age", "admin-country", "admin-timezone",
    "admin-whatsapp", "admin-why", "admin-availability", "admin-improvements"
  ];
  for (const fieldId of requiredFields) {
    const field = document.getElementById(fieldId);
    if (field && field.hasAttribute("required") && !field.value.trim()) {
      const label = field.previousElementSibling?.textContent || field.name;
      showMessage(`Por favor, completa el campo: ${label}`, "error");
      field.focus();
      return false;
    }
  }
  const whyAdmin = document.getElementById("admin-why").value.trim();
  if (whyAdmin.length < 30) {
    showMessage("Por favor, explica con más detalle por qué quieres ser administrador (mínimo 30 caracteres).", "error");
    return false;
  }
  return true;
}

function showMessage(text, type, form = null) {
  let messageContainer;
  if (form) {
    messageContainer = form.querySelector(".form-messages");
    if (!messageContainer) {
      messageContainer = document.createElement("div");
      messageContainer.className = "form-messages";
      form.insertBefore(messageContainer, form.firstChild);
    }
  } else {
    messageContainer = document.querySelector(".form-messages");
    if (!messageContainer) {
      messageContainer = document.createElement("div");
      messageContainer.className = "form-messages";
      const formContainer = document.querySelector(".form-container");
      if (formContainer) formContainer.insertBefore(messageContainer, formContainer.firstChild);
    }
  }
  messageContainer.innerHTML = "";
  let alertClass = type === "success" ? "alert-success" : (type === "error" ? "alert-danger" : "alert-info");
  const messageDiv = document.createElement("div");
  messageDiv.className = `alert ${alertClass}`;
  messageDiv.textContent = text;
  messageContainer.appendChild(messageDiv);
  setTimeout(() => { if (messageDiv.parentNode) messageDiv.remove(); }, 11000);
}


function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (!element) return;
  const header = document.querySelector("header");
  const headerHeight = header ? header.offsetHeight : 0;
  const targetPosition = element.offsetTop - headerHeight - 50;
  window.scrollTo({ top: targetPosition, behavior: "smooth" });
  element.style.transition = "all 0.5s ease";
  element.style.boxShadow = "0 0 0 5px rgba(46, 204, 113, 0.3)";
  setTimeout(() => element.style.boxShadow = "0 10px 30px rgba(46, 204, 113, 0.3)", 500);
  setTimeout(() => element.style.boxShadow = "", 1500);
}