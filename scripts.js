document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const fullname = document.getElementById("fullname");
    const email = document.getElementById("email");
    const comment = document.getElementById("comment");
    const submitButton = document.getElementById("submit-button");
  
    function validateFullname() {
      const fullnameRegex = /^[a-zA-Z\s]+$/;
      return fullnameRegex.test(fullname.value);
    }
  
    function validateEmail() {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email.value);
    }

    function validateComment() {
        const commentRegex = /^[a-zA-Z\s]+$/;
        return commentRegex.test(comment.value);
      }
  
  
  
    function updateValidationStatus(element, isValid, errorMessage) {
      const errorElement = element.nextElementSibling;
      errorElement.innerHTML = isValid ? "" : errorMessage;
      errorElement.style.color = "red";
    }
  
    fullname.addEventListener("input", () => {
      updateValidationStatus(fullname, validateFullname(), "Please enter a valid name.");
      enableSubmitButton();
    });
  
    email.addEventListener("input", () => {
      updateValidationStatus(email, validateEmail(), "Invalid email address.");
      enableSubmitButton();
    });

    comment.addEventListener("input", () => {
        updateValidationStatus(comment, validateComment(), "Please enter a valid comment.");
        enableSubmitButton();
      });
  
  });