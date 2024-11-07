  import './formsDoar.css'
  import React, { useEffect, useState } from 'react';

  function DoarComponent() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      petName: '',
      petType: '',
      otherType: '',
      petAge: '',
      message: '',
      petImage: '',
    });
  useEffect(() =>{
    if(formData.petType !== "other"){
    setFormData(prevState =>({
      ...prevState,otherType:''
    }))
  }
  },[formData.petType])

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
      <div className="donation-form">
        <h2>Formulário de Doação de Pet</h2>
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
            <label htmlFor="petName">Nome do Pet:</label>
            <input 
              type="text" 
              id="petName" 
              name="petName" 
              value={formData.petName} 
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
          {formData.petType === 'other' && ( 
            <div>
            <label htmlFor="otherType">Informe qual outro tipo:</label>
            <input 
              id="otherType" 
              name="otherType" 
              value={formData.otherType} 
              onChange={handleChange}
                  />
          </div>
          )}
          <div>
            <label htmlFor="petAge">Idade do Pet:</label>
            <input 
              type="text" 
              id="petAge" 
              name="petAge" 
              value={formData.petAge} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div>
            <label htmlFor="petImage">Imagem do Pet:</label>
            <input 
              type="file" 
              id="petImage" 
              name="petImage" 
              onChange={handleChange} 
              accept= "image/*"
            />
          </div>
          <div>
            <label htmlFor="message">Informações sobre o Pet:</label>
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

  export default DoarComponent;