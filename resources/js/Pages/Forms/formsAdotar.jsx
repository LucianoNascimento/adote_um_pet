import './formsAdotar.css'
import React, { useState } from 'react';

function AdotarComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    petType: '',
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
    <div className="adoption-form">
      <h2>Formulário de Adoção de Pet</h2>
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
          <label htmlFor="address">Endereço:</label>
          <input 
            type="text" 
            id="address" 
            name="address" 
            value={formData.address} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label htmlFor="petType">Tipo de Pet:</label>
          <select 
            id="petType" 
            name="petType" 
            value={formData.petType} 
            onChange={handleChange} 
            required
          >
            <option value="">Selecione</option>
            <option value="dog">Cachorro</option>
            <option value="cat">Gato</option>
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

export default AdotarComponent;

