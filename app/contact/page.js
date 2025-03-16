'use client';

import { useEffect } from "react";
import { motion } from "framer-motion";
import { setupScrollAnimation } from "../utils/animation";

export default function Contact() {
  useEffect(() => {
    const cleanup = setupScrollAnimation();
    return cleanup;
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="contact-section py-5">
      <div className="container">
        <h2 className="section-title">Kontak Kami 📩</h2>
        
        <div className="row">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="card shadow h-100"
            >
              <div className="card-body p-4">
                <h3 className="card-title mb-4">Get In Touch 👋</h3>
                <p className="card-text mb-4">
                  Need to talk about a project or just want to say hi? Feel free to reach out through the form or directly via:
                </p>
                
                <motion.div 
                  className="mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-box me-3">
                      <i className="fas fa-map-marker-alt text-primary fs-4"></i>
                    </div>
                    <div>
                      <h5 className="mb-0">Location</h5>
                      <p className="mb-0">Jakarta, Indonesia</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-box me-3">
                      <i className="fas fa-envelope text-primary fs-4"></i>
                    </div>
                    <div>
                      <h5 className="mb-0">Email</h5>
                      <p className="mb-0">contact@example.com</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-center">
                    <div className="icon-box me-3">
                      <i className="fas fa-phone-alt text-primary fs-4"></i>
                    </div>
                    <div>
                      <h5 className="mb-0">Phone</h5>
                      <p className="mb-0">+62 123 4567 890</p>
                    </div>
                  </div>
                </motion.div>
                
                <h5 className="mb-3">Find me on:</h5>
                <div className="d-flex gap-3">
                  <a href="#" className="btn btn-outline-primary rounded-circle">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="btn btn-outline-primary rounded-circle">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="btn btn-outline-primary rounded-circle">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="btn btn-outline-primary rounded-circle">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="col-lg-7">
            <motion.form
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="card shadow"
            >
              <div className="card-body p-4">
                <h3 className="card-title mb-4">Send Message 📧</h3>
                
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <motion.div variants={itemVariants}>
                      <label htmlFor="name" className="form-label">Nama</label>
                      <div className="input-group">
                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="name" 
                          placeholder="Masukkan nama"
                        />
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="col-md-6 mb-3">
                    <motion.div variants={itemVariants}>
                      <label htmlFor="email" className="form-label">Email</label>
                      <div className="input-group">
                        <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                        <input 
                          type="email" 
                          className="form-control" 
                          id="email" 
                          placeholder="Masukkan email"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                <motion.div className="mb-3" variants={itemVariants}>
                  <label htmlFor="subject" className="form-label">Subjek</label>
                  <div className="input-group">
                    <span className="input-group-text"><i className="fas fa-pen"></i></span>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="subject" 
                      placeholder="Masukkan subjek"
                    />
                  </div>
                </motion.div>
                
                <motion.div className="mb-4" variants={itemVariants}>
                  <label htmlFor="message" className="form-label">Pesan</label>
                  <div className="input-group">
                    <span className="input-group-text"><i className="fas fa-comment"></i></span>
                    <textarea 
                      className="form-control" 
                      id="message" 
                      rows="5" 
                      placeholder="Masukkan pesan"
                    ></textarea>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    className="btn btn-primary w-100 py-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <i className="fas fa-paper-plane me-2"></i> Kirim Pesan 📩
                  </motion.button>
                </motion.div>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}