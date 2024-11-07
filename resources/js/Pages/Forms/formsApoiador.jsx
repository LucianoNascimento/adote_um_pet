import './formsApoiador.css'
import React, { useState } from 'react';

function ApoiadorComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    supportType: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., send data to your server
    console.log('Form submitted:', formData);
    alert('Form submitted!'); // Placeholder alert for demonstration
  };

  return (
    <div className="supporter-form">
      <h2>Formulário de Apoiador de Pet</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label htmlFor="phone">Telefone:</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label htmlFor="supportType">Tipo de Apoio:</label>
          <select 
            id="supportType" 
            name="supportType" 
            value={formData.supportType} 
            onChange={handleChange} 
            required
          >
            <option value="">Selecione</option>
            <option value="donation">Doação</option>
            <option value="volunteer">Voluntariado</option>
            <option value="foster">Adoção Temporária</option>
            <option value="other">Outro</option>
          </select>
        </div>
        <div>
          <label htmlFor="message">Mensagem:</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ApoiadorComponent;
