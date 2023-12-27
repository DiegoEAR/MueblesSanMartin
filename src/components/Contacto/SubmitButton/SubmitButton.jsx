import React from 'react';
import { ButtonFormStyled } from './SubmitButtonStyled';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';

const SubmitButton = ({ onSubmit }) => {
  const handleClick = () => {
    Swal.fire({
      title: '¿Desea enviar el formulario?',
      text: `Nos contactaremos lo antes posible.`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3131ce',
      cancelButtonColor: 'var(--secondary)',
      confirmButtonText: 'Enviar',
    }).then((result) => {
      if (result.isConfirmed) {
        onSubmit();
        Swal.fire('¡Formulario enviado con éxito!', 'Nos contactaremos a la brevedad.', 'success');
      }
    });
  };

  return (
    <motion.div whileTap={{ scale: 0.8 }}>
      <ButtonFormStyled onClick={handleClick} type='button'>
        Enviar
      </ButtonFormStyled>
    </motion.div>
  );
};

export default SubmitButton;