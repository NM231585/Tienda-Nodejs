import { useState } from 'react';
import Layout from '../components/Layout.tsx';
import { motion } from 'framer-motion';
import { Camera, Save, User, Mail, Phone, MapPin, Building } from 'lucide-react';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    nombre: 'Juan Pérez',
    correo: 'juan.perez@ejemplo.com',
    telefono: '+503 7000-0000',
    departamento: 'San Salvador',
    municipio: 'San Salvador',
    imagen: 'https://placehold.co/200x200/10b981/ffffff?text=JP',
  });

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    // Aquí iría la lógica para guardar en el backend
    alert('Perfil actualizado con éxito');
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Header Profile */}
          <div className="bg-gradient-to-r from-[var(--color-primary-hover)] to-[var(--color-primary)] h-32 md:h-48 relative">
            <div className="absolute -bottom-16 left-8 md:left-12 flex items-end">
              <div className="relative">
                <img 
                  src={profileData.imagen} 
                  alt="Profile" 
                  className="w-32 h-32 rounded-full border-4 border-[var(--color-surface)] object-cover bg-white"
                />
                {isEditing && (
                  <button className="absolute bottom-0 right-0 bg-[var(--color-surface)] p-2 rounded-full border border-[var(--color-border)] hover:bg-[var(--color-background)] transition-colors">
                    <Camera size={20} className="text-[var(--color-text-main)]" />
                  </button>
                )}
              </div>
            </div>
            <div className="absolute top-4 right-4">
              {isEditing ? (
                <button onClick={handleSave} className="flex items-center gap-2 bg-white text-[var(--color-primary-hover)] font-bold px-4 py-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                  <Save size={18} /> Guardar
                </button>
              ) : (
                <button onClick={() => setIsEditing(true)} className="flex items-center gap-2 bg-[var(--color-surface)]/20 backdrop-blur-md text-white font-bold px-4 py-2 rounded-full border border-white/30 hover:bg-white/30 transition-colors">
                  Editar Perfil
                </button>
              )}
            </div>
          </div>

          {/* Profile Form */}
          <div className="pt-24 pb-8 px-8 md:px-12">
            <h2 className="text-2xl font-black text-[var(--color-text-main)] mb-6">Información Personal</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Nombre */}
              <div>
                <label className="block text-sm font-bold text-[var(--color-text-main)] mb-2">Nombre Completo</label>
                <div className="relative">
                  <input
                    type="text"
                    name="nombre"
                    value={profileData.nombre}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text-main)] px-4 py-3 pl-11 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] disabled:opacity-70 disabled:bg-[var(--color-surface)] transition-all"
                  />
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" size={20} />
                </div>
              </div>

              {/* Correo */}
              <div>
                <label className="block text-sm font-bold text-[var(--color-text-main)] mb-2">Correo Electrónico</label>
                <div className="relative">
                  <input
                    type="email"
                    name="correo"
                    value={profileData.correo}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text-main)] px-4 py-3 pl-11 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] disabled:opacity-70 disabled:bg-[var(--color-surface)] transition-all"
                  />
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" size={20} />
                </div>
              </div>

              {/* Teléfono */}
              <div>
                <label className="block text-sm font-bold text-[var(--color-text-main)] mb-2">Teléfono</label>
                <div className="relative">
                  <input
                    type="tel"
                    name="telefono"
                    value={profileData.telefono}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text-main)] px-4 py-3 pl-11 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] disabled:opacity-70 disabled:bg-[var(--color-surface)] transition-all"
                  />
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" size={20} />
                </div>
              </div>

              {/* Departamento */}
              <div>
                <label className="block text-sm font-bold text-[var(--color-text-main)] mb-2">Departamento</label>
                <div className="relative">
                  <input
                    type="text"
                    name="departamento"
                    value={profileData.departamento}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text-main)] px-4 py-3 pl-11 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] disabled:opacity-70 disabled:bg-[var(--color-surface)] transition-all"
                  />
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" size={20} />
                </div>
              </div>

              {/* Municipio */}
              <div>
                <label className="block text-sm font-bold text-[var(--color-text-main)] mb-2">Municipio</label>
                <div className="relative">
                  <input
                    type="text"
                    name="municipio"
                    value={profileData.municipio}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text-main)] px-4 py-3 pl-11 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] disabled:opacity-70 disabled:bg-[var(--color-surface)] transition-all"
                  />
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" size={20} />
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
