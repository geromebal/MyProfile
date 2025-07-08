    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");
    const mobileMenu = document.getElementById("mobile-menu");

    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    const headingElement = document.getElementById('intro-heading');
    const subtextElement = document.getElementById('intro-subtext');

    const headingTexts = ["I'm Gerome Baldogo", "I'm a Junior Web Developer"];
    const subtext = "I am a passionate and detail-oriented Junior Web Developer with a solid foundation in software development.";

    let headingIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isHeadingComplete = false;
    let subCharIndex = 0;
    let subtextTypedOnce = false; // 👈 NEW FLAG

    function typeHeading() {
      const currentText = headingTexts[headingIndex];
      headingElement.textContent = currentText.substring(0, charIndex);

      if (!isDeleting) {
        if (charIndex < currentText.length) {
          charIndex++;
          setTimeout(typeHeading, 100);
        } else {
          isHeadingComplete = true;

          // ✅ Only type subtext once
          if (!subtextTypedOnce) {
            setTimeout(() => typeSubtext(), 800);
          }

          setTimeout(() => {
            isDeleting = true;
            setTimeout(typeHeading, 3000);
          }, 4000);
        }
      } else {
        if (charIndex > 0) {
          charIndex--;
          headingElement.textContent = currentText.substring(0, charIndex);
          setTimeout(typeHeading, 50);
        } else {
          isDeleting = false;
          isHeadingComplete = false;
          headingIndex = (headingIndex + 1) % headingTexts.length;
          setTimeout(typeHeading, 500);
        }
      }
    }

    function typeSubtext() {
      if (!isHeadingComplete || subtextTypedOnce) return;
      if (subCharIndex < subtext.length) {
        subtextElement.textContent += subtext.charAt(subCharIndex);
        subCharIndex++;
        setTimeout(typeSubtext, 50);
      } else {
        subtextTypedOnce = true; // ✅ Mark as done
      }
    }

    document.addEventListener("DOMContentLoaded", typeHeading);

    const cursor = document.getElementById('customCursor');
    document.addEventListener('mousemove', e => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });

    document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
      duration: 1000,
      once: false
    });
  });
