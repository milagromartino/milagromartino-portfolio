import React from "react";
import './mobile.css'
function Mobile({ isOpen, setIsOpen}) {
  return (
  <div className="mobile">
    <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
      <i class="fi-rr-cross-circle"></i>
    </div>
    <div className="mobile-option">
    <a href="#projects" >
          <i class="fi-rr-edit-alt option-icon"></i>Proyectos
        </a>
    </div>
    <div className="mobile-option">
        <a href="#skills">
        <i class="fi-rr-laptop option-icon"></i>Habilidades
        </a>
    </div>
    <div className="mobile-option">
        <a href="#work">
        <i class="fi-rr-briefcase option-icon"></i>Certificados
        </a>
    </div>
    <div className="mobile-option">
        <a href="#contact">
        <i class="fi fi-rr-user option-icon"></i>Contacto
        </a>
    </div>
  </div>
  );
}

export default Mobile;