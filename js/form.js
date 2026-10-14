/**
 * HONE Bakes — Enquiry Form & Validation
 * Handles client-side validation, accessible alerts, and seamless IG integration.
 */

import { PRODUCTS } from './products.js';
import { BRAND_CONFIG } from './config.js';

export function initOrderForm(currentLang = "en") {
  const form = document.getElementById("order-form");
  const bakeSelect = document.getElementById("order-bake");
  const dateInput = document.getElementById("order-date");
  const feedbackModal = document.getElementById("form-feedback-modal");
  const feedbackClose = document.getElementById("form-feedback-close");
  const feedbackSummary = document.getElementById("form-feedback-summary");

  if (!form) return;

  // Set min date to today + 2 days (standard artisan pre-order window)
  if (dateInput) {
    const today = new Date();
    today.setDate(today.getDate() + 2);
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    dateInput.min = `${yyyy}-${mm}-${dd}`;
  }

  // Populate Bakes dropdown dynamically if empty
  if (bakeSelect && bakeSelect.options.length <= 1) {
    PRODUCTS.forEach(p => {
      const opt = document.createElement("option");
      opt.value = p.id;
      opt.textContent = currentLang === "zh" ? `${p.nameZh} (${p.category})` : `${p.nameEn} (${p.category})`;
      bakeSelect.appendChild(opt);
    });
  }

  // Validation helper
  function validateField(inputEl, errorEl, validatorFn, errorMsg) {
    const val = inputEl.value.trim();
    const isValid = validatorFn(val);
    if (!isValid) {
      inputEl.setAttribute("aria-invalid", "true");
      inputEl.classList.add("has-error");
      if (errorEl) {
        errorEl.textContent = errorMsg;
        errorEl.style.display = "block";
      }
      return false;
    } else {
      inputEl.removeAttribute("aria-invalid");
      inputEl.classList.remove("has-error");
      if (errorEl) {
        errorEl.textContent = "";
        errorEl.style.display = "none";
      }
      return true;
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("order-name");
    const contactInput = document.getElementById("order-contact");
    const notesInput = document.getElementById("order-notes");

    const errName = document.getElementById("err-name");
    const errContact = document.getElementById("err-contact");
    const errBake = document.getElementById("err-bake");

    const reqMsg = currentLang === "zh" ? "此项为必填项。" : "This field is required.";
    const contactMsg = currentLang === "zh" ? "请输入有效的联系方式 (手机、邮箱或 IG 账号)。" : "Please provide a valid phone, email or @handle.";

    const isNameValid = validateField(nameInput, errName, (v) => v.length >= 2, reqMsg);
    const isContactValid = validateField(contactInput, errContact, (v) => {
      // accepts email, singapore phone numbers (+65 / 8xxx / 9xxx), or @instagram handle
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^(\+?65)?[689]\d{7}$/;
      const igRegex = /^@[a-zA-Z0-9._]{2,30}$/;
      return emailRegex.test(v) || phoneRegex.test(v.replace(/\s+/g, '')) || igRegex.test(v) || v.length >= 5;
    }, contactMsg);

    const isBakeValid = validateField(bakeSelect, errBake, (v) => v !== "" && v !== "default", reqMsg);

    if (!isNameValid || !isContactValid || !isBakeValid) {
      // Focus first error
      const firstError = form.querySelector(".has-error");
      if (firstError) firstError.focus();
      return;
    }

    // Submit state (demo simulation)
    const submitBtn = form.querySelector("button[type='submit']");
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"/>
        <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"/>
      </svg>
      <span>${currentLang === "zh" ? "正在提交..." : "Submitting..."}</span>
    `;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;

      const selectedBakeObj = PRODUCTS.find(p => p.id === bakeSelect.value);
      const bakeName = selectedBakeObj 
        ? (currentLang === "zh" ? selectedBakeObj.nameZh : selectedBakeObj.nameEn)
        : bakeSelect.value;

      // Populate feedback modal
      if (feedbackSummary) {
        feedbackSummary.innerHTML = `
          <div class="feedback-receipt">
            <p><strong>${currentLang === "zh" ? "预订顾客" : "Customer"}:</strong> ${nameInput.value.trim()}</p>
            <p><strong>${currentLang === "zh" ? "联系方式" : "Contact"}:</strong> ${contactInput.value.trim()}</p>
            <p><strong>${currentLang === "zh" ? "所选烘焙" : "Requested Bake"}:</strong> ${bakeName}</p>
            <p><strong>${currentLang === "zh" ? "期望日期" : "Preferred Date"}:</strong> ${dateInput ? dateInput.value || (currentLang === "zh" ? "待定" : "Flexible") : ""}</p>
          </div>
        `;
      }

      if (feedbackModal) {
        feedbackModal.classList.add("is-active");
        feedbackModal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");
      }

      // Reset form
      form.reset();
    }, 600);
  });

  if (feedbackClose && feedbackModal) {
    feedbackClose.addEventListener("click", () => {
      feedbackModal.classList.remove("is-active");
      feedbackModal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
    });
  }
}
